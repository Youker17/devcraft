import check from '@/assets/features-icons/search.gif'
import Image from 'next/image'

function Feature() {
  return (
    <div className='flex-col justify-center items-center gap-[21px] flex mx-auto   '>
      <div className=' bg-primary shadow-3xl shadow-buttonShadow  shadow-primary w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] flex justify-center items-center rounded-lg '>
        <Image className='mix-blend-multiply ' width={80} height={80} src={check.src} alt='check' />
      </div>
      <h2 className=' text-primary font-bold leading-normal tracking-[0.3px] text-[15px] sm:text-[20px]'>Responsive Design</h2>
      <p className=' text-center text-[15px] sm:text-[20px] text-primary/40 font-medium tracking-[0.3px] leading-normal   md:w-[236px]'>We create websites that adapt seamlessly to various screen sizes.</p>
    </div>
  )
}

export default Feature