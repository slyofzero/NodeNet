"use client";

import React, { useMemo, useState } from "react";
// typeWrite
import Typewriter from "@/components/typewriter";
import { ConnectButton } from "../blockchain";
import { ShowWhen } from "../utils";
import { useAuth, useGlobalStates } from "@/state";
import { DeployInstance, DeployInstanceButton } from "../DeployInstance";
import { Instances } from "../Instances";

export default function HomeMain() {
  const [activeTab, setActiveTab] = useState("Complete");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const { showInstances } = useGlobalStates();
  const { isConnected, isSigned } = useAuth();
  const isConnectedAndSigned = useMemo(
    () => isSigned && isConnected,
    [isSigned, isConnected]
  );

  const disconnectedDashboard = (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl font-bold text-neutral-100">
        Sign In to view Dashboard
      </h1>
      <p className="text-neutral-200 w-1/3 text-center">
        To deploy a server or view your existing ones, please sign in using your
        Ethereum wallet
      </p>

      <div className="mt-4">
        <ConnectButton />
      </div>
    </div>
  );

  const connectedDashboard = (
    <ShowWhen
      show={<Instances />}
      when={showInstances}
      otherwise={<DeployInstance />}
    />
  );

  return (
    <div className="mb-20 mt-10">
      <div className="flex items-center gap-4">
        <button
          className={` p-3 text-lg ${
            activeTab === "Complete"
              ? "border-b-2 border-white text-white"
              : "text-[#FFFFFF66]"
          }`}
          onClick={() => handleTabClick("Complete")}
        >
          Complete
        </button>
        <button
          className={`  p-3 text-lg ${
            activeTab === "Dedicated"
              ? "border-b-2 border-white text-white"
              : "text-[#FFFFFF66]"
          }`}
          onClick={() => handleTabClick("Dedicated")}
        >
          Dedicated
        </button>
        <button
          className={`   p-3 text-lg ${
            activeTab === "Hobby"
              ? "border-b-2 border-white text-white"
              : "text-[#FFFFFF66]"
          }`}
          onClick={() => handleTabClick("Hobby")}
        >
          Hobby
        </button>

        <div className="w-full flex justify-end">
          <ShowWhen
            show={<DeployInstanceButton />}
            when={isConnectedAndSigned}
          />
        </div>
      </div>
      <div className="bg-[#1c1c1c87] rounded-2xl w-full h-[402px] flex flex-col justify-center items-center mt-10">
        <ShowWhen
          show={connectedDashboard}
          when={isConnectedAndSigned}
          otherwise={disconnectedDashboard}
        />
      </div>
    </div>
  );
}
