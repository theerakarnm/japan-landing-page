import React from 'react'
import { ImageWithLazyFill } from '.'

type Props = {
  src: string
}

const Section3Item = ({ src }: Props) => {
  return (
    <div className='block relative lg:w-[32rem] lg:h-[22rem] md:w-[27rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[12rem]'>
      <ImageWithLazyFill css="object-contain relative h-[unset]" source={src} />
    </div>
  )
}

export default Section3Item