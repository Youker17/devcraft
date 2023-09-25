"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars } from "@/assets/Icons";











export default function Header() {
    const [lastScrollY, setLastScrollY] = useState(0)
    const [direction, setDirection] = useState<"up" | "down">("down")



    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY) {
                setDirection("up")
            } else {
                setDirection("down")
            }
            setLastScrollY(window.scrollY)
        })

        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > lastScrollY) {
                    setDirection("up")
                } else {
                    setDirection("down")
                }
            })
        }
    }, [])



    return (
        <motion.div initial={{
            translateY: -100
        }} animate={{
            translateY: direction === "down" ? 0 : -200
        }}
        transition={{
            duration: 0.5,
            ease: "easeInOut"
        }}
        className=" flex fixed w-full z-[100]  ">
            <nav className="mx-[37px] my-[23px] h-[132px] relative w-full md:bg-primary/25 backdrop-blur-sm rounded-lg justify-center md:justify-between md:px-16 flex-col gap-y-10 md:gap-y-10 md:flex-row items-center flex xl:block ">
            <Link href={"#"}><div className="xl:hidden">
                        <h1 className="text-5xl  font-bold drop-shadow-lg "><span className=" text-tertinary ">Dev</span>Craft</h1>
                        <p className="text-sm leading-normal tracking-[7.75px]">Devcraft studio</p>
            </div></Link>
                <ul className=" gap-y-4 justify-around absolute top-48 xl:static  flex-col xl:flex-row items-center  text-2xl h-full flex">
                    <Link href={"#"}><li className="tracking-[4.41px]">About</li></Link>
                    <Link href={"#"}><li className="tracking-[4.41px]">Our Work</li></Link>
                    <Link href={"#"} className="hidden xl:block"><li className="">
                        <h1 className="text-5xl  font-bold drop-shadow-lg "><span className=" text-tertinary ">Dev</span>Craft</h1>
                        <p className="text-sm leading-normal tracking-[7.75px]">Devcraft studio</p>
                    </li></Link>
                    <Link href={"#"}><li className="tracking-[4.41px]">Pricing</li></Link>
                    <Link href={"#"}>
                        <button className=" bg-tertinary px-[32px] py-[10px] text-black   font-semibold leading-normal text-lg  rounded-[4px] ">Book a call</button>
                    </Link>
                </ul>
                <Bars style="xl:hidden cursor-pointer" />
            </nav>
          
        </motion.div>
    )
}