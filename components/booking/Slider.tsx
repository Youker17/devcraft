import { testimonialsData } from "@/data/testimonials";
import { testimonialDataType } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimony from "../ui/Testimony";

function Slider() {
    return (
        <div className='w-full xl:w-3/6 pt-[71px] flex flex-col justify-start items-start '>
            <h1 className='text-[2.5rem] md:text-[3.3rem] font-bold leading-normal  xl:w-4/6'>Book your Call Today !</h1>
            <p className=" font-medium tracking-[0.255px] leading-normal text-[1.1rem] lg:w-4/6 xl:w-4/6 pt-6">WebCraft is where your digital dreams come to life. Innovation meets expertise as we craft exceptional online experiences that elevate your brand.</p>
            <div className="container mx-auto">

                <div className="lg:flex hidden">

                    <Swiper
                        spaceBetween={1}
                        height={500}
                        navigation={false}
                        slidesPerView={3}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-full xl:w-9/12 -mt-20 "
                        style={{marginLeft:"unset",marginRight:"unset"}}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            // when window width is >= 768px
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            // when window width is >= 1024px
                            1280: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {testimonialsData.map((e: testimonialDataType, i: number) => (
                            <SwiperSlide key={i} className="w-full pt-[133px]">
                                <Testimony {...testimonialsData[i]} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="flex mx-auto  lg:hidden" >
                    <Swiper
                        spaceBetween={50}
                        height={500}
                        navigation={false}
                        slidesPerView={1}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="flex lg:hidden"
                    >
                        {testimonialsData.map((e: testimonialDataType, i: number) => (
                            <SwiperSlide key={i} className="w-full pt-[133px]">
                                <Testimony {...testimonialsData[i]} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Slider