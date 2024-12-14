import { GroupedItems, Item } from "@/types/home";

const groupByDate = (items: Item[]): GroupedItems[] => {
  const grouped = items.reduce((acc, item) => {
    acc[item.date] = acc[item.date] || [];
    acc[item.date].push(item);
    return acc;
  }, {} as Record<string, Item[]>);
  return Object.entries(grouped).map(([date, items]) => ({ date, items }));
};

export default groupByDate;
