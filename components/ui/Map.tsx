import React from 'react'

function Map() {
  return (
    <div className='flex flex-col justify-center items-center gap-[2px] fixed w-auto  right-20 top-[50%]  '>
        <div className=' w-[28px] h-[28px] bg-white text-background   flex justify-center items-center font-extrabold   rounded-full'>1</div>
        <div className=' h-10 w-[2px] bg-tertinary'></div>
        <div className=' w-[20px] h-[24px] text-white'>2</div>
        <div className=' h-10 w-[2px] bg-tertinary'></div>
        <div className=' w-[20px] h-[24px] text-white '>3</div>
        <div className=' h-10 w-[2px] bg-tertinary'></div>
        <div className=' w-[20px] h-[24px] text-white '>4</div>  
    </div>
  )
}

export default Map