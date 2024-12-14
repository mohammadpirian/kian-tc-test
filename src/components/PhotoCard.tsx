import { Item } from "@/types/home";
import Image from "next/image";

export default function PhotoCard({ photo }: { photo: Item }) {
  return (
    <>
      <Image
        alt=""
        src={photo.img}
        height={600}
        width={600}
        className="col-span-1 aspect-square w-full object-cover"
      />

      <div className=" bg-white p-2 px-4">
        <h3 className="font-serif text-xl font-medium">{photo.title}</h3>
        <p className="text-sm text-gray-500">Taken by {photo.title}</p>
      </div>
    </>
  );
}
