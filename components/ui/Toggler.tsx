'use client';

import { Web } from '@/assets/Icons';
import { useState } from 'react';

export default function ThemeToggle() {
  const [toggle,setToggle] = useState<boolean>(true)  


  return (
    <div className="relative z-50 flex h-10 w-[5.5rem] cursor-pointer items-center justify-between rounded-full bg-gradient-to-br from-gray-50 to-white px-2 shadow-md shadow-gray-400 transition-all duration-500 dark:from-gray-700 dark:to-customGray-dark dark:shadow-black">
        <>
         
          {toggle  ? (
            <Web  onClick={() => setToggle(false)} />
          ) : (
            <Web
              onClick={() => setToggle(true)}
            />
          )}
        </>
      <span className="absolute left-[18px] h-8 w-8 rounded-full  bg-black transition-all duration-500 dark:left-auto dark:translate-x-[40px] dark:bg-white " />
    </div>
  );
}