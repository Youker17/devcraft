import { YellowStar } from "@/assets/Icons";
import img1 from "@/assets/testimonials/img1.svg";
import Image from "next/image";

function Testimony() {
  return (
    <div className="w-[473px] h-[433px] px-[24px] py-[40px] mx-auto  flex flex-col justify-center items-center gap-[14px] rounded-lg  border-2 border-tertinary">
      <Image src={img1} alt="author__img" />
      <p className="text-white text-[24px] font-bold leading-[150%]">
        James Pattinson
      </p>
      <div className="flex">
        {Array(5)
          .fill(" ")
          .map((_, i: number) => (
            <YellowStar key={i} />
          ))}
      </div>
      <p className="text-center text-[16px] text-primary font-normal leading-[150%]">
        “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus
        tortor donec ipsum consequat semper consequat adipiscing ultrices.”
      </p>
    </div>
  );
}

export default Testimony;
