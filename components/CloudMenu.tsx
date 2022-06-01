import React from 'react'
import { LazyImage } from './'

type Props = {
  src: string
  content: string
  content2: string
}

const CloudMenu = ({ src, content, content2 }: Props) => {
  return (
    <>
      <div className={`absolute w-[220px] h-[165px]`}>
        <div className='flex justify-end'>
          <LazyImage source={src} w={200} h={100} />
        </div>
        <div className='absolute bottom-0 left-0'>
          <p className='font-semibold text-3xl'>{content}</p>
          <p className='font-normal text-lg'>{content2}</p>
        </div>
      </div>
    </>
  )
}

export default CloudMenu