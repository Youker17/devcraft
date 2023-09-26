"use client"
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import test from "@/assets/testimg.webp"

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from "react";



const projects = [
    {
        image: test.src,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncquis nunc sit amet, consectetur adipiscing elit. Nunc"
    },
    {
        image: test.src,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncquis nunc sit amet, consectetur adipiscing elit. Nunc"
    },
    {
        image: test.src,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncquis nunc sit amet, consectetur adipiscing elit. Nunc"
    },
    {
        image: test.src,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncquis nunc sit amet, consectetur adipiscing elit. Nunc"
    },
    {
        image: test.src,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncquis nunc sit amet, consectetur adipiscing elit. Nunc"
    },
    {
        image: test.src,
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncquis nunc sit amet, consectetur adipiscing elit. Nunc"
    },
]







export default function Work() {
    const swiperRef = useRef(null);

    const [paginationState, setPaginationState] = useState(1)

    const [mobile, setMobile] = useState(false)

    const [paginationLength, setPaginationLength] = useState(projects.length % 3 === 0 ? (projects.length === 3 ? 1 : Math.round(projects.length / 3) * 2) : (Math.round(projects.length / 3) * 2) + 1)

    const swipeNext = () => {
        // @ts-ignore
        swiperRef.current.swiper.slideNext()
        setPaginationState(paginationState + 1 > paginationLength ? paginationLength : paginationState + 1)
        console.log("swipeNext")
    }
    const swipePrev = () => {
        // @ts-ignore
        swiperRef.current.swiper.slidePrev()
        setPaginationState(paginationState - 1 < 1 ? 1 : paginationState - 1)
        console.log("swipePrev")
    }


    useEffect(() => {
        console.log("paginationLength", paginationLength, projects.length % 3 === 0 ? projects.length / 3 : Math.ceil(7 / 3) + 1)
        if (typeof window !== "undefined") {
            if (window.innerWidth < 768) {
                setMobile(true)
                setPaginationLength(projects.length)
            } else {
                setMobile(false)
                console.log("paginationLength", paginationLength)
            }
        }
    }, [])

    return (
        <div className="h-screen flex flex-col justify-around items-center">
            <div className="w-full flex flex-col gap-2 items-center">
                <p className=' text-center text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-primary'> OUR WORK</p>
                <h1 className=' text-5xl font-bold leading-normal text-center'>Witness Excellence: Our Impressive Portfolio</h1>
            </div>
            <div className="h-1/2 ">
                <Swiper
                    ref={swiperRef}
                    className="w-full h-full   container mx-auto "
                    spaceBetween={50}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true
                    }}
                    slidesPerView={3}
                    onFocus={(e) => {
                        e.currentTarget.blur()
                        console.log("onSelect", e.target)
                    }
                    }
                    onSlideChange={() => {
                        // @ts-ignore
                        setPaginationState(swiperRef.current.swiper.activeIndex + 1)

                    }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
                >
                    {
                        projects.map((project, i) => <SwiperSlide key={i} className="bg-primary w-40 h-52 group rounded-xl overflow-hidden">
                            <div className="group-hover:opacity-100 opacity-0 transition-all duration-200 flex-col p-10 justify-end  flex bg-gradient-to-t from-black text-white to-black/0 h-full absolute z-10 bottom-0 w-full">
                                <div className="flex flex-col gap-3">
                                    <h2 className="bg-gradient-to-r from-tertinary to-white bg-clip-text text-4xl text-transparent w-fit font-bold">{project.title}</h2>
                                    <p className="text-secondary">{project.description}</p>
                                    <div className="flex flex-row justify-between items-end">
                                        <button className="bg- bg-gradient-to-bl from-tertinary to-pink-400 h-fit  px-3 py-2 w-24 rounded-[5px] hover:scale-105 shadow-2xl hover:shadow-tertinary transition-all text-background">Visit</button>
                                        <div className="flex  -space-x-4 h-fit">
                                            <img className="w-10 h-10 border-2 bg-white rounded-full" src="https://logosandtypes.com/wp-content/uploads/2020/07/laravel.png" alt="" />
                                            <img className="w-10 h-10 border-2 bg-white rounded-full" src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" alt="" />
                                            <img className="w-10 h-10 border-2 bg-white rounded-full" src="https://www.datocms-assets.com/58377/1688031395-logo_on_light.svg" alt="" />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={project.image} className="object-cover group-hover:scale-125 transition-all duration-300 w-full h-full" alt="" />
                        </SwiperSlide>)

                    }

                </Swiper>
            </div>
            <div className="flex flex-row w-full justify-between items-center container ">
                <div className="flex flex-row gap-1 justify-center items-center  ">
                    {
                        Array(paginationLength).fill("").map((_, i) => <div onClick={() => {
                            // @ts-ignore
                            swiperRef.current.swiper.slideTo(i)
                            setPaginationState(i + 1)
                        }} className={` cursor-pointer transition-all transform rounded-full ${paginationState === i + 1 ? "w-10 h-4 bg-gradient-to-r from-tertinary to-pink-400" : "w-4 aspect-square bg-primary/60"}`}></div>)
                    }
                </div>
                <div className="flex flex-row gap-3 ">
                    <div onClick={swipePrev} className="border-2 w-16 aspect-square p-4 rounded-full flex justify-center items-center text-white hover:text-background hover:bg-white transition-all ease-in-out duration-200 cursor-pointer ">
                        <svg className="w-6 h-6 rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </div>

                    <div onClick={swipeNext} className="border-2 w-16 aspect-square p-4 rounded-full flex justify-center items-center text-white hover:text-background hover:bg-white transition-all ease-in-out duration-200 cursor-pointer ">
                        <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </div>


                </div>
            </div>

        </div>
    )
}