import { Check } from '@/assets/Icons'
import React from 'react'

function Feature() {
  return (
    <div className='flex-col gap-[21px] flex mx-auto '>
        <div className=' bg-tertinary w-[100px] h-[100px] flex justify-center items-center rounded-lg '>
         <Check />
        </div>
         <h2 className=' font-bold leading-normal tracking-[0.3px] text-[20px]'>Responsive Design</h2>
         <p className='text-[20px]  font-medium tracking-[0.3px] leading-normal w-[236px]'>We create websites that adapt seamlessly to various screen sizes, ensuring a flawless user experience on desktops, tablets, and mobile devices</p>
    </div>
  )
}

export default Feature