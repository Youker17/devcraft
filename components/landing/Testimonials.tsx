import { testimonialsData } from "@/data/testimonials";
import { testimonialDataType } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Stars from "../ui/Stars";
import Testimony from "../ui/Testimony";

function Testimonials() {
  return (
    <div id="testimonials" className="flex flex-col justify-center items-center relative">
      <Stars
        containerStyle="flex absolute -top-12 lg:top-0 left-0 lg:left-20 lg:left-20  drop-shadow-[0px_4px_77px_#EEBBC3]"
        bigStarStyle="absolute top-0 left-0 w-20 h-20 lg:w-[128px] lg:h-[149px] opacity-20 "
        topLeftStarStyle="hidden lg:flex absolute top-6 left-20 w-[47px] h-[51px] opacity-70"
        bottomLeftStarStyle="hidden"
      />
      <p className=" text-center text-sm md:text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-primary ">
        Testimonials
      </p>
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold leading-normal text-center">
        What our clients say about us.
      </h1>
      <Stars
        containerStyle="absolute top-16 md:top-20 right-32 md:right-48  drop-shadow-[0px_4px_77px_#EEBBC3]"
        bigStarStyle="absolute top-8 left-0 w-20 h-20 md:w-[128px] md:h-[149px] opacity-20 "
        topLeftStarStyle="hidden"
        bottomLeftStarStyle="hidden"
      />
      <div className="container mx-auto">

        <div className="lg:flex hidden">

          <Swiper
            spaceBetween={1}
            height={500}
            navigation={false}
            slidesPerView={3}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination, Navigation]}
            className=""
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              // when window width is >= 768px
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              // when window width is >= 1024px
              1200: {
                slidesPerView: 3,
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
      <Stars
        containerStyle="absolute bottom-48 md:bottom-32 left-5 md:left-20 lg:left-20 w-full  drop-shadow-[0px_4px_77px_#EEBBC3]"
        bigStarStyle="absolute top-8 left-0  w-24 h-24 md:w-[128px] md:h-[149px] opacity-20 "
        topLeftStarStyle="absolute top-8 right-16 top-48 md:top-10 md:left-20 w-[47px] h-[51px] opacity-70"
        bottomLeftStarStyle="hidden"
      />
      <button className=" text-background cursor-pointer z-20 bg-tertinary w-fit font-bold text-[16px] uppercase leading-[150%] py-[16px] px-[24px] mt-[111px] rounded-[5px]">
        Get a quote
      </button>
    </div>
  );
}

export default Testimonials;
