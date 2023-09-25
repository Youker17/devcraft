import React from 'react'
import Feature from './Feature'

function Features() {
  return (
    <div className=' pt-[180px] w-full h-screen  '>
        <p className=' text-center text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-primary'>FEATURES</p>
        <h1 className=' text-5xl font-bold leading-normal text-center'>Unlock Innovation with Our Exclusive Features</h1>
        <div className='grid  p-[136px] gap-y-[163px] w-full  grid-cols-3 ' >
         {Array(6).fill(' ').map((_,i:number) =>   <Feature key={i} />)}
        </div>
    </div>
  )
}

export default Features