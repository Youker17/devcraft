"use client"

import { Calendar } from "@/components/ui/calendar"
import React from 'react'
import Map from "../ui/Map"

function Form() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())


    return (
        <div className=' mx-auto xl:w-11/12  h-full flex flex-col justify-center items-center   '>
            <div className="w-full xl:w-[37.375rem]  xl:h-[40.625rem]  flex  items-center mt-32 my-20 mr-4    flex-col bg-primary  rounded-lg  px-4  xs:w-auto   xs:px-16 sm:px-20 mx-auto  ">
                <h1 className=" text-background font-bold tracking-[0.45px] text-center py-8 text-2xl">Chose a day </h1>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md   xl:mt-20 scale-105 xl:scale-[1.5]   bg-primary  bottom-0 "

                />
                <button className="text-[1rem] mb-10 xl:text-[1.3rem] xl:text-[rem] font-medium leading-normal mt-4 py-2 px-3 bg-background z-20 w-[88%] ml-3 xl:mt-24 rounded-[6px] hover:bg-background/90">Next</button>
            </div>
            <Map />
        </div>
    )
}

export default Form



