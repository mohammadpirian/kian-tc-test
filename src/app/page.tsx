"use client";

import React from "react";

import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Link href={"/blog"}>برو به بلاگ ها</Link>
      </div>
    </>
  );
};

export default HomePage;
