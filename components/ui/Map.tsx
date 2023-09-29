"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'







const active = {

  color: "black"

}

const inactive = {

  color: "white",
}


function Map() {
  const [screenHeight, setScreenHeight] = useState<number>(0)

  const [inView, setInView] = useState<number>(1)



  const navigate = (view: string) => {
    const element = document.getElementById(view);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  useEffect(() => {
    setScreenHeight(window.innerHeight)
    window.addEventListener('scroll', () => {
      const currentView = Math.ceil(window.scrollY / (screenHeight + 50))
      console.log(currentView)
      setInView(currentView)
    })

  }, [inView])



  return (
    <motion.div initial={{ translateY: 120 }} animate={inView >= 2 ? { translateY: 0 } : { translateY: 120 }} transition={{ duration: .5 }} className={'hidden lg:flex bg-primary/30 shadow-2xl shadow-black/25 backdrop-blur-xl p-4 rounded-[20px] flex-row justify-center items-center gap-[2px] z-50 fixed w-auto  bottom-5 left-[32%]  '}>
      <div className='flex flex-row gap-2 font-bold relative text-sm '>
        <motion.div transition={{ duration: .5 }} animate={{ translateX: (6.5 * ((inView < 6 ? inView : 6) - 1)).toString() + "rem" }} className={`bg-primary absolute h-full w-24 rounded-[15px] `}></motion.div>
        <motion.p onClick={e => navigate("hero")} className='py-5 z-30 group w-24 text-center hover:bg-background/80 transition-all cursor-pointer bg-background rounded-[15px] flex justify-center items-center'>
          <svg className="w-4 h-4 group-hover:-translate-y-2 group-hover:w-5 transition-all transform rotate-180 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
          </svg>
        </motion.p>
        <motion.p initial={inactive} animate={inView === 2 ? active : inactive} className='py-5 z-30 cursor-pointer w-24 text-center rounded-[20px]' onClick={e => navigate("features")}>Features</motion.p>
        <motion.p initial={inactive} animate={inView === 3 ? active : inactive} className='py-5 z-30 cursor-pointer w-24 text-center rounded-[20px]' onClick={e => navigate("work")}>Our Work</motion.p>
        <motion.p initial={inactive} animate={inView === 4 ? active : inactive} className='py-5 z-30 cursor-pointer w-24 text-center rounded-[20px]' onClick={e => navigate("plans")}>Plans</motion.p>
        <motion.p initial={inactive} animate={inView === 5 ? active : inactive} className='py-5 z-30 cursor-pointer w-24 text-center rounded-[20px]' onClick={e => navigate("testimonials")}>Testimonials</motion.p>
        <motion.p initial={inactive} animate={inView === 6 ? active : inactive} className='py-5 z-30 cursor-pointer w-24 text-center rounded-[20px]' onClick={e => navigate("contact")}>Contact</motion.p>
      </div>
    </motion.div>
  )
}

export default Map