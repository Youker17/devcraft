'use client'
import React, { use, useEffect, useState } from 'react'
import { motion } from 'framer-motion'


export default function Loader() {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }
            , 1000)
    }
        , [])
    return (
        <div className={"fixed bg-background top-0 left-0 w-full h-screen z-[9999]  items-center justify-center" + (loading ? ' flex' : " hidden")}>
            <motion.div  >
                <h1 className="text-5xl  font-bold bg-[radial()]"><motion.span initial={{backgroundColor:"white"}} animate={{backgroundColor:"pink"}} transition={{duration:.5}} className="text-transparent  aspect-square  bg-clip-text">Dev</motion.span>Craft</h1>
                <p className="text-sm leading-normal tracking-[7.75px]">Devcraft studio</p>
            </motion.div>
        </div>
    )
}