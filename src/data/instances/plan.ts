import { InstanceType } from "./types";

export interface PlanDetails {
  name: string;
  cores: string;
  memory: string;
  bandwidth: string;
  price: number;
  hourlyRate: number;
}

export const instancePlans: {
  [K in InstanceType]: { [key: string]: PlanDetails };
} = {
  cloud_compute: {
    competitor: {
      name: "Competitor",
      cores: "2 vCPUs (virtual CPUs)",
      memory: "4GB",
      bandwidth: "5GB",
      price: 50,
      hourlyRate: 0.069,
    },
    premium: {
      name: "Premium",
      cores: "2 vCPUs (virtual CPUs)",
      memory: "8GB",
      bandwidth: "5GB",
      price: 75,
      hourlyRate: 0.1,
    },
  },
  dedicated: {
    basic: {
      name: "Basic",
      cores: "4 vCPUs (virtual CPUs)",
      memory: "16GB",
      bandwidth: "5GB",
      price: 200,
      hourlyRate: 0.27,
    },
    premium: {
      name: "Premium",
      cores: "8 vCPUs (virtual CPUs)",
      memory: "32GB",
      bandwidth: "5GB",
      price: 380,
      hourlyRate: 0.53,
    },
  },
  gaming: {
    small: {
      name: "Small DataPack",
      cores: "2 vCPU",
      memory: "2GB",
      bandwidth: "5GB",
      price: 30,
      hourlyRate: 0.0417,
    },
    big: {
      name: "Big DataPack",
      cores: "2 vCPU",
      memory: "8GB",
      bandwidth: "5GB",
      price: 55,
      hourlyRate: 0.076,
    },
  },
};
