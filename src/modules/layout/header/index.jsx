"use client";
import React, { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="fixed top-0 left-0 w-full h-52 flex flex-col px-8 py-4 bg-tc_white_700 text-tc_white items-center justify-center z-20">
      <div className="w-full flex flex-col items-center gap-4">
        <p className="text-base font-semibold">ایونت ها</p>
        <input
          placeholder="جستجو"
          type="text"
          className="w-full bg-tc_blue_600 px-4 py-2 rounded-md"
        />
        <div className="w-full flex ">
          <p className="text-base font-semibold">لیست ایونت ها</p>
        </div>
        <div className="w-full flex gap-2 items-center divide-x divide-tc_gray divide-x-reverse">
          <div className="w-full flex justify-center pr-2">
            <button
              onClick={() => {
                setActiveTab(0);
              }}
              className={`w-full text-center py-2 px-4 rounded-lg ${
                activeTab === 0 ? "bg-tc_blue_600 " : ""
              }`}
            >
              همه
            </button>
          </div>
          <div className="w-full flex justify-center pr-2">
            <button
              onClick={() => {
                setActiveTab(1);
              }}
              className={`w-full text-center py-2 px-4 rounded-lg ${
                activeTab === 1 ? "bg-tc_blue_600 " : ""
              }`}
            >
              Premium
            </button>
          </div>
          <div className="w-full flex justify-center pr-2">
            <button
              onClick={() => {
                setActiveTab(2);
              }}
              className={`w-full text-center py-2 px-4 rounded-lg ${
                activeTab === 2 ? "bg-tc_blue_600 " : ""
              }`}
            >
              VIP
            </button>
          </div>
          <div className="w-full flex justify-center pr-2">
            <button
              onClick={() => {
                setActiveTab(3);
              }}
              className={`w-full text-center py-2 px-4 mx-2 rounded-lg ${
                activeTab === 3 ? "bg-tc_blue_600 " : ""
              }`}
            >
              Royal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
