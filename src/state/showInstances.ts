import { atom, useAtom } from "jotai";

const showInstancesAtom = atom(true);

export function useShowInstances() {
  const [showInstances, setShowInstances] = useAtom(showInstancesAtom);
  return { showInstances, setShowInstances };
}
