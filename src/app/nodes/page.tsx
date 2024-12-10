import Image from "next/image";
import Medal from "@/components/assets/Medal";
import Timeline from "@/components/assets/Timeline";

export default function Nodes() {
  const rentOnDemand = [
    {
      title: "Rent GPUs",
      text: "Rent GPUs from others for powering applications requiring massive computing power for running your AI & server use projects.",
    },
    {
      title: "GPU Mobile Apps",
      text: "App allows users to Rent, Host, Buy & Sell GPU equipment. The App will soon be available to download on both iOS & Google Play stores.",
    },
    {
      title: "GPU Marketplace",
      text: "Launching our unique sister Website & Mobile App GPU rental marketplace. Users will be able to list GPUs for rent for making passive income.",
    },
  ];

  const steps = [
    {
      title: "STEP 01",
      subtitle: "BUY $NNET TOKEN",
      text: "Visit Uniswap and swap ETH to $NODE token.",
    },
    {
      title: "STEP 02",
      subtitle: "Go to our Dapp",
      text: "Visit the Node Net DAPP and view the staking pool.",
    },
    {
      title: "STEP 03",
      subtitle: "Stake and Earn",
      text: "Stake your $NNET tokens to earn guaranteed rewards.",
    },
  ];

  return (
    <main className="flex flex-col gap-8 text-[#8E8EC4] mb-12">
      <div className="bg-[#030d27] flex flex-col gap-8 p-10 px-4 md:p-20 rounded-md text-center">
        <button className="bg-[#4C6DC7] text-white p-2 px-4 md:px-8 w-fit rounded-md mx-auto">
          GPU Marketplace
        </button>

        <h1 className="gradient-text text-5xl font-extrabold">
          70% Cheaper GPUs
        </h1>

        <p>
          Our sister website and mobile app marketplace offers access to
          high-quality hardware and software at a fraction of the cost compared
          to renting from other providers.
        </p>

        <p>
          <strong>Nvidia</strong> and <strong>AMD dedicated GPU</strong> servers
          deliver powerful, high-speed computing, making them the perfect
          solution for applications requiring intensive computational power.
          They are ideal for running deep learning models, artificial
          intelligence tasks, and big data analysis. These GPU servers are
          typically deployed in data centers or cloud environments and can be
          accessed remotely through <strong>NodeNetAI</strong> for seamless
          performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#030d27] flex flex-col gap-4 p-4 rounded-md">
          <Image
            src={"/images/nodes-1.png"}
            alt="nodes"
            height={200}
            width={200}
            className="w-full h-72"
          />

          <h6 className="text-[#4C7CFF]">Renting GPUs</h6>
          <h6 className="text-white text-xl font-semibold">
            For Businesses and Individuals in Need of Remote GPU Rental
          </h6>

          <p className="text-[#5F5F99]">
            Explore our marketplace to find the GPUs you need for applications
            requiring massive computing power.
          </p>

          <p>Providing high-quality hardware and software.</p>

          <ul className="flex flex-col gap-2">
            <li>
              •⁠ Affordable Rates: Save on costs without compromising
              performance.
            </li>
            <li>
              •⁠ High-Quality Hardware and Software: Reliable, cutting-edge
              solutions.
            </li>
            <li>•⁠ Easy Rental Process: Simple and seamless setup.</li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md w-fit font-bold">
              Visit Marketplace
            </button>
            <button className="text-white px-4 py-2 rounded-md w-fit font-bold border-[#ffffff30] border-solid border-[1px]">
              Contact Us
            </button>
          </div>
        </div>

        <div className="bg-[#030d27] flex flex-col gap-4 p-4 rounded-md">
          <Image
            src={"/images/nodes-2.png"}
            alt="nodes"
            height={200}
            width={200}
            className="w-full h-72"
          />

          <h6 className="text-[#4C7CFF]">We got you covered</h6>
          <h6 className="text-white text-xl font-semibold">
            Renting GPUs made easy
          </h6>

          <br />
          <p></p>

          <p className="text-[#5F5F99]">
            Rent the hardware you need from others at a fraction of the cost.
          </p>

          <br />

          <p>Providing high-quality hardware and software.</p>

          <ul className="flex flex-col gap-2">
            <li>•⁠ Affordable rates</li>
            <li>•⁠ High-quality hardware and software </li>
            <li>•⁠ Easy rental process</li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md w-fit font-bold">
              Visit Marketplace
            </button>
            <button className="text-white px-4 py-2 rounded-md w-fit font-bold border-[#ffffff30] border-solid border-[1px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h6 className="text-xl font-extrabold gradient-text">Rent on Demand</h6>
        <p>
          Don&apos;t let your resources sit idle when they could be earning for
          you. Earn steady income by hosting your server.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {rentOnDemand.map((data, key) => (
            <div
              className="special-bg p-4 rounded-md flex flex-col gap-4 text-white"
              key={key}
            >
              <div className="bg-white p-2 w-fit rounded-md">
                <Medal />
              </div>
              <h6 className="font-semibold">{data.title}</h6>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h6 className="text-xl font-extrabold gradient-text">How to Buy</h6>
        <p>Visit Uniswap and swap ETH to $NNET token.</p>
        <button className="bg-primary text-white px-4 py-2 rounded-md w-fit font-bold">
          Buy $NNET Token
        </button>

        <Timeline />

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {steps.map((data, key) => (
            <div
              className="special-bg-2 px-12 py-8 rounded-md flex flex-col gap-4 text-white"
              key={key}
            >
              <span className="text-[#30C3F8]">{data.title}</span>
              <h6 className="text-2xl font-semibold">{data.subtitle}</h6>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#030D27] p-4 py-8 md:p-16 flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl gradient-text font-extrabold">
            Rent GPUs Now
          </h3>
          <p>
            Deploy your AI applications on our GPU decentralized cloud. Perfect
            for people and businesses looking to grow powerful AI deep learning
            projects.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md w-fit font-bold">
            View Nodes
          </button>
        </div>
        <Image
          src={"/images/chip.png"}
          alt="chip"
          className="w-64"
          height={200}
          width={200}
        />
      </div>
    </main>
  );
}
