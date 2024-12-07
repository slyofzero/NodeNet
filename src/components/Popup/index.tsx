"use client";
import React from "react";

export default function Index({ setOpen }: any) {
  const [opendrop, setOpenDrop] = React.useState(false);

  const handlePopup = () => {
    setOpenDrop(!opendrop);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-black md:py-10 py-5 md:px-20 px-5 rounded-lg w-[542px]  border-2 border-[#FF9AEF] relative">
      <div
        className="absolute top-8 right-8 cursor-pointer "
        onClick={handleClose}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6198 0.380226C12.1128 -0.126742 11.2908 -0.126742 10.7838 0.380226L6.49999 4.66408L2.21616 0.380239C1.70918 -0.126729 0.887219 -0.12675 0.380228 0.380239C-0.126734 0.887207 -0.126751 1.70918 0.380228 2.21617L4.66406 6.50002L0.380242 10.7838C-0.126734 11.2908 -0.126719 12.1128 0.38024 12.6198C0.887232 13.1268 1.70919 13.1267 2.21617 12.6198L6.49999 8.33595L10.7838 12.6198C11.2908 13.1268 12.1128 13.1267 12.6198 12.6198C13.1267 12.1128 13.1267 11.2908 12.6198 10.7838L8.33592 6.50002L12.6198 2.21616C13.1267 1.70919 13.1268 0.887215 12.6198 0.380226Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="popup_bg px-5 py-3 md:text-2xl text-xl mt-8 text-white font-semibold ">
        Rent with NodeNet
      </div>
      <p className="text-white md:text-lg text-sm mt-4">
        After submitting a rental request, you will be contacted by a
        representative to confirm & process your order.
      </p>
      <div className="mt-6">
        <label htmlFor="" className="md:text-[20px] text-base text-white">
          Server Location
        </label>
        <div
          className={`flex items-center justify-between px-5 py-4 mt-2 bg-white bg-opacity-[0.1] rounded-lg cursor-pointer ${
            opendrop ? "open" : ""
          }`}
          onClick={handlePopup}
        >
          <p> United States</p>
          <svg
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.20207 0L5.06736 4.22798L0.870466 0.093264L0 0.994818L5.09845 6L10.1036 0.870466L9.20207 0Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <div className={`popup ${opendrop ? "open" : ""}`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="" className="md:text-[20px] text-base text-white">
          Server Location
        </label>
        <input
          type="text"
          placeholder="@TelegramUsername"
          className="px-10 py-4 rounded-lg bg-white bg-opacity-[0.1] mt-2 w-full"
        />
      </div>
      <div className="mt-6 text-center">
        <button
          className="btn_bg px-8 py-3 rounded-2xl w-[233px] text-white  "
          onClick={handlePopup}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
