import { roundUpToDecimalPlace } from "@/utils/general";
import { Modal } from ".";
import { classNames, primaryBtnClass } from "@/utils/styling";
import { Dispatch } from "react";
import { SetStateAction } from "jotai";
import { StoredOrder } from "@/types";
import Image from "next/image";
import { CopyIcon } from "../icons";

export interface PaymentDetail {
  address: string;
  hash: string;
  toPay: number;
}

export interface PaymentVerificationDetail {
  message: string;
}

interface Props {
  setShowPaymentModal: Dispatch<SetStateAction<boolean>>;
  paymentDetail: PaymentDetail | null | undefined;
  verifyPayment: () => void;
  btnText: string;
}

export function PaymentModal({
  setShowPaymentModal,
  paymentDetail,
  verifyPayment,
  btnText,
}: Props) {
  return (
    <Modal setShowModal={setShowPaymentModal}>
      <div className="flex flex-col space-y-2 w-full mb-4">
        <label className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Address
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
            value={paymentDetail?.address}
          />

          <CopyIcon value={paymentDetail?.address || ""} />
        </div>
      </div>

      <div className="flex flex-col space-y-2 w-full mb-4">
        <label className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          To Pay
        </label>
        <div
          className="p-[2px] rounded-lg transition duration-300 group/input"
          style={{
            background:
              "radial-gradient(0px circle at 48px 34.633331298828125px,var(--purple-600),transparent 80%",
          }}
        >
          <input
            className="input-field"
            id="address"
            value={roundUpToDecimalPlace(paymentDetail?.toPay, 3)}
          />
        </div>
      </div>

      <div>
        Send the above address {roundUpToDecimalPlace(paymentDetail?.toPay, 3)}{" "}
        ETH and then click on &quot;I have paid&quot; after sending. Your
        payment should be verified in less than a minute.
      </div>

      <button
        onClick={verifyPayment}
        className={classNames(primaryBtnClass, "mt-4 mx-auto")}
      >
        {btnText}
      </button>
    </Modal>
  );
}
