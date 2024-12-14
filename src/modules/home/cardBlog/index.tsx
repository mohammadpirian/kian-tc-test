import Link from "next/link";
import React from "react";
import { Item } from "@/types/home";

const CardBlog = ({ item }: { item: Item }) => {
  return (
    <Link className="w-full max-w-[720px] h-full" href={`/blog/${item?.id}`}>
      <div
        key={item.id}
        className="p-4 w-full border-b border-tc_gray cursor-pointer flex flex-col gap-2"
      >
        <div className="w-full h-full p-2 border-2 rounded-xl">
          {/* <img src={item.img} className="w-full rounded-lg" /> */}
        </div>
        <div className="flex justify-between">
          <p>{item.title}</p>
          <p>{item.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
