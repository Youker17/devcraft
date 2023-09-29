"use client"

import { Calendar } from "@/components/ui/calendar"
import React from 'react'
import Map from "../ui/Map"

function Form() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())


    return (
        <div className='w-full mx-auto xl:w-3/6 pt-20 flex flex-col  pb-20 '>
            <div className="  flex  items-center   flex-col bg-primary h-[70vh] rounded-lg pb-8 px-0 w-full xs:w-auto xl:w-full xl:h-full xs:px-16 sm:px-20 mx-auto  ">
                <h1 className=" text-background font-bold tracking-[0.45px] text-center py-8 text-2xl">Chose a day </h1>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md   xl:mt-32 scale-105 xl:scale-[1.7]   bg-primary  bottom-0 "

                />
                <button className="text-[1rem] xl:text-[2rem] font-medium leading-normal mt-12 py-2 px-3 bg-background z-20 w-5/6 xl:mt-28 rounded-[6px] hover:bg-background/90">Next</button>
            </div>
            <Map />
        </div>
    )
}

export default Form



