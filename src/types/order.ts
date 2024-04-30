import { InstanceType, Locations, OSTypes } from "@/data";
import { Timestamp } from "firebase-admin/firestore";

export interface StoredOrder {
  id?: string;
  status: "PENDING" | "PAID" | "EXPIRED";
  type: InstanceType;
  location: Locations;
  os: OSTypes;
  plan: string;
  hash: string;
  sentTo: string;
  paidAt?: Timestamp;
  toPay: number;
  user: string;
  renewalPay?: number;
  renewalStatus?: "PENDING" | "PAID";
}
