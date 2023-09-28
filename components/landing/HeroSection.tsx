
import { Company } from "@/assets/Icons"
import img__effect from "@/assets/dedring1.png"
import hero__img from "@/assets/gradient.png"
import { Variants, motion } from "framer-motion"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Stars from '../ui/Stars'


function HeroSection() {

  const BtnAnimation: Variants = {
    initial: {
      // Define initial properties if any
    },
    animate: {
      // Define animation properties if any
    },
    exit: {
      transition: {
        duration: 10 // Adjust the duration here (in seconds)
      }
    },
    hover: {
      width: "275px",
      scale: 1.1,
      justifyContent: "space-around",
      transition: {
        duration: 0.5 // Adjust the duration here (in seconds)
      }
    },

  }
  const ArrowAnimation: Variants = {
    initial: {
      position: "absolute",
      translateY: "-20px"
    },
    hover: {
      position: "static",
      translateY: "0px",
      transition: {
        duration: 0.5 // Adjust the duration here (in seconds)
      }
    },
    animate: {

    }
  }



  return (
    <div className='w-full h-screen  top-0 left-0   flex flex-col items-center text-center  '>
      <Image src={hero__img} className='w-full h-full absolute z-10' alt='hero__img' draggable={false} />
      <Image src={img__effect} className='w-full h-[800px] animate-pulse opacity-50 absolute z-20' alt='hero__img' draggable={false} />
      <div className='flex flex-col z-30 items-center text-center relative mt-[140px] '>
        <Stars containerStyle='absolute top-0 left-0  drop-shadow-[0px_4px_77px_#EEBBC3]' bigStarStyle='absolute top-8 left-0 w-[47.016px] h-[59.838px]' topLeftStarStyle='absolute top-8 left-0 w-[16.669px] h-[21.371px]' bottomLeftStarStyle='absolute top-[4.5rem]  w-[13.677px] h-[15.814px]' />
        <h1 className=' z-30 drop-shadow-[0px_4px_50px_#231D4F] w-full lg:w-[906px] mono  pt-[84px] text-[65px] font-extrabold overflow-visible   tracking-[2px] leading-[144.5%] '>
          <div className='w-full text-3xl lg:text-7xl gap-2 mx-auto overflow-visible justify-center'>
            <p className=' '>
              Not Just Websites
            </p>
            <div className='flex flex-row mx-auto justify-center items-center'>
              Crafting <span className='text-transparent'>-</span>
              <TypeAnimation className='overflow-visible text-transparent bg-gradient-to-r from-tertinary to-white bg-clip-text' sequence={[' Experiences', 4000, ' Artpieces', 4000, ' identities', 4000]} cursor={true} repeat={Infinity} wrapper="span" />
            </div>
          </div>
        </h1>
        <Stars containerStyle='self-start ml-20 ' bigStarStyle=' left-0 w-[30.016px] h-[42.838px]' topLeftStarStyle='absolute hidden top-8 left-0 w-[16.669px] h-[21.371px]' bottomLeftStarStyle='absolute hidden top-[4.5rem]  w-[13.677px] h-[15.814px]' />
        <Stars containerStyle='absolute bottom-72  right-4    ' bigStarStyle=' left-0 w-[47.016px] h-[59.838px]' topLeftStarStyle='absolute  top-0  left-0 w-[16.669px] h-[21.371px]' bottomLeftStarStyle='absolute hidden top-[4.5rem]  w-[13.677px] h-[15.814px]' />
        <p className='w-full text-primary opacity-70 leading-normal pt-[17px] font-medium tracking-[0.36px]  pb-[70px] text-sm lg:text-[24px]'>WebCraft is where your digital dreams come to life. Innovation  meets expertise as we craft exceptional online experiences that elevate your brand.</p>
        <motion.button className='relative hover:scale-110 transition-all duration-300 overflow-hidden group justify-center flex-row w-[251px] flex rounded-[4px] text-background text-lg font-bold leading-normal shadow-buttonShadow hover:shadow-buttonShadowHover py-[16px] cursor-pointer bg-tertinary'>
          <div className=' mr-3 w-fit group-hover:-translate-x-5 transition-all transform'>
            Explore Plans
          </div>
          <svg className="w-4 h-4 absolute right-10 text-background duration-300 -translate-y-96 group-hover:translate-y-2 transition-all " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
          </svg>
        </motion.button>
        <Stars containerStyle='absolute bottom-16 left-0' bigStarStyle='absolute top-8 left-0 w-[47.016px] h-[59.838px]' topLeftStarStyle='absolute top-8 left-0 w-[16.669px] h-[21.371px]' bottomLeftStarStyle='absolute top-[4.5rem]  w-[13.677px] h-[15.814px]' />
      </div>
      <div className='flex w-full pt-[133px] justify-around'>
        {Array(5).fill(' ').map((_, i: number) => <Company key={i} />)}
      </div>

    </div >
  )

}

export default HeroSection