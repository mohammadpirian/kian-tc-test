"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { faker } from "@faker-js/faker";
import Head from "next/head";

interface Item {
  id: string; // Changed to string for unique id generation
  date: string;
  title: string;
}

interface GroupedItems {
  date: string;
  items: Item[];
}

const generateFakeData = (count: number): Item[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(), // Use faker.string.uuid for unique id
    date: faker.date.recent(10).toISOString().split("T")[0],
    title: faker.lorem.words(3),
  }));
};

const groupByDate = (items: Item[]): GroupedItems[] => {
  const grouped = items.reduce((acc, item) => {
    acc[item.date] = acc[item.date] || [];
    acc[item.date].push(item);
    return acc;
  }, {} as Record<string, Item[]>);

  return Object.entries(grouped).map(([date, items]) => ({ date, items }));
};

const HomePage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>("");
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

    const dateDivs =
      listRef.current.querySelectorAll<HTMLDivElement>("[data-date]");
    for (const dateDiv of Array.from(dateDivs)) {
      const rect = dateDiv.getBoundingClientRect();
      if (rect.top <= 60 && rect.bottom > 60) {
        setCurrentDate(dateDiv.dataset.date || "");
        break;
      }
    }

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
  console.log("groupedItems", groupedItems);
  return (
    <>
      <div className="relative">
        <div
          className="pt-44 overflow-y-auto h-screen listContainer"
          ref={listRef}
          onScroll={handleScroll}
        >
          {groupedItems.map((group) => (
            <div
              key={group.date}
              data-date={group.date}
              className="mb-2 w-full flex flex-col items-center"
            >
              <div className="sticky top-12 w-48 flex justify-center items-center bg-tc_white opacity-50 text-black z-10 py-2 shadow-md border-b rounded-3xl">
                <p className="">{group.date}</p>
              </div>
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 w-full border-b cursor-pointer"
                  onClick={() => {
                    // Navigate to item details
                    console.log("Navigated to:", item);
                  }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          ))}

          {isLoading && <div className="p-4 text-center">Loading...</div>}
        </div>
      </div>
    </>
  );
};

export default HomePage;
