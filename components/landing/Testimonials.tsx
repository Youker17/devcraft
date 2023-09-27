import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimony from "../ui/Testimony";



function Testimonials() {
  return (
    <div>
      <p className=" text-center text-sm md:text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-primary ">
      Testimonials
      </p>
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold leading-normal text-center">
      What our clients say about us.
      </h1>

      <Swiper
        spaceBetween={50}
        height={500}
        navigation={false}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 210,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 410,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 400,
          },
        }}
      >
        {Array(5)
          .fill(" ")
          .map((_, i: number) => (
            <SwiperSlide key={i} className=" w-full pt-[133px]">
              <Testimony />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
