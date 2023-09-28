import React from 'react'
import Feature from './Feature'

function Features() {
  return (
    <div className=' w-full h-full px-4  '>
        <p className=' text-center text-sm md:text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-primary'>FEATURES</p>
        <h1 className=' text-3xl sm:text-4xl md:text-5xl font-bold leading-normal text-center'>Unlock Innovation with Our Exclusive Features</h1>
        <div className=' sm:px-8  pt-[136px] gap-y-[163px] w-full  grid grid-flow-row gap-8 grid-cols-2 lg:grid-cols-3 ' >
         {Array(6).fill(' ').map((_,i:number) =>   <Feature key={i} />)}
        </div>
    </div>
  )
}

export default Features