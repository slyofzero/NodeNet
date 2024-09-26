"use client";
import { useApi } from "@/hooks";
import { DeployInstanceButton } from "./DeployInstance";
import { StoredInstance } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { ShowWhen } from "./utils";
import { classNames, primaryBtnClass } from "@/utils/styling";
import { instanceLocations } from "@/data";
import moment from "moment";
import { Modal } from "./Modal";
import { clientFetcher, clientFileDownload, clientPoster } from "@/utils/api";
import { PaymentModal, PaymentVerificationDetail } from "./Modal/PaymentModal";
import { sleep } from "@/utils/time";
import Typewriter from "./typewriter";
import { CopyIcon } from "./icons";

interface SWRResponse {
  instances: StoredInstance[];
}

interface Props {
  instance: StoredInstance;
}

interface PaymentDetail {
  address: string;
  hash: string;
  toPay: number;
}

export function Instance({ instance }: Props) {
  const location = instanceLocations[instance.location].title;
  // @ts-ignore
  const terminationDate = instance.terminatesAt._seconds * 1000;
  const date = new Date(terminationDate); // Convert seconds to milliseconds
  const terminatesAt = moment(date).format("DD/MM/YYYY");
  const [fileMsg, setFileMsg] = useState("");
  const differenceInDays = moment(terminationDate).fromNow();

  const [paymentDetail, setPaymentDetail] = useState<PaymentDetail | null>();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showInstanceModal, setShowInstanceModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "verifying" | "verified" | "failed" | "deploying" | "rejected" | null
  >();
  const onClick = () => {
    setShowInstanceModal(true);
  };

  async function downloadKeyPair() {
    const res = (
      await clientFileDownload(
        `/api/keyPair/${instance.hash}`,
        instance.keypair
      )
    ).response;

    console.log(res);

    if (res === 400) setFileMsg("File already downloaded");
  }

  useEffect(() => {
    if (!showPaymentModal) setPaymentStatus(null);
  }, [showPaymentModal]);

  async function renewPayment() {
    setPaymentStatus("deploying");

    const data = (
      await clientPoster<PaymentDetail>(`/api/renew/${instance.hash}`)
    ).data;

    setPaymentDetail(data);
    setShowInstanceModal(false);
    setShowPaymentModal(true);
  }

  const verifyPaymentBtnText = useMemo(() => {
    if (paymentStatus === "verifying") return "Checking...";
    else if (paymentStatus === "verified") return "Verified";
    else if (paymentStatus === "failed") return "Failed";
    else return "I have paid";
  }, [paymentStatus]);

  const instanceModal = (
    <Modal size="lg" setShowModal={setShowInstanceModal}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col space-y-2 w-full mb-4">
          <label className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            SSH Command
          </label>
          <div
            className="p-[2px] rounded-lg transition duration-300 group/input flex gap-2 items-center"
            style={{
              background:
                "radial-gradient(0px circle at 48px 34.633331298828125px,var(--purple-600),transparent 80%",
            }}
          >
            <input
              className="input-field"
              id="address"
              value={instance.sshCommand}
            />

            <CopyIcon value={instance.sshCommand || ""} />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <span className="whitespace-nowrap">Key Pair -</span>

          <button
            onClick={downloadKeyPair}
            className="bg-zinc-800 text-white px-3 py-2 rounded-md text-sm"
          >
            {instance.keypair}
          </button>

          <span
            className={classNames("text-sm", fileMsg ? "text-red-500" : "")}
          >
            {fileMsg ? (
              fileMsg
            ) : (
              <span className="hidden md:block">
                Click to download the keypair. Keep it safe as you won&apos;t be
                able to download it again.
              </span>
            )}
          </span>
        </div>

        <ShowWhen
          show={
            <div className="mt-4">
              Your server would stop <strong>{differenceInDays}</strong>. Upon
              stopping you won&apos;t be able to use your server, but the data
              on the server will persist. You may go back to using the server by
              renewing your subscription.
              <br />
              <br />
              Renew before the expiration date to avoid any disruptions.
            </div>
          }
          when={instance.status === "ACTIVE"}
          otherwise={
            <div className="mt-4 text-red-500">
              Your subscription has expired and your server has been stopped. To
              resume using the server, renew your subscription now!
            </div>
          }
        />

        <button
          onClick={renewPayment}
          className={classNames(primaryBtnClass, "mt-4 mx-auto")}
        >
          {paymentStatus === "deploying" ? "Preparing..." : "Renew"}
        </button>
      </div>
    </Modal>
  );

  async function verifyPayment() {
    if (paymentStatus && paymentStatus !== "deploying") return;

    setPaymentStatus("verifying");
    let attempt = 0;

    for (const attempt_number of Array.from(Array(20).keys())) {
      attempt = attempt_number + 1;
      console.log(`Attempt ${attempt}`);
      const data = await clientFetcher<PaymentVerificationDetail>(
        `/api/renew/${paymentDetail?.hash}`
      );

      if (data.response === 200) break;
      await sleep(5000);
    }

    if (attempt < 20) {
      setPaymentStatus("verified");
      await sleep(5000);
      setShowPaymentModal(false);
    } else setPaymentStatus("failed");
  }

  return (
    <>
      <ShowWhen show={instanceModal} when={showInstanceModal} />

      <ShowWhen
        show={
          <PaymentModal
            setShowPaymentModal={setShowPaymentModal}
            verifyPayment={verifyPayment}
            paymentDetail={paymentDetail}
            btnText={verifyPaymentBtnText}
          />
        }
        when={showPaymentModal}
      />

      <tr
        onClick={onClick}
        className={classNames(
          "flex flex-row relative items-center p-2 border-b border-neutral-800 cursor-pointer bg-opacity-50 transition-colors gap-16 md:gap-0"
        )}
      >
        <td className="w-full whitespace-nowrap text-sm font-bold capitalize">
          {instance.type}
        </td>
        <td className="w-full whitespace-nowrap text-sm capitalize">
          {instance.plan}
        </td>
        <td className="w-full whitespace-nowrap text-sm capitalize">
          {location}
        </td>
        <td className="w-full whitespace-nowrap text-sm">{instance.status}</td>
        <td className="w-full whitespace-nowrap text-sm">{terminatesAt}</td>
        <td className="w-full whitespace-nowrap text-sm">
          {instance.hash}.pem
        </td>
      </tr>
    </>
  );
}

