import { testimonialsData } from "@/data/testimonials";
import { testimonialDataType } from "@/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Stars from "../ui/Stars";
import Testimony from "../ui/Testimony";

function Testimonials() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Stars
        containerStyle="absolute top-0 left-20 lg:left-20  drop-shadow-[0px_4px_77px_#EEBBC3]"
        bigStarStyle="absolute top-8 left-0 w-[128px] h-[149px] opacity-20 "
        topLeftStarStyle="absolute top-8 left-20 w-[47px] h-[51px] opacity-70"
        bottomLeftStarStyle="hidden"
      />
      <p className=" text-center text-sm md:text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-primary ">
        Testimonials
      </p>
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold leading-normal text-center">
        What our clients say about us.
      </h1>
      <Stars
        containerStyle="absolute top-20 right-48  drop-shadow-[0px_4px_77px_#EEBBC3]"
        bigStarStyle="absolute top-8 left-0 w-[128px] h-[149px] opacity-20 "
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
        containerStyle="absolute bottom-32 left-20 lg:left-20  drop-shadow-[0px_4px_77px_#EEBBC3]"
        bigStarStyle="absolute top-8 left-0 w-[128px] h-[149px] opacity-20 "
        topLeftStarStyle="absolute top-8 left-20 w-[47px] h-[51px] opacity-70"
        bottomLeftStarStyle="hidden"
      />
      <button className=" text-background bg-tertinary w-fit font-bold text-[16px] uppercase leading-[150%] py-[16px] px-[24px] mt-[111px] rounded-[5px]">
        Get a quote
      </button>
    </div>
  );
}

export default Testimonials;
