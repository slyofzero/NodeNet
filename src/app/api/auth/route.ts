import { createToken } from "@/utils/auth";
import { signingMessage } from "@/utils/constants";
import { ethers } from "ethers";

export async function POST(req: Request) {
  const { signature, address } = await req.json();

  try {
    const signerAddress = ethers.utils.verifyMessage(signingMessage, signature);
    if (signerAddress.toLowerCase() === address.toLowerCase()) {
      const token = createToken(address);

      return Response.json({ token });
    } else {
      return Response.json({ error: "Invalid signature" }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ error: "Invalid signature" }, { status: 500 });
  }
}
