import Typewriter from "@/components/typewriter";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="bg-[#030d27] rounded-2xl md:h-[561px] h-[400px] mb-10 flex flex-col justify-center items-center mt-10">
        <p className="text-lg">Get started by deploying your first instance</p>
        <h1 className="md:text-[56px] text-[40px] font-extrabold gradient-text text-center lg:px-20 px-0">
          <Typewriter text="Rent Servers Using Crypto with NodeNet" />
        </h1>
        <div className="flex items-center gap-5 md:mt-10 mt-5">
          <button className="bg-white w-[162px] text-black font-semibold px-8 py-3 rounded-2xl mt-5">
            Join us
          </button>
          <button className="btn_bg w-[162px] px-8 font-semibold py-3 rounded-2xl mt-5">
            Buy NodeNet
          </button>
        </div>
      </div>
    </div>
  );
}
