import { useRouter } from "next/navigation";
import React from "react";

const CardBlog = ({ item }) => {
  const router = useRouter();
  return (
    <div
      key={item.id}
      className="p-4 w-full border-b border-tc_gray cursor-pointer flex flex-col gap-2"
      onClick={() => {
        // Navigate to item details
        router.push(`/${item?.id}`);
        console.log("Navigated to:", item);
      }}
    >
      <div className="w-full h-full p-2 border-2 rounded-lg">
        {/* <img src={item.img} className="w-full" /> */}
      </div>
      <div className="flex justify-between">
        <p>{item.title}</p>
        <p>{item.date}</p>
      </div>
    </div>
  );
};

export default CardBlog;