export function Instances() {
  const { data } = useApi<SWRResponse>("/api/instances");
  const hasNoInstances = useMemo(() => data?.instances.length === 0, [data]);

  const noInstances = (
    <>
      <h1 className="text-[48px] font-extrabold gradient-text text-center">
        <Typewriter text="Welcome to the Nimbus" />
      </h1>
      <p className="text-lg">Get started by deploying your first instance</p>
      <DeployInstanceButton />
    </>
  );

  const instances = (
    <div className="w-full p-4 overflow-x-hidden">
      <div className="flex justify-between items-center gap-4 px-4">
        <h2 className="text-2xl">Instances</h2>
        <span className="font-bold text-xs sm:text-sm">Click to view</span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full rounded border border-neutral-800 mt-6 p-4">
          <tr className="flex flex-row items-center p-2 border-b border-neutral-800 gap-4 md:gap-0">
            <th className="w-full text-left text-sm text-zinc-400">Type</th>
            <th className="w-full text-left text-sm text-zinc-400">Plan</th>
            <th className="w-full text-left text-sm text-zinc-400">Location</th>
            <th className="w-full text-left text-sm text-zinc-400">Status</th>
            <th className="w-full text-left text-sm text-zinc-400">
              Terminates At
            </th>
            <th className="w-full text-left text-sm text-zinc-400">Keypair</th>
          </tr>

          {data?.instances.map((instance, key) => (
            <Instance key={key} instance={instance} />
          ))}
        </table>
      </div>
    </div>
  );

  return (
    <div
      className={classNames(
        "w-full h-full flex flex-col items-center",
        hasNoInstances ? "justify-center" : ""
      )}
    >
      <ShowWhen
        show={noInstances}
        when={hasNoInstances}
        otherwise={instances}
      />
    </div>
  );
}
