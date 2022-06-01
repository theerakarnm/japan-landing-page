import React from 'react'
import Image from 'next/image';

type Props = {
  w: string | number
  h: string | number
  source: string
}

const ImageWithLazy = ({ w, h, source }: Props) => {
  const sourceName = source.split('/')[source.split('/').length - 1]
  return (
    <>
      <Image 
      alt={`this is image of ${sourceName}`} 
      src={source} 
      width={w} 
      height={h}
      placeholder="blur"
      blurDataURL={source} 
      />
    </>
  )
}

export default ImageWithLazy