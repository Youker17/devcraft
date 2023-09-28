import { GrayStar, YellowStar } from "@/assets/Icons";
import { testimonialDataType } from "@/types";
import Image from "next/image";

const Testimony: React.FC<testimonialDataType> = ({
  rate,
  author,
  testimony,
  img,
}) => {
  return (
    <div className="mx-7 sm:mx-0 sm:w-[473px] xs:h-[433px] px-[24px] py-[40px]   flex flex-col justify-center items-center gap-[14px] rounded-lg  border-2 border-tertinary">
      <Image src={img} alt="author__img" />
      <p className="text-white text-[24px] font-bold leading-[150%]">
        {author}
      </p>
      <div className="flex">
        {Array(rate)
          .fill(" ")
          .map((_, i: number) => (
            <YellowStar key={i} />
          ))}
        {Array(5 - rate)
          .fill(" ")
          .map((_, i: number) => (
            <GrayStar key={i} />
          ))}
      </div>
      <p className="text-center text-[16px] text-primary font-normal leading-[150%]">
        {testimony}
      </p>
    </div>
  );
};

export default Testimony;
