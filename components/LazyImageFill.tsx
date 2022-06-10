import React from 'react'

type Props = {
  source: string
  css?: string
}

const ImageWithLazyFill = ({ source,css }: Props) => {
  const sourceName = source.split('/')[source.split('/').length - 1]
  return (
    <>
      <img
      alt={`this is image of ${sourceName}`} 
      className={`${css} w-full h-full absolute top-0 left-0`}
      src={source}
      // placeholder="blur"
      />
    </>
  )
}

export default ImageWithLazyFill