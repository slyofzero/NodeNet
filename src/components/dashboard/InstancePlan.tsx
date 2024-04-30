"use client";
import { PlanDetails } from "@/data/instances/plan";
import { useGlobalStates } from "@/state";
import { classNames } from "@/utils/styling";
import { useMemo } from "react";
import { ShowWhen } from "../utils";
import { SelectTick } from "../SelectTick";

interface Props extends PlanDetails {
  plan: string;
}

export function InstancePlan(props: Props) {
  const { deployInstance, setDeployInstance } = useGlobalStates();
  const isSelected = useMemo(
    () => deployInstance.plan === props.plan,
    [deployInstance, props]
  );
  function onClick() {
    setDeployInstance((prev) => ({ ...prev, plan: props.plan }));
  }

  return (
    <tr
      onClick={onClick}
      className={classNames(
        "flex flex-row relative items-center p-2 border-b border-neutral-800 cursor-pointer bg-opacity-50 transition-colors gap-16 md:gap-0",
        isSelected ? "bg-neutral-500 border-0" : "border-neutral-800"
      )}
    >
      <td className="w-full whitespace-nowrap text-sm font-bold">
        {props.name}
      </td>
      <td className="w-full whitespace-nowrap text-sm">{props.cores}</td>
      <td className="w-full whitespace-nowrap text-sm">{props.memory}</td>
      <td className="w-full whitespace-nowrap text-sm">{props.bandwidth}</td>
      <td className="w-full whitespace-nowrap text-sm">
        <span className="font-bold">${props.price}/month</span> <br />$
        {props.hourlyRate}/hour
      </td>
      <ShowWhen show={<SelectTick />} when={isSelected} />
    </tr>
  );
}
