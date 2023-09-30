"use client";
import call from "@/assets/call.gif";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && window.innerWidth > 1023) {
        console.log(window.innerWidth < 1023);
        setDirection("up");
      } else {
        setDirection("down");
      }

      setLastScrollY(currentScrollY);
      console.log(direction, currentScrollY, lastScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, direction]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        setOpen(false);
      } else {
        setOpen(false);
      }
    });
  }, []);

  return (
    <>
      <motion.div

        className=" hidden md:flex absolute w-full z-[100]  "
      >
        {/* */}
        <motion.nav
          initial={{}}
          animate={
            open ? { height: "80vh", backgroundColor: "#0f172a", margin: 0 } : undefined
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          exit={{ height: "132px", backgroundColor: "#fff" }}
          className=" md:mx-[37px] md:my-[23px] h-[132px] relative w-full bg-primary/25  backdrop-blur-sm rounded-lg lg:flex lg:flex-row overflow-hidden  md:justify-between px-8 md:px-16 flex-col gap-y-10 md:gap-y-10  xl:block "
        >
          <div className="flex-row flex w-full  lg:w-auto justify-between items-center mt-8 lg:mt-0 ">
            <Link href={"#"} className=" xl:hidden">
              <div className="">
                <h1 className="text-5xl  font-bold drop-shadow-lg ">
                  <span className=" text-tertinary ">Dev</span>Craft
                </h1>
                <p className="text-sm leading-normal tracking-[7.75px]">
                  Devcraft studio
                </p>
              </div>
            </Link>
            <div className="lg:hidden ">
              <Hamburger toggled={open} toggle={setOpen} />
            </div>
          </div>

          <motion.ul
            initial={{}}
            animate={open ? { opacity: 1 } : undefined}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{}}
            className={twMerge(
              "justify-around absolute lg:static mt-20  w-full lg:w-auto  lg:flex-row lg:items-center  text-2xl lg:h-full flex-col flex gap-20    lg:gap-6  lg:mt-0"
            )}
          >
            <Link href={"/#about"}>
              <motion.li className="xl:tracking-[4.41px]  duration-300 py-4 w-[85%] lg:w-full px-4 rounded-lg  ">
                About
              </motion.li>
            </Link>
            <Link href={"/#work"}>
              <li className="xl:tracking-[4.41px]">Our Work</li>
            </Link>
            <Link href={"/#hero"} className="hidden xl:block">
              <li className="">
                <h1 className="text-5xl  font-bold drop-shadow-lg ">
                  <span className=" text-tertinary ">Dev</span>Craft
                </h1>
                <p className="text-sm leading-normal tracking-[7.75px]">
                  Devcraft studio
                </p>
              </li>
            </Link>
            <Link href={"/#plans"}>
              <li className="xl:tracking-[4.41px]">Pricing</li>
            </Link>
            <Link href={"/booking"}>
              <button className=" flex flex-row group overflow-hidden hover:shadow-2xl hover:shadow-tertinary transform ease-in-out hover:scale-105 bg-tertinary px-[32px] py-[10px] text-black font-semibold leading-normal text-lg  rounded-[4px] ">
                <p className="group-hover:-translate-x-3 translate-x-2 transition-all ">
                  Book a call
                </p>
                <img src={call.src} className="w-5 aspect-square transition-all translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100" alt="" />
              </button>
            </Link>
          </motion.ul>
        </motion.nav>
      </motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className={twMerge(
          "w-full fixed top-0 opacity-0 left-0 h-screen bg-black/20 backdrop-blur-md "
        )}
        style={!open ? { zIndex: "-1000" } : { zIndex: "60" }}
      ></motion.div>
    </>
  );
}
