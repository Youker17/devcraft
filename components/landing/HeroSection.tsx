import Image from 'next/image'
import React, {useEffect} from 'react'
import hero__img from "@/assets/hero__gradient.png"
import img__effect from "@/assets/dedring.png"
import plusses from "@/assets/plusses.png"
import {ArrowDown, Company, Star} from "@/assets/Icons" 
import Stars from '../ui/Stars'
import Map from '../ui/Map'
import {Variants, delay, motion} from "framer-motion"

function HeroSection() {
  
  const BtnAnimation:Variants = {
    initial: {
        // Define initial properties if any
    },
    animate: {
        // Define animation properties if any
    },
    exit:{
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

const ArrowAnimation:Variants = {
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
    animate:{
        
    }
   
    
}



  return (
    <div className='w-full h-screen  top-0 left-0   flex flex-col items-center text-center    '>
       <Image src={hero__img} className='w-full h-[893px] absolute z-10' alt='hero__img' draggable={false} />   
       <Image src={img__effect} className='w-full h-[800px] absolute -z-10' alt='hero__img' draggable={false} />   
       <Image src={plusses} className='w-full h-[800px] absolute -z-10' alt='hero__img' draggable={false} />   
       <div className='flex flex-col items-center text-center relative mt-[140px] '>
         <Stars containerStyle='absolute top-0 left-0  drop-shadow-[0px_4px_77px_#EEBBC3]' bigStarStyle='absolute top-8 left-0 w-[47.016px] h-[59.838px]' topLeftStarStyle='absolute top-8 left-0 w-[16.669px] h-[21.371px]' bottomLeftStarStyle='absolute top-[4.5rem]  w-[13.677px] h-[15.814px]' />
        <h1 className='drop-shadow-[0px_4px_50px_#231D4F] w-[906px] mono  pt-[84px] text-[65px] font-extrabold    tracking-[2px] leading-[144.5%] '>Crafting <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white'>Experiences</span>, Not   Just Websites</h1>
        <Stars containerStyle='self-start ml-20 ' bigStarStyle=' left-0 w-[30.016px] h-[42.838px]' topLeftStarStyle='absolute hidden top-8 left-0 w-[16.669px] h-[21.371px]' bottomLeftStarStyle='absolute hidden top-[4.5rem]  w-[13.677px] h-[15.814px]' />
        <Stars containerStyle='absolute bottom-72  right-4    ' bigStarStyle=' left-0 w-[47.016px] h-[59.838px]' topLeftStarStyle='absolute  top-0  left-0 w-[16.669px] h-[21.371px]' bottomLeftStarStyle='absolute hidden top-[4.5rem]  w-[13.677px] h-[15.814px]' />
        <p className='w-[777px] text-primary opacity-70 leading-normal pt-[17px] font-medium tracking-[0.36px]  pb-[70px] text-[24px]'>WebCraft is where your digital dreams come to life. Innovation  meets expertise as we craft exceptional online experiences that elevate your brand.</p>
        <motion.button initial="initial" variants={BtnAnimation} animate="animate" whileHover={'hover'} exit={"exit"}  className='relative overflow-hidden justify-center flex-row w-[251px] flex rounded-[4px] text-background text-lg font-bold leading-normal shadow-buttonShadow hover:shadow-buttonShadowHover py-[16px] cursor-pointer bg-tertinary'>
          Explore Plans
          <ArrowDown style='absolute  -top-20' variants={ArrowAnimation}  />
        </motion.button>
        <Stars containerStyle='absolute bottom-16 left-0' bigStarStyle='absolute top-8 left-0 w-[47.016px] h-[59.838px]' topLeftStarStyle='absolute top-8 left-0 w-[16.669px] h-[21.371px]' bottomLeftStarStyle='absolute top-[4.5rem]  w-[13.677px] h-[15.814px]' />
       </div>
      <div className='flex w-full pt-[133px] justify-around'>
        {Array(5).fill(' ').map((_,i:number) =>  <Company key={i} /> )}
      </div>
  
    </div>
  )

}

export default HeroSection