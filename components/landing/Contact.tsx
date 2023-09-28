import contact__img from "@/assets/contact__img.png";
import { contactData } from "@/data/contact";
import { ContactDataType, ContactInfo } from "@/types";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Input from "../ui/Input";
import Stars from "../ui/Stars";

function Contact() {
  const [val, setVal] = useState<ContactInfo>({
    name: "",
    email: "",
    msj: "",
  });

  // eslint-disable-next-line no-unused-vars
  const InputHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void = (e) => {
    const { name, value } = e.target as HTMLButtonElement;
    setVal({ ...val, [name]: value });
  };

  return (
    <div className="py-[153px] w-full flex flex-col justify-center items-center relative">
      <p className=" text-center text-sm md:text-[16px] font-normal  leading-normal uppercase tracking-[0.48px] text-primary">
        REACH OUT
      </p>
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold leading-normal text-center">
        Connect with us today
      </h1>
      <Stars
        containerStyle="hidden lg:flex absolute top-36  right-48"
        bigStarStyle=" left-0 w-[71px] h-[92.548px] animate-bounce"
        topLeftStarStyle="w-[20.655px] h-[24.459px] top-0 absolute animate-bounce"
        bottomLeftStarStyle="hidden"
      />
      <p className="lg:w-[1063px] mx-5 text-center text-primary opacity-70 leading-normal pt-[63px] font-medium tracking-[0.36px]  pb-[70px] text-lg md:text-[24px]">
        WebCraft is where your digital dreams come to life. Innovation meets
        expertise as we craft exceptional online experiences that elevate your
        brand. WebCraft is where your digital dreams come to life. Innovation
        meets expertise as we craft exceptional online experiences that elevate
        your brand.
      </p>

      <div className="flex w-full px-[30px] sm:px-[70px] xl:px-[103px] mb-[103px] gap-6  lg:flex-row flex-col-reverse">
        <div className="lg:w-3/6 relative flex justify-center  items-center lg:justify-start lg:items-end pb-8 sm:pl-3 xl:pl-8 xs:h-[468px] lg:h-auto">
          <Image
            src={contact__img}
            alt="contact_img"
            className="w-full h-full absolute top-0 left-0 "
            draggable="false"
          />
          <div className="w-auto xs:w-[370px] sm:w-[400px] mt-7 h-auto xl:w-[411px] lg:h-3/6 mx-2  xs:mx-auto lg:mx-px bg-primary/25 gap-y-[30px] flex flex-col  backdrop-blur-md rounded-md py-[25px]  lg:py-4 px-4">
            {contactData.map((e: ContactDataType, i: number) => (
              <div key={i} className="flex  gap-6  xs:gap-10 items-center">
                 <e.icon />
                <p className="text-[14px] xs:text-[18px] text-background  font-bold  leading-normal tracking-[0.27px]">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col justify-end">
          <Input
            onChange={InputHandler}
            type="text"
            name="name"
            placeholder=""
            className=" px-5  h-[50px] md:px-9 rounded-[5px] border-2 border-black w-full bg-primary/20"
            label="Full Name"
            inputContainerStyle="pb-[26px]"
          />
          <Input
            onChange={InputHandler}
            type="text"
            name="name"
            placeholder=""
            className=" h-[50px] px-5 md:px-9 rounded-[5px] border-2 border-black bg-primary/20 w-full"
            label="Email"
            inputContainerStyle="pb-[26px]"

          />
          <div className=" w-full">
            <label className="text-[20px]  font-semibold leading-[144.5%] tracking-[0.3px] text-white   ">Message</label>
            <textarea
              name="message"
              placeholder=""
              onChange={InputHandler}
              className=" overflow-hidden resize-none bg-primary/20  pb-56 px-9 mt-6 pt-4 rounded-[5px] border-2 border-black w-full  "
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
