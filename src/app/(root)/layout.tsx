import NavBar from "@/components/layouts/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <NavBar /> */}
      <main className="container mx-auto px-2">{children}</main>
    </>
  );
}
