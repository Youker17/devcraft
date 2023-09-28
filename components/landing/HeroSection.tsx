import { ArrowDown, Company } from "@/assets/Icons";
import img__effect from "@/assets/dedring1.png";
import hero__img from "@/assets/gradient.png";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Stars from "../ui/Stars";

function HeroSection() {
  const BtnAnimation: Variants = {
    initial: {
      // Define initial properties if any
    },
    animate: {
      // Define animation properties if any
    },
    exit: {
      transition: {
        duration: 10, // Adjust the duration here (in seconds)
      },
    },
    hover: {
      width: "275px",
      scale: 1.1,
      justifyContent: "space-around",
      transition: {
        duration: 0.5, // Adjust the duration here (in seconds)
      },
    },
  };

  const ArrowAnimation: Variants = {
    initial: {
      position: "absolute",
      translateY: "-20px",
    },
    hover: {
      position: "static",
      translateY: "0px",
      transition: {
        duration: 0.5, // Adjust the duration here (in seconds)
      },
    },
    animate: {},
  };

  return (
    <div className="w-full h-screen  top-0 left-0   flex flex-col items-center text-center  ">
      <Image
        src={hero__img}
        className="w-full h-full absolute z-10"
        alt="hero__img"
        draggable={false}
      />
      <Image
        src={img__effect}
        className="w-full h-[800px] opacity-30 absolute z-20"
        alt="hero__img"
        draggable={false}
      />
      <div className="flex flex-col z-30 items-center text-center relative mt-[140px] ">
        <Stars
          containerStyle="absolute top-0 left-10 lg:left-0  drop-shadow-[0px_4px_77px_#EEBBC3]"
          bigStarStyle="absolute top-8 left-0 w-[47.016px] h-[59.838px] animate-bounce"
          topLeftStarStyle="absolute top-8 left-0 w-[16.669px] h-[21.371px] animate-bounce"
          bottomLeftStarStyle="absolute top-[4.5rem]  w-[13.677px] h-[15.814px] animate-bounce"
        />
        <h1 className=" z-30  drop-shadow-[0px_4px_50px_#231D4F] w-auto xl:w-[906px] mono  pt-[84px] text-4xl sm:text-5xl md:text-[65px] font-extrabold overflow-visible   tracking-[2px] leading-[144.5%] ">
          <div className="w-full flex flex-row gap-2 mx-auto overflow-visible justify-center">
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white lg:w-1/2 overflow-visible  flex flex-row w-auto ">
              <TypeAnimation
                className="overflow-visible"
                sequence={[
                  "Experiences,",
                  4000,
                  "Artpieces,",
                  4000,
                  "identities,",
                  4000,
                ]}
                cursor={true}
                repeat={Infinity}
                wrapper="div"
              />
            </span>
            <br />
          </div>
          Not Just Websites
        </h1>
        <Stars
          containerStyle="self-start ml-20 "
          bigStarStyle=" left-0 w-[30.016px] h-[42.838px] animate-bounce"
          topLeftStarStyle="hidden"
          bottomLeftStarStyle="hidden"
        />
        <Stars
          containerStyle="absolute bottom-72  right-4    "
          bigStarStyle=" left-0 w-[47.016px] h-[59.838px] animate-bounce "
          topLeftStarStyle="absolute  top-0  left-0 w-[16.669px] h-[21.371px] animate-bounce" 
          bottomLeftStarStyle=" hidden"
        />
        <p className="md:w-[777px] mx-5 text-primary opacity-70 leading-normal pt-[17px] font-medium tracking-[0.36px]  pb-[70px] text-lg md:text-[24px]">
          WebCraft is where your digital dreams come to life. Innovation meets
          expertise as we craft exceptional online experiences that elevate your
          brand.
        </p>
        <motion.button
          initial="initial"
          variants={BtnAnimation}
          animate="animate"
          whileHover={"hover"}
          exit={"exit"}
          className="relative overflow-hidden justify-center flex-row w-[251px] flex rounded-[4px] text-background text-lg font-bold leading-normal shadow-buttonShadow hover:shadow-buttonShadowHover py-[16px] cursor-pointer bg-tertinary"
        >
          Explore Plans
          <div></div>
          <ArrowDown style="absolute  -top-20" variants={ArrowAnimation} />
        </motion.button>
        <Stars
          containerStyle="absolute left-10 lg:left-0 bottom-16 left-0"
          bigStarStyle="absolute top-8 left-0 w-[47.016px] h-[59.838px] animate-bounce"
          topLeftStarStyle="absolute top-8 left-0 w-[16.669px] h-[21.371px] animate-bounce"
          bottomLeftStarStyle="absolute top-[4.5rem]  w-[13.677px] h-[15.814px] animate-bounce"
        />
      </div>
      {/* @ts-ignore */}
      {/* <div
        className="grid  w-full pt-[133px]   justify-center  "
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {Array(5)
          .fill(" ")
          .map((_, i: number) => (
            <Company key={i} />
          ))}
      </div> */}
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {Array(5)
          .fill(" ")
          .map((_, i: number) => (
            <SwiperSlide key={i} className="flex w-full pt-[133px]">
              <Company />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default HeroSection;
