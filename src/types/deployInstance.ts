import { InstanceType, Locations, OSTypes } from "@/data";

export interface DeployInstance {
  type: InstanceType;
  location: Locations;
  os: OSTypes;
  plan: string | null;
}
