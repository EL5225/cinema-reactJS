import {
  Button,
  ElipsisIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@/components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckTheme } from "@/services/CheckTheme";

export const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const element = document.documentElement;

  const toggleTheme = () => {
    setTheme("dark");
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const darkTheme = () => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else if (theme === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", theme);
    }
    CheckTheme(element);
  };

  useEffect(() => {
    darkTheme();
  }, [darkTheme]);

  return (
    <header className=" flex items-center h-[12vh] lg:h-[8vh] px-3 md:px-4 font-semibold justify-between dark:bg-zinc-800 dark:text-slate-100 duration-300">
      <motion.nav
        style={{ x: -200 }}
        animate={{ x: [-200, 0] }}
        className="flex items-center w-[8rem] justify-between"
      >
        <Button>
          <HamburgerIcon />
        </Button>
        <figure>
          <figcaption className="text-lg">EdoCinema</figcaption>
        </figure>
      </motion.nav>

      <motion.nav
        style={{ x: 200 }}
        animate={{ x: [200, 0] }}
        className="flex items-center w-[7rem] justify-between"
      >
        <Button onClick={toggleTheme}>
          {theme === "light" || theme === null ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Button>
          <ElipsisIcon />
        </Button>
      </motion.nav>
    </header>
  );
};
