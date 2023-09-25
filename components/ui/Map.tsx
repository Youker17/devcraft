"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'



const active = {
  scale:1.2,
  backgroundOpacity:1,
  backgroundColor:"white",
  color:"black"
}

const inactive = {
  backgroundOpacity:0,
  backgroundColor:"transparent",
  color:"white"
}


function Map() {
  const [screenHeight,setScreenHeight] = useState<number>(0) 

  const [inView, setInView] = useState<number>(1)

  const navigate = (view:number) => {
    
    window.scrollTo({
      top: screenHeight * (view-1),
      behavior: 'smooth'
    })
  }


  useEffect(() => {
    setScreenHeight(window.innerHeight)
    window.addEventListener('scroll', () => {
      const currentView = Math.ceil(window.scrollY / screenHeight) 
      console.log(currentView)
      setInView(currentView)
    })

  }, [inView])



  return (
    <div className='flex flex-col justify-center items-center gap-[2px] z-50 fixed w-auto  right-20 top-[40%]  '>
        <motion.div onClick={e=>navigate(1)} initial={inactive} animate={inView === 1 || inView === 0 ? active:inactive}  className=' w-[28px] h-[28px]  flex justify-center items-center font-extrabold  cursor-pointer  rounded-full'>1</motion.div>
        <motion.div   className=' h-10 w-[2px] bg-tertinary'></motion.div>
        <motion.div onClick={e=>navigate(2)} initial={inactive} animate={inView === 2? active:inactive}  className=' w-[28px] h-[28px]  flex justify-center items-center font-extrabold  cursor-pointer  rounded-full'>2</motion.div>
        <motion.div   className=' h-10 w-[2px] bg-tertinary'></motion.div>
        <motion.div onClick={e=>navigate(3)} initial={inactive} animate={inView === 3? active:inactive}  className=' w-[28px] h-[28px]  flex justify-center items-center font-extrabold  cursor-pointer  rounded-full'>3</motion.div>
        <motion.div   className=' h-10 w-[2px] bg-tertinary'></motion.div>
        <motion.div onClick={e=>navigate(4)} initial={inactive} animate={inView === 4? active:inactive}  className=' w-[28px] h-[28px]  flex justify-center items-center font-extrabold  cursor-pointer  rounded-full'>4</motion.div>  
    </div>
  )
}

export default Map