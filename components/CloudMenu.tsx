import React from 'react'
import { LazyImage } from './'
import Link from 'next/link'

type Props = {
  src: string
  content: string
  content2: string
  link: string
}

const CloudMenu = ({ src, content, content2, link }: Props) => {
  return (
    <>
      <Link href={link}>
        <a>
          <div className={`absolute w-[220px] h-[165px]`}>
            <div className='flex justify-end'>
              <LazyImage source={src} w={200} h={100} />
            </div>
            <div className='absolute bottom-0 left-0'>
              <p className='font-semibold text-3xl'>{content}</p>
              <p className='font-normal text-lg'>{content2}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default CloudMenu