"use client"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import test from "@/assets/testimg.webp"

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from "react";



export default function Work() {
    const swiperRef = useRef(null);

    const [paginationState, setPaginationState] = useState(1)

    const [paginationLength, setPaginationLength] = useState(4)

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
    return (
        <div className="h-screen flex flex-col justify-around items-center">
            <div className="w-full flex flex-col gap-2 items-center">
                <p className=' text-center text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-primary'> OUR WORK</p>
                <h1 className=' text-5xl font-bold leading-normal text-center'>Witness Excellence: Our Impressive Portfolio</h1>
            </div>
            <div className="h-1/2">
                <Swiper
                    ref={swiperRef}
                    className="w-full h-full   container mx-auto "
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() =>{
                        // @ts-ignore
                        setPaginationState(swiperRef.current.swiper.activeIndex + 1)

                    }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                >
                    <SwiperSlide className="bg-primary w-40 h-52 rounded-xl overflow-hidden">
                        <img src={test.src} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="bg-primary w-40 h-52 rounded-xl overflow-hidden">
                        <img src={test.src} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="bg-primary w-40 h-52 rounded-xl overflow-hidden">
                        <img src={test.src} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="bg-primary w-40 h-52 rounded-xl overflow-hidden">
                        <img src={test.src} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="bg-primary w-40 h-52 rounded-xl overflow-hidden">
                        <img src={test.src} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="bg-primary w-40 h-52 rounded-xl overflow-hidden">
                        <img src={test.src} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="flex flex-row w-full justify-between items-center container">
                <div className="flex flex-row gap-1 justify-center items-center  ">
                    {
                        Array(paginationLength).fill("").map((_, i) => <div onClick={() => {
                            // @ts-ignore
                            swiperRef.current.swiper.slideTo(i)
                            setPaginationState(i + 1)
                        }} className={` cursor-pointer transition-all transform rounded-full ${paginationState === i + 1 ? "w-8 h-4 bg-tertinary" : "w-4 aspect-square bg-primary/60"}`}></div>)
                    }
                    {/* <div className="w-4 cursor-pointer aspect-square rounded-full bg-primary/60"></div>
                    <div className="w-8 h-4 cursor-pointer  rounded-full bg-tertinary"></div>
                    <div className="w-4 cursor-pointer aspect-square rounded-full bg-primary/60"></div>
                    <div className="w-4 cursor-pointer aspect-square rounded-full bg-primary/60"></div> */}
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