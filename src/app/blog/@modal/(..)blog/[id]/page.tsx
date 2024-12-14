// import Modal from "@/components/Modal";
import Image from "next/image";

export default function BlogModal() {
  console.log("BlogModal");
  // console.log("id", id);
  console.log(
    "image",
    "https://www.kiantc.com/images/content/Group-620913378.webp"
  );

  return (
    <>
      <Image
        alt="teeeeeeeeeeeest"
        src={"https://www.kiantc.com/images/content/Group-620913378.webp"}
        height={600}
        width={600}
        className="col-span-1 aspect-square w-full object-cover"
      />

      <div className=" bg-white p-2 px-4">
        {/* <h3 className="font-serif text-xl font-medium">{id}</h3> */}
        <p className="text-sm text-gray-500">Taken by Mohammad</p>
      </div>
    </>
  );
}
