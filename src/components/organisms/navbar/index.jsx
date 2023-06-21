import { Button, ElipsisIcon, HamburgerIcon, MoonIcon } from "@/components";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <header className=" workspace flex items-center h-[12vh] lg:h-[7vh] px-3 md:px-4 font-semibold justify-between">
      <motion.nav
        style={{ x: -200 }}
        animate={{ x: [-200, 0] }}
        className="flex items-center w-[8rem] justify-between"
      >
        <Button>
          <HamburgerIcon fillColor="fill-black" />
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
        <Button>
          <MoonIcon fillColor="fill-black" />
        </Button>
        <Button>
          <ElipsisIcon fillColor="fill-black" />
        </Button>
      </motion.nav>
    </header>
  );
};
