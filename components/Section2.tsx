import React from 'react'
import { ImageWithLazyFill, ImageWithLazyFill2 } from './'

type Props = {}

const Section2 = (props: Props) => {
  return (
    <>
      <div>
        <div className="block w-[100%] h-full relative">
          <img src="/images/waragamoset4K.png" alt="waragamoset image" />
          <div className='hidden lg:block'>
            <div className='absolute w-[100%] h-[9rem] z-10 bottom-0'>
              <ImageWithLazyFill source='/svg/wave.svg' />
            </div>
            <div className='absolute w-[100%] h-[9rem] z-10 bottom-0 blur-lg'>
              <ImageWithLazyFill source='/svg/wave.svg'  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2