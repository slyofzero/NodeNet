"use client";
import { LocationDetails, Locations } from "@/data/instances/locations";
import { useGlobalStates } from "@/state";
import { useMemo } from "react";
import { ShowWhen } from "../utils";
import { SelectTick } from "../SelectTick";
import { classNames } from "@/utils/styling";

interface Props extends LocationDetails {
  location: Locations;
}

export function InstanceLocation({ icon, title, location }: Props) {
  const { deployInstance, setDeployInstance } = useGlobalStates();
  const isSelected = useMemo(
    () => deployInstance.location === location,
    [deployInstance, location]
  );
  function onClick() {
    setDeployInstance((prev) => ({ ...prev, location }));
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
        {icon}
        <p className="font-bold text-sm">{title}</p>
        <ShowWhen show={<SelectTick />} when={isSelected} />
      </div>
    </div>
  );
}
