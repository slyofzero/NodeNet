import { ConnectButton as RainbowConnect } from "@rainbow-me/rainbowkit";

export function ConnectButton() {
  return (
    <RainbowConnect
      label="Sign In"
      chainStatus={"none"}
      accountStatus={"full"}
      showBalance={false}
    />
  );
}
