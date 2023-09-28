import { PlanCheck, Web } from "@/assets/Icons";
import { planData } from "@/data/plans";
import { planDataType } from "@/types";

function Plan() {
  return (
    <div className="xl:h-[1212px] bg-primary w-full py-[65px] flex flex-col items-center ">
      <p className=" text-center text-sm md:text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-background">
        Plans
      </p>
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold leading-normal text-center text-background">
        Your Path to Success Starts with Our Plans
      </h1>
      <p className="lg:w-[1063px] mx-5 text-center text-background opacity-70 leading-normal pt-[63px] font-medium tracking-[0.36px]  pb-[70px] text-lg md:text-[24px]">
        WebCraft is where your digital dreams come to life. Innovation meets
        expertise as we craft exceptional online experiences that elevate your
        brand. WebCraft is where your digital dreams come to life. Innovation
        meets expertise as we craft exceptional online experiences that elevate
        your brand.
      </p>
      <div className=" bg-background w-[160px] py-3 relative rounded-[39px]">
        <p className="text-center font-semibold leading-normal text-[20px]">
          Web
        </p>
        <div className="absolute right-1 top-2 bg-tertinary w-[40px] h-[40px] rounded-full flex justify-center items-center">
          <Web />
        </div>
      </div>

      <div className=" flex-row  xl:w-[1128.961px] lg:h-[562.673px] bg-secondary mt-[141px] flex py-[48px] px-[53px] gap-8 rounded-[10px]">
        {planData.map((e:planDataType, i: number) => (
          <div key={i} className="w-2/6 flex flex-col justify-between">
            <div>
              <p className="text-background text-[36px] font-bold leading-[46px]">
                {e.price}
                <span className="text-[17px] font-semibold leading-normal text-primary">
                  /2 years
                </span>
              </p>
              <div>
                <h1 className="text-background text-[28px] font-normal leading-[46px] pt-[28px]">
                  {e.plan}
                </h1>
                <p className="text-[15px] font-normal leading-normal text-primary w-[232px]">
                  {e.planDescription}
                </p>
              </div>
              {e.features.map((feature, i: number) => (
                <div key={i} className="flex pt-[23px]  gap-2">
                  <PlanCheck />
                  <p className="text-primary">{feature}</p>
                </div>
              ))}
            </div>

            <button className=" text-center text-[15px] font-medium leading-normal rounded-[5px] w-[278.339px] h-[54.219px]  flex justify-center items-center bg-background">
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plan;
