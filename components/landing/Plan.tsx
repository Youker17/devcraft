import { PlanCheck } from "@/assets/Icons";
import { planData } from "@/data/plans";
import { planDataType } from "@/types";
// import Toggle from "../ui/Toggle";

function Plan() {
  return (
    <div className=" bg-primary w-full py-[4rem] flex flex-col items-center ">
      <p className=" text-center text-sm md:text-[1rem] font-normal  leading-normal uppercase tracking-[0.48px] text-background">
        Plans
      </p>
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold leading-normal text-center text-background">
        Your Path to Success Starts with Our Plans
      </h1>
      <p className=" mx-5 text-center w-5/6 text-background opacity-70 leading-normal pt-[63px] font-medium tracking-[0.36px]  pb-[4.2rem] text-lg md:text-[1.5rem]">
        WebCraft is where your digital dreams come to life. Innovation meets
        expertise as we craft exceptional online experiences that elevate your
        brand. WebCraft is where your digital dreams come to life. Innovation
        meets expertise as we craft exceptional online experiences that elevate
        your brand.
      </p>
    

      <div className=" flex-col xl:flex-row relative h-auto xl:h-[590px] bg-transparent xl:bg-secondary mx-4 mt-[2rem] md:mt-[4.85rem] flex py-[3rem] px-[1.2rem] xs:px-[3.2rem] gap-8 rounded-[10px]">
      <div className="flex flex-col md:flex-row md:bg-secondary xl:bg-transparent md:py-[3rem] md:px-[3.2rem] xl:py-0 xl:px-0 rounded-[10px] gap-8 md:h-[70vh] xl:h-auto">
          {planData.slice(0, 2).map((e: planDataType, i: number) => (
            <div key={i} className="flex flex-col justify-between  bg-secondary md:bg-transparent py-[2rem] px-[1.5rem] xs:py-[3rem] xs:px-[2.7rem] md:py-0 md:px-0 rounded-[10px] h-[70vh] md:h-auto gap-8">
              <div>
                <p className="text-background text-[36px] font-bold leading-[46px]">
                  {e.price}
                  <span className="text-[17px] text-[#979797] font-semibold leading-normal ">
                    /2 years
                  </span>
                </p>
                <div>
                  <h1 className="text-background text-[1.8rem] font-normal leading-[2.9rem] pt-[1.8rem]">
                    {e.plan}
                  </h1>
                  <p className="text-[1rem] font-normal leading-normal text-primary w-[232px]">
                    {e.planDescription}
                  </p>
                </div>
                {e.features.map((feature, i: number) => (
                  <div key={i} className="flex pt-[1.4rem]  gap-2">
                    <PlanCheck />
                    <p className=" text-background">{feature}</p>
                  </div>
                ))}
              </div>
              <button className=" text-center text-[1rem] hover:bg-background/90 duration-300 ease-in-out font-medium leading-normal rounded-[5px] w-full mx-0  xs:w-[278.339px] py-3  flex justify-center items-center bg-background">
                Choose plan
              </button>
            </div>
          ))}
        </div>

        {planData.slice(2, 3).map((e: planDataType, i: number) => (
          <div key={i} className="flex flex-col justify-between w-fit relative bg-background py-4 px-10 h-[600px]  shadow-planShadow xl:-top-28 mx-auto xl:-left-[1vw] rounded-[10px]  pb-10  text-white ">
            <span className=" rounded-md text-tertinary bg-[#979797]/30 py-1 px-2 text-[0.65rem] leading-normal self-end tracking-[0.833px] w-fit  ">MOST POPULAR</span>
            <div className="mb-20">
              <p className=" text-[36px] font-bold leading-[46px] text-white">
                {e.price}
                <span className="text-[17px] text-[#979797] font-semibold leading-normal ">
                  /2 years
                </span>
              </p>
              <div>
                <h1 className=" text-[1.8rem] font-normal leading-[2.9rem] pt-[1.8rem]">
                  {e.plan}
                </h1>
                <p className="text-[1rem] font-normal leading-normal  w-[232px]">
                  {e.planDescription}
                </p>
              </div>
              {e.features.map((feature, i: number) => (
                <div key={i} className="flex pt-[1.4rem]  gap-2">
                  <PlanCheck />
                  <p className="">{feature}</p>
                </div>
              ))}
            </div>
            <button className=" text-center text-[1rem] hover:bg-tertinary/90 hover:text-white duration-300 ease-in-out   font-medium leading-normal rounded-[5px] w-full mx-0  xs:w-[278.339px] py-3  flex justify-center items-center text-background bg-tertinary">
              Choose plan
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Plan;