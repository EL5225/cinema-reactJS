import { Navbar } from "@/components";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-screen grid place-items-center">
        {children}
      </main>
    </>
  );
};
