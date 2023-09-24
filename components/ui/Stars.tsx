import { Star } from '@/assets/Icons'
import React from 'react'
import { twMerge } from 'tailwind-merge'


interface StarsInterface {
    containerStyle:string,
    bigStarStyle:string,
    topLeftStarStyle:string,
    bottomLeftStarStyle:string;
}




const Stars:React.FC<StarsInterface> = ({containerStyle,bigStarStyle,topLeftStarStyle,bottomLeftStarStyle}) => {
  return (
  <div className={twMerge("",containerStyle)}>
      <div className='relative '>
           <Star style={bigStarStyle} />
           <Star style={topLeftStarStyle} />
           <Star style={bottomLeftStarStyle} />
    </div>
  </div>
  )
}

export default Stars