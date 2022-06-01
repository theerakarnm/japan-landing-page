import React from 'react'
import { ImageWithLazyFill } from './'

type Props = {}

const Section2 = (props: Props) => {
  return (
    <>
      <div>
        <div className="block w-[100%] h-[26vh] sm:h-[43vh] md:h-[42.5vh] lg:h-[47.5vh] xl:h-[80vh] desktop:h-[95vh] desktop-xl:h-[120vh] relative">
          <ImageWithLazyFill source='/images/waragamoset4K.png' css="relative h-[unset] object-cover" />
          <div className='hidden lg:block'>
            <div className='absolute w-[100%] h-[9rem] z-10 bottom-0 blur-sm'>
              <ImageWithLazyFill source='/svg/wave.svg' />
            </div>
            <div className='absolute w-[100%] h-[9rem] z-10 bottom-0 blur-lg'>
              <ImageWithLazyFill source='/svg/wave.svg' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2