
export interface Item {
  id: string;
  date: string;
  title: string;
  img: string;
}
export interface GroupedItems {
  date: string;
  items: Item[];
}