import Features from "@/components/landing/Features";
import HeroSection from "@/components/landing/HeroSection";
import Head from "next/head";



export default function Home() {
  return (
    <div className=" flex flex-col gap-10">
         <HeroSection />
         <Features />
    </div>
  )
}