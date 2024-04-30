import { atom, useAtom } from "jotai";
import { useAccount, useSignMessage } from "wagmi";

const isSignedAtom = atom(false);

export function useAuth() {
  const account = useAccount();
  const signing = useSignMessage();
  const [isSigned, setIsSigned] = useAtom(isSignedAtom);

  return { ...account, ...signing, isSigned, setIsSigned };
}
