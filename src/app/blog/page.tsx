"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import CardBlog from "@/modules/home/cardBlog";
import generateFakeData from "@/utils/generateFakeData";
import groupByDate from "@/utils/groupByDate";
import { Item } from "@/types/home";

const Blog = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [currentDate, setCurrentDate] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialItems = generateFakeData(20);
    setItems(initialItems);
  }, []);
  const groupedItems = groupByDate(items);

  const loadMoreItems = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newItems = generateFakeData(20);
      setItems((prev) => [...prev, ...newItems]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleScroll = useCallback(() => {
    if (!listRef.current) return;
    const scrollTop = listRef.current.scrollTop;
    setScrollPosition(scrollTop);

    if (
      listRef.current.scrollHeight - scrollTop - listRef.current.clientHeight <
        100 &&
      !isLoading
    ) {
      loadMoreItems();
    }
  }, [isLoading, loadMoreItems]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <>
      <div className="relative">
        <div
          className="overflow-y-auto h-screen listContainer"
          ref={listRef}
          onScroll={handleScroll}
        >
          {groupedItems.map((group) => (
            <div
              key={group.date}
              data-date={group.date}
              className="mb-2 w-full flex flex-col items-center"
            >
              <div className="sticky top-4 w-48 flex justify-center items-center bg-tc_white opacity-50 text-black z-10 py-2 shadow-md border-b rounded-3xl">
                <p className="">{group.date}</p>
              </div>
              {group.items.map((item) => (
                <CardBlog item={item} key={item.id} />
              ))}
            </div>
          ))}
          {isLoading && <div className="p-4 text-center">Loading...</div>}
        </div>
      </div>
    </>
  );
};

export default Blog;
