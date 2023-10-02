"use client";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function MobileHeader() {
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
        initial={{
          translateY: -100,
        }}
        animate={{
          translateY: direction === "down" ? 0 : -200,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex md:hidden absolute w-full z-[100]"
      >
        {/* */}
        <motion.nav
          initial={{}}
          animate={
            open ? { height: "100vh", backgroundColor: "#0f172a", margin: 0 , top:0,left:0,position:"fixed" } : undefined
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          exit={{ height: "250px", backgroundColor: "#fff" }}
          className="  relative w-full   b rounded-lg h-46   overflow-hidden   px-8  flex-col gap-y-10  "
        >
          <div className="flex-col flex w-full  items-center mt-4 xs:mt-8  gap-6 ">
            <Link href={"#"} className=" xl:hidden">
              <div className="">
                <h1 className="text-4xl xs:text-5xl  font-bold drop-shadow-lg ">
                  <span className=" text-tertinary ">Dev</span>Craft
                </h1>
                <p className="text-sm leading-normal tracking-[4.2px] xs:tracking-[7.75px]">
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
              "justify-around absolute  mt-20  w-full   text-2xl lg:h-full flex-col flex gap-20 "
            )}
          >
            <Link href={"#"}>
              <motion.li className="xl:tracking-[4.41px] ">
                About
              </motion.li>
            </Link>
            <Link href={"#"}>
              <li className="xl:tracking-[4.41px]">Our Work</li>
            </Link>
            <Link href={"#"}>
              <li className="xl:tracking-[4.41px]">Pricing</li>
            </Link>
            <Link href={"#"}>
              <button className=" bg-tertinary px-[32px] py-[10px] text-black font-semibold leading-normal text-lg  rounded-[4px] ">
                Book a call
              </button>
            </Link>
          </motion.ul>
        </motion.nav>
      </motion.div>
      {/* <motion.div
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className={twMerge(
          "w-full fixed top-0 opacity-0 left-0 h-screen bg-black/20 backdrop-blur-md "
        )}
        style={!open ? { zIndex: "-1000" } : { zIndex: "60" }}
      ></motion.div> */}
    </>
  );
}