"use client";
import { InstanceType, InstanceTypeDetail } from "@/data";
import { useGlobalStates } from "@/state";
import { SelectTick } from "../SelectTick";
import { ShowWhen } from "../utils";
import { classNames } from "@/utils/styling";
import { useMemo } from "react";

interface Props extends InstanceTypeDetail {
  type: InstanceType;
}

export function InstanceTypeComp({ icon, title, description, type }: Props) {
  const { deployInstance, setDeployInstance } = useGlobalStates();
  const isSelected = useMemo(
    () => deployInstance.type === type,
    [deployInstance, type]
  );
  function onClick() {
    setDeployInstance((prev) => ({ ...prev, type, plan: null }));
  }

  return (
    <div
      onClick={onClick}
      className={classNames(
        "w-full relative rounded border border-neutral-800 bg-opacity-50 p-4 cursor-pointer transition-colors duration-500 ease-in-out",
        isSelected ? "bg-neutral-500 border-0" : "border-neutral-800"
      )}
    >
      <p className="font-bold text-sm">
        {icon}
        {title}
        <ShowWhen show={<SelectTick />} when={isSelected} />
      </p>
      <p className="text-sm mt-3 text-zinc-400">{description}</p>
    </div>
  );
}
