"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";

// icons
import DashboardIcon from "../assets/dashboard-icon";
import PricingIcon from "../assets/pricing-icon";
import UsecaseIcon from "../assets/Usecase";
import GitBook from "../assets/git-book-icon";
import SettingIcon from "../assets/SettingIcon";
import ProfileIcon from "../assets/ProfileIcon";
import LogOutIcon from "../assets/logoutIcon";

const SIDEBAR_DATA = [
  {
    name: "Dashboard",
    icons: <DashboardIcon />,
    urlPath: "/",
  },
  {
    name: "Pricing",
    icons: <PricingIcon />,
    urlPath: "/pricing",
  },
  {
    name: "Usecase",
    icons: <UsecaseIcon />,
    urlPath: "/usecase",
  },
  {
    name: "Gitbook",
    icons: <GitBook />,
    urlPath: "https://nimbus-docs.gitbook.io/nimbus",
    target: "_blank",
  },
  // {
  //   name: "Settings",
  //   icons: <SettingIcon />,
  //   urlPath: "/join-us",
  // },
  // {
  //   name: "Profile",
  //   icons: <ProfileIcon />,
  //   urlPath: "#",
  // },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-[320px] flex-col overflow-y-hidden lg:bg-transparent bg-black duration-300 ease-linear k lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2  py-5.5 lg:py-6.5">
        <div className="md:p-8 px-4 py-8">
          <div className="relative w-[205px] h-[76px] bounse">
            <Image
              src="/images/logo.png"
              alt="logo"
              placeholder="blur"
              blurDataURL="/images/logo.png"
              height={200}
              width={200}
              className="w-36"
            />
          </div>
        </div>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden mr-5 absolute right-0 top-14"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div
        className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear"
        id="scroll_none"
      >
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 lg:mb-9 mx-5">
          <ul className="flex flex-col gap-7 ">
            {SIDEBAR_DATA.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.urlPath}
                  className={`flex items-center px-5 rounded-2xl py-3.5 gap-5 text-[22px] text-white  ${
                    pathname === item.urlPath ? " btn_bg " : ""
                  }`}
                  target={item.target ? item.target : "_self"}
                >
                  <span
                    className={` ${
                      pathname === item.urlPath
                        ? " text-white"
                        : "text-[#888490]"
                    }`}
                  >
                    {item.icons}
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-white mt-8 flex justify-center gap-8">
            <Link href={"#"}>
              <FaXTwitter />
            </Link>

            <Link href={"#"}>
              <FaTelegram />
            </Link>
          </div>

          <Link
            href=""
            className={`flex items-center px-5 rounded-2xl py-3.5 gap-5 text-[22px]  text-white mt-80 `}
          >
            <LogOutIcon />
            <span>Logout</span>
          </Link>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
