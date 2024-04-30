"use client";
import { OSDetails, OSTypes } from "@/data";
import { useGlobalStates } from "@/state";
import { classNames } from "@/utils/styling";
import Image from "next/image";
import { useMemo } from "react";
import { ShowWhen } from "../utils";
import { SelectTick } from "../SelectTick";

interface Props extends OSDetails {
  os: OSTypes;
}

export function InstanceOS({ icon, title, os }: Props) {
  const { deployInstance, setDeployInstance } = useGlobalStates();
  const isSelected = useMemo(
    () => deployInstance.os === os,
    [deployInstance, os]
  );
  function onClick() {
    setDeployInstance((prev) => ({ ...prev, os }));
  }

  return (
    <div
      onClick={onClick}
      className={classNames(
        "w-full relative rounded border border-neutral-800 bg-opacity-50 p-4 cursor-pointer transition-colors duration-500 ease-in-out",
        isSelected ? "bg-neutral-500 border-0" : "border-neutral-800"
      )}
    >
      <div className="flex flex-row items-center">
        <Image
          height={200}
          width={200}
          src={icon}
          alt=""
          className="max-w-[25px] mr-4"
        />
        <p className="font-bold text-sm">{title}</p>
        <ShowWhen show={<SelectTick />} when={isSelected} />
      </div>
    </div>
  );
}
