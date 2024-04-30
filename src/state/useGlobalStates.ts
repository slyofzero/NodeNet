import { useDeployInstance } from "./deployInstance";
import { useShowInstances } from "./showInstances";

export function useGlobalStates() {
  const showInstancesStates = useShowInstances();
  const deployInstanceStates = useDeployInstance();

  return { ...showInstancesStates, ...deployInstanceStates };
}
