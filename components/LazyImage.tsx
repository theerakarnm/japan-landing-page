import React from 'react'
import Image from 'next/image'

type Props = {
  w: string | number
  h: string | number
  source: string
  layout?: "intrinsic" | "fill" | "responsive" | "responsive" | "fixed"
}

const ImageWithLazy = ({ w, h, source, layout }: Props) => {
  const sourceName = source.split('/')[source.split('/').length - 1]
  // typeof layout === 'undefined' ? layout = 'intrinsic' : layout = layout
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
       {/* <img
      alt={`this is image of ${sourceName}`} 
      src={source}
      // placeholder="blur"
      width={w} 
      height={h}
      /> */}
    </>
  )
}

export default ImageWithLazy