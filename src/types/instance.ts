import { InstanceType, Locations } from "@/data";
import { Timestamp } from "firebase-admin/firestore";

export interface StoredInstance {
  id?: string;
  hash: string;
  user: string;
  status: "ACTIVE" | "STOPPED";
  terminatesAt: Timestamp;
  plan: string;
  type: InstanceType;
  location: Locations;
  instanceId: string;
  keypair: string;
  sshCommand: string;
  serverType: string;
}
