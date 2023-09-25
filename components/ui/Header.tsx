"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";











export default function Header() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [direction, setDirection] = useState<'up' | 'down'>('down');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setDirection('up');
            } else {
                setDirection('down');
            }

            setLastScrollY(currentScrollY);
            console.log(direction, currentScrollY, lastScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, direction]);



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
            className=" flex fixed w-full z-[100] ">
            <nav className="mx-[37px] my-[23px] h-[132px] w-full bg-primary/25 backdrop-blur-sm rounded-lg">
                <ul className="flex justify-around flex-row items-center  text-2xl h-full">
                    <Link href={"#"}><li className="tracking-[4.41px]">About</li></Link>
                    <Link href={"#"}><li className="tracking-[4.41px]">Our Work</li></Link>
                    <Link href={"#"}><li className="">
                        <h1 className="text-5xl  font-bold drop-shadow-lg "><span className=" text-tertinary ">Dev</span>Craft</h1>
                        <p className="text-sm leading-normal tracking-[7.75px]">Devcraft studio</p>
                    </li></Link>
                    <Link href={"#"}><li className="tracking-[4.41px]">Pricing</li></Link>
                    <Link href={"#"}>
                        <button className=" bg-tertinary px-[32px] py-[10px] text-black   font-semibold leading-normal text-lg  rounded-[4px] ">Book a call</button>
                    </Link>
                </ul>
            </nav>
        </motion.div>
    )
}