import Work from "@/components/landing/Work";
import Features from "@/components/landing/Features";
import HeroSection from "@/components/landing/HeroSection";
import Head from "next/head";
import Contact from "@/components/landing/Contact";
import Testimonials from "@/components/landing/Testimonials";



export default function Home() {
  return (
    <div className="flex flex-col gap-10">
         <HeroSection />
         <Features />
         <Work />
         <Testimonials />
         <Contact />
    </div>
  )
}