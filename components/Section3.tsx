import React from 'react'
import { Section3Item } from './'

type Props = {}

const Section3 = (props: Props) => {
  const size = [
    'lg:w-[28rem] lg:h-[19.5rem] md:w-[27rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[12rem]',
    'lg:w-[32rem] lg:h-[23rem] md:w-[27rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[12rem]',
    'lg:w-[32rem] lg:h-[22rem] md:w-[27rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[12rem]',
    'lg:w-[32rem] lg:h-[22rem] md:w-[27rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[12rem]',
    'lg:w-[32rem] lg:h-[22rem] md:w-[27rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[12rem]',
  ]
  return (
    <>
      <div className='mt-4 mb-8'>
        <div className="flex flex-col justify-center items-center">
          <div className='flex justify-center items-start'>
            <Section3Item size={size[0]} noLink to='#' src='/images/無題904-menu.png'/>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Section3Item size={size[2]} to='#' src='/images/無題904-2.png'/>
            <Section3Item size={size[1]} to='#' src='/images/無題904-2-fix.png'/>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Section3Item size={size[4]} to='#' src='/images/無題904-3-fix.png'/>
            <Section3Item size={size[3]} to='#' src='/images/無題904-3.png'/>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Section3Item size={size[5]} to='#' src='/images/couresMenu2.png'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3
