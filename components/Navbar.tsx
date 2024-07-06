"use client"

import Link from "next/link";
import HamburgerIcon from "./ui/HamburgerIcon";
import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineDesignServices, MdOutlineMailOutline, MdOutlineWork, MdOutlineWorkOutline } from "react-icons/md";

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <nav className="p-3 flex bg-[#ffffffa0] justify-between items-center z-80">
      <Link
        href={"#"}
        id="brand"
        className="flex gap-2 items-center text-black"
      >
        XXX Agency
      </Link>
      <div id="nav-menu" className="hidden md:flex gap-x-12">
        <Link href={"/"} className="text-black font-medium hover:text-blue">
          Home
        </Link>
        <Link href={"/services"} className="text-black font-medium hover:text-blue">
          Services
        </Link>
        <Link href={"/aboutus"} className="text-black font-medium hover:text-blue">
          About-Us
        </Link>
        <Link href={"/contact"} className="text-black font-medium hover:text-blue">
          Contact-Us
        </Link>
        {/* <Store /> */}
      </div>
      <button className="p-2 text-black hidden md:block border border-gray-600 border-r-2 border-b-2 rounded-lg hover:border-gray-800">
        Start Project
      </button>
      <button
        className="px-2 md:hidden h-full z-50"
        onClick={() => setopen(!open)}
      >
        <HamburgerIcon open={open} />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ x: 400, opacity: 0 }}
            transition={{ ease: "linear" }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            id="default-sidebar"
            className="fixed top-0 right-0 z-40 w-full h-screen md:hidden"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#080808ef]">
              <ul className="space-y-2 mt-16 flex flex-col items-center gap-y-3 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <BiHome className="w-6 h-6" />
                    <span className="ms-3">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <MdOutlineDesignServices className="w-6 h-6" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Services
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <MdOutlineMailOutline className="w-6 h-6" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Contact us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <MdOutlineWorkOutline className="w-6 h-6" />
                    <span className="flex-1 ms-3 whitespace-nowrap">About us</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
