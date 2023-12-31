import Contact from "@/components/landing/Contact";
import Features from "@/components/landing/Features";
import HeroSection from "@/components/landing/HeroSection";
import Plan from "@/components/landing/Plan";
import Testimonials from "@/components/landing/Testimonials";
import Work from "@/components/landing/Work";



export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <Features />
      <Work />
      <Plan />
      <Testimonials />
      <Contact />
    </div>
  )
}