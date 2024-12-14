import { Item } from "@/types/home";
import { faker } from "@faker-js/faker";

 
 const generateFakeData = (count: number): Item[] => {
  const uniqueDates = Array.from({ length: 3 }, () => {
    const randomDays = Math.floor(Math.random() * 60) - 30;
    const date = new Date();
    date.setDate(date.getDate() + randomDays);
    return date.toISOString().split("T")[0];
  });

  return Array.from({ length: count }, () => ({
    id: `${Date.now()}-${Math.random()}`,
    date: uniqueDates[Math.floor(Math.random() * uniqueDates.length)],
    title: faker.lorem.words(3),
    img: "images/1.jpg",
  }));
};

export default generateFakeData;