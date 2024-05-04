"use client";

import React, { useState } from "react";
import Popup from "@/components/Popup";
import Typewriter from "@/components/typewriter";
import { useRouter } from "next/navigation";
import { useGlobalStates } from "@/state";

const Data = [
  {
    maintitle: "Cloud Compute",
    title: "Competitor - $50 / Month",
    titlebg: "grid_bg",
    titleclass: "text-black",
    discription1: `Virtual machines for more demanding business apps,`,
    discription2: "portfolio websites, and ecommerce platforms.",
    discription3:
      "E.g. production websites, CI/CD, video transcoding, or larger databases.",
    list1: "Cores - 2 vCPUs (virtual CPUs)",
    list2: "RAM - 4GB",
    list3: "Bandwidth - 5GB",
    btntext: "Rent Now",
    title2: "Premium - $75 / Month",
    titlebg2: "grid_bg_2",
    titleclass2: "text-white",
    boxDiscription1: `Virtual machines for more demanding business apps,`,
    boxDiscription2: "portfolio websites, and ecommerce platforms.",
    boxDiscription3:
      "E.g. production websites, CI/CD, video transcoding, or larger databases.",
    boxlist1: "Cores - 2 vCPUs (virtual CPUs)",
    boxlist2: "RAM - 4GB",
    boxlist3: "Bandwidth - 5GB",
    boxbtntext: "Rent Now",
  },
  {
    maintitle: "Dedicated Hosting",
    title: "Dedicated Server Hosting (Basic) – $200 / Month",
    titlebg: "grid_bg",
    titleclass: "text-black",
    discription1: `Single tenant bare metal for apps with the most demanding performance or security requirements.`,
    discription2:
      "Network Uptime, MySQL, etc. The Basic plan vows to keep you connected",
    discription3:
      "Through thick and thin with the included DDOS protection. Start out small to test the waters and upgrade at any time!",
    list1: "Cores - 4 vCPUs (virtual CPUs)",
    list2: "RAM - 16GB",
    list3: "Bandwidth - 5GB",
    btntext: "Rent Now",
    title2: "Dedicated Server Hosting (Premium) – $380 / Month",
    titlebg2: "grid_bg_2",
    titleclass2: "text-white",
    boxDiscription1: `Single tenant bare metal for apps with the most demanding performance or security requirements.`,
    boxDiscription2:
      "Network Uptime, MySQL, etc. The Basic plan vows to keep you connected",
    boxDiscription3:
      "Through thick and thin with the included DDOS protection. Start out small to test the waters and upgrade at any time!",
    boxlist1: "Cores - 8 vCPUs (virtual CPUs)",
    boxlist2: "RAM - 32GB",
    boxlist3: "Bandwidth - 5GB",
    boxbtntext: "Rent Now",
  },
  {
    maintitle: "Hobby",
    title: "Small DataPack - $30 / Month",
    titlebg: "grid_bg",
    titleclass: "text-black",
    discription1: `Perfect for learning to deploy and other hobby activities, `,
    discription2:
      "and more run seamlessly on a 1GB fiber connection. Speed is the name of the",
    discription3:
      "game for this package and is our best bang for buck to get you up and running.",
    list1: "Cores - 2 vCPUs (virtual CPUs)",
    list2: "RAM - 2GB",
    list3: "Bandwidth - 5GB",
    btntext: "Rent Now",
    title2: "Big DataPack - $55 / Month",
    titlebg2: "grid_bg_2",
    titleclass2: "text-white",
    boxDiscription1: `Perfect for learning to deploy and other hobby activities,`,
    boxDiscription2:
      "and more run seamlessly on a 1GB fiber connection. Speed is the name of the",
    boxDiscription3:
      "game for this package and is our best bang for buck to get you up and running.",
    boxlist1: "Cores - 2 vCPUs (virtual CPUs)",
    boxlist2: "RAM - 8GB",
    boxlist3: "Bandwidth - 5GB",
    boxbtntext: "Rent Now",
  },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setShowInstances } = useGlobalStates();

  const handlePopup = () => {
    router.push("/");
    setShowInstances(false);
  };

  return (
    <div className="my-10 md:mx-24 mx-0">
      <h1 className=" font-extrabold gradient-text text-center">
        <Typewriter text="Easy & Flexible Prices" />
      </h1>
      <p className="text-lg mt-3 text-center">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      {Data.map((item, index) => (
        <div className="" key={index}>
          <div className="bg_grident px-5 py-3 text-2xl md:mt-8 mt-4 md:w-[934px] w-full">
            {item.maintitle}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-6">
            <div className="bg-[#1C1C1C] bg-opacity-[0.5] md:px-8 px-7 md:py-14 py-10 rounded-2xl text-[#A1A1AA]">
              <div className={`${item.titlebg} py-4 px-4 rounded-2xl`}>
                <h4
                  className={`font-extrabold md:text-xl text-base  text-center ${item.titleclass}`}
                >
                  {item.title}
                </h4>
              </div>
              <div className="mt-5">
                <p className="mt-4 md:text-lg text-sm text-center ">
                  {item.discription1}
                </p>
                <p className="mt-4 md:text-lg text-sm text-center ">
                  {item.discription2}
                </p>
                <p className="mt-4 md:text-lg text-sm text-center ">
                  {item.discription3}
                </p>
              </div>
              <ul className="text-center md:mt-8 mt-4  ">
                <li className="md:text-base text-sm">. {item.list1}</li>
                <li className="md:text-base text-sm">. {item.list2}</li>
                <li className="md:text-base text-sm">. {item.list3}</li>
              </ul>
              <div className="md:mt-8 mt-4 mx-auto text-center ">
                <button
                  className="btn_bg px-8 py-3 rounded-2xl w-[233px] text-white"
                  onClick={handlePopup}
                >
                  {item.btntext}
                </button>
              </div>
            </div>
            <div className="bg-[#1C1C1C] bg-opacity-[0.5] md:px-8 px-7 md:py-14 py-10 rounded-2xl text-[#A1A1AA] relative overflow-x-hidden">
              <div className={`${item.titlebg2} py-4 px-4  rounded-2xl`}>
                <h4
                  className={`font-extrabold md:text-xl text-base  text-center ${item.titleclass2}`}
                >
                  {item.title2}
                </h4>
              </div>
              <div className="mt-5">
                <p className="mt-4 md:text-lg text-sm text-center ">
                  {item.boxDiscription1}
                </p>
                <p className="mt-4 md:text-lg text-sm text-center ">
                  {item.boxDiscription2}
                </p>
                <p className="mt-4 md:text-lg text-sm text-center ">
                  {item.boxDiscription3}
                </p>
              </div>
              <ul className="text-center md:mt-8 mt-4">
                <li className="md:text-base text-sm">. {item.boxlist1}</li>
                <li className="md:text-base text-sm">. {item.boxlist2}</li>
                <li className="md:text-base text-sm">. {item.boxlist3}</li>
              </ul>
              <div className="md:mt-8 mt-4 mx-auto text-center relative">
                <button
                  className="btn_bg px-8 py-3 rounded-2xl w-[233px] text-white"
                  onClick={handlePopup}
                >
                  {item.boxbtntext}
                </button>
                {/* popup  */}
              </div>
              {open && (
                <div
                  className={`${
                    open &&
                    "overflow-scroll px-5 popup-container fixed w-full h-[100vh] bg-black top-0 left-0 bg-opacity-[0.4] z-[99999] flex justify-center items-center "
                  } `}
                >
                  <Popup setOpen={setOpen} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
