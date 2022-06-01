import React from 'react'
import Image from 'next/image';

type Props = {
  source: string
  css?: string
}

const ImageWithLazyFill = ({ source,css }: Props) => {
  const sourceName = source.split('/')[source.split('/').length - 1]
  return (
    <>
      <Image 
      alt={`this is image of ${sourceName}`} 
      className={css}
      src={source} 
      layout={`fill`}
      placeholder="blur"
      blurDataURL={source} 
      objectFit="cover"
      />
    </>
  )
}

export default ImageWithLazyFill