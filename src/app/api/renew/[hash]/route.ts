import { addDocument, getDocument, updateDocumentById } from "@/config";
import { web3 } from "@/config/rpc";
import { DeployInstance, StoredInstance, StoredOrder } from "@/types";
import { validateAuth } from "@/utils/auth";
import { log } from "@/utils/handlers";
import { createInstance, getInstanceState, startInstance } from "@/utils/aws";
import { CLOUD_AWS_ACCESS_KEY, CLOUD_AWS_ACCESS_KEY_ID } from "@/utils/env";
import AWS from "aws-sdk";
import { awsLocations } from "@/data/aws";
import { Timestamp } from "firebase-admin/firestore";
import { getUnlockedAccount } from "@/utils/web3";
import { instancePlans } from "@/data/instances/plan";
import { apiFetcher } from "@/utils/api";
import { ethPriceApi } from "@/utils/constants";

interface Params {
  hash: string;
}

export async function POST(req: Request, context: { params: Params }) {
  const user = await validateAuth(req);
  const { hash } = context.params;

  const orderInformation = (
    await getDocument<StoredOrder>({
      collectionName: "orders",
      queries: [["hash", "==", hash]],
    })
  ).at(0);

  if (!orderInformation)
    return Response.json({ message: "No order information" }, { status: 400 });
  else if (user !== orderInformation.user)
    return Response.json(
      { message: "User and order creator mismatch" },
      { status: 401 }
    );

  const { type, plan } = orderInformation;

  const address = await getUnlockedAccount();
  const priceUsd = instancePlans[type][plan].price;
  const ethPrice = (await apiFetcher<any>(ethPriceApi)).data.ethereum.usd;

  console.log(priceUsd, ethPrice);

  const toPay = parseFloat((priceUsd / ethPrice).toFixed(8));

  updateDocumentById<StoredOrder>({
    collectionName: "orders",
    id: hash,
    updates: {
      sentTo: address,
      renewalStatus: "PENDING",
      renewalPay: toPay,
    },
  });

  return Response.json({ address, hash, toPay });
}

export async function GET(req: Request, context: { params: Params }) {
  const user = await validateAuth(req);
  const { hash } = context.params;

  const [orderPromise, instancePromise] = await Promise.all([
    getDocument<StoredOrder>({
      collectionName: "orders",
      queries: [["hash", "==", hash]],
    }),
    getDocument<StoredInstance>({
      collectionName: "instances",
      queries: [["hash", "==", hash]],
    }),
  ]);

  const orderInformation = orderPromise.at(0);
  const instance = instancePromise.at(0);

  if (!orderInformation)
    return Response.json({ message: "No order information" }, { status: 400 });
  else if (!instance) {
    return Response.json(
      { message: "Instance belonging to this hash not found" },
      { status: 400 }
    );
  } else if (user !== orderInformation.user)
    return Response.json(
      { message: "User and order creator mismatch" },
      { status: 401 }
    );

  const { sentTo, toPay, location, id: orderId } = orderInformation;

  // ---------- Checking payment ----------
  const balance = await web3.eth.getBalance(sentTo);

  if (balance < Number(web3.utils.toWei(toPay, "ether"))) {
    log(`Transaction amount doesn't match`);
    return Response.json({ message: "Payment not verified" }, { status: 402 });
  }

  const currentTimestamp = Timestamp.now();
  updateDocumentById<StoredOrder>({
    collectionName: "orders",
    updates: { status: "PAID", paidAt: currentTimestamp },
    id: orderId || "",
  });

  // ---------- Creating instance ----------

  AWS.config.update({
    accessKeyId: CLOUD_AWS_ACCESS_KEY_ID,
    secretAccessKey: CLOUD_AWS_ACCESS_KEY,
    region: awsLocations[location],
  });

  const ec2 = new AWS.EC2();
  const state = await getInstanceState(ec2, instance.instanceId);

  if (state === "stopping" || state === "stopped") {
    const started = await startInstance(ec2, instance.instanceId);

    if (!started) {
      return Response.json(
        { message: `Couldn't start instanceId ${instance.instanceId}` },
        { status: 400 }
      );
    }
  }

  let terminatesAt = new Timestamp(
    instance.terminatesAt.seconds + 30 * 24 * 60 * 60,
    instance.terminatesAt.nanoseconds
  );

  if (instance.status === "STOPPED") {
    const currentTimestamp = Timestamp.now();
    terminatesAt = new Timestamp(
      currentTimestamp.seconds + 30 * 24 * 60 * 60,
      currentTimestamp.nanoseconds
    );
  }

  updateDocumentById<StoredInstance>({
    collectionName: "instances",
    id: instance.id || "",
    updates: {
      status: "ACTIVE",
      terminatesAt,
    },
  });

  return Response.json({ message: "Success" });
}
