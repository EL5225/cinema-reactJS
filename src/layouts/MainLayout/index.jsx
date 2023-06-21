import { Navbar } from "@/components";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-screen grid place-items-center dark:bg-zinc-800 duration-300">
        {children}
      </main>
    </>
  );
};
