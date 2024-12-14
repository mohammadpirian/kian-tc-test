export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="w-full h-full py-12 ">
      <div className="w-full h-full flex flex-col items-center gap-4">
        <div className="w-[720px] h-[480px] border-2 p-2 rounded-xl">
          {/* <img src="/images/1.jpg" className="w-full h-full rounded-lg" /> */}
        </div>
        <p className="text-lg font-bold">{id}</p>
      </div>
    </div>
  );
}
