import Link from "next/link";
import React from "react";

const CardBlog = ({ item }) => {
  return (
    <Link className="w-full h-full" href={`blog/${item?.id}`}>
      <div
        key={item.id}
        className="p-4 w-full border-b border-tc_gray cursor-pointer flex flex-col gap-2"
      >
        <div className="w-full h-full p-2 border-2 rounded-lg">
          {/* <img src={item.img} className="w-full" /> */}
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
