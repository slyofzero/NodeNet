import { DeployInstance } from "@/types";
import { atom, useAtom } from "jotai";
null;

const initialInstanceChoice: DeployInstance = {
  type: "cloud_compute",
  location: "us",
  os: "ubuntu",
  plan: "competitor",
};

const deployInstanceAtom = atom<DeployInstance>(initialInstanceChoice);

export function useDeployInstance() {
  const [deployInstance, setDeployInstance] = useAtom(deployInstanceAtom);
  return { deployInstance, setDeployInstance };
}
