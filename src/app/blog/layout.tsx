import Header from "@/modules/layout/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="w-full h-full pt-52">{children}</div>
    </>
  );
}
