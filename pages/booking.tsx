import img__effect from "@/assets/dedring1.png";
import hero__img from "@/assets/gradient.png";
import Form from '@/components/booking/Form';
import Slider from '@/components/booking/Slider';
import Image from 'next/image';

function booking() {
  return (
    <div className=''>
      <Image
        src={hero__img}
        className="w-full h-full absolute -z-10"
        alt="hero__img"
        draggable={false}
      />
      <Image
        src={img__effect}
        className="w-full h-[800px] opacity-30 absolute -z-20"
        alt="hero__img"
        draggable={false}
      />
      <div className=' pt-[140px] px-4 sm:px-10 md:px-24 z-10 flex flex-col  xl:flex-row'>

        <Slider />
        <Form />
      </div>
    </div>
  )
}

export default booking