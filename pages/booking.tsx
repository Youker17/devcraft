import Form from '@/components/booking/Form'
import Slider from '@/components/booking/Slider'
import React from 'react'

function booking() {
  return (
    <div className='flex flex-col  xl:flex-row  pt-[140px] px-4 sm:px-10 md:px-24 '>
      <Slider />
      <Form />
    </div>
  )
}

export default booking