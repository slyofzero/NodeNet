import Link from "next/link";
import Image from "next/image";

import NotifecationIcon from "../assets/NotifecationIcon";
import { ConnectButton } from "../blockchain";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className=" top-0 z-40 flex w-full md:pt-10 pl-0  drop-shadow-1 md:p-0 py-5">
      <div className="flex flex-grow items-center justify-between px-10">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-transparent p-1.5 shadow-sm lg:hidden"
          >
            <svg
              stroke="currentColor"
              fill="#fff"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
            </svg>
          </button>
        </div>

        <div className="ml-auto">
          <ConnectButton />
        </div>
        {/* <div className="text-white w-full flex items-center justify-between ">
          <div>
            <h3 className="font-extrabold text-2xl lg:block hidden">
              Welcome Back, Arkhan
            </h3>
          </div>

          <div className="lg:flex items-center gap-2 hidden">
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                  <svg
                    className="w-4 h-4 text-white  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-[300px] py-3 pr-2 rounded-2xl ps-10 text-sm text-[#A0A0A0]  bg-[#1C1F2599] outline-none"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
            <div className="relative ">
              <NotifecationIcon />
              <span className="bg-red-600  rounded-full text-[8px] absolute right-0 px-1 flex items-center justify-center top-0">
                9
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 cursor-pointer bounse">
            <h4 className="font-semibold text-lg">Evano</h4>
            <Link href="" className="rounded-full overflow-hidden ">
              <Image
                src="/images/profile.png"
                alt="prfile"
                width={48}
                height={48}
              />
            </Link>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
