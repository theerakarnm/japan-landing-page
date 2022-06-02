import React from 'react'
import { LazyImage } from './'
import Link from 'next/link'

type Props = {
  src: string
  context: string[]
  to : string
}

const DropDownElement = ({ src, context, to }: Props) => {
  return (
    <Link href={to}>
      <a>
        <div className="flex items-center my-3">
          <div className="flex justify-center-items-center mx-6">
            <LazyImage source={src} w={100} h={100} />
          </div>
          <div className="flex flex-col justify-center-items-center">
            <p className='font-semibold text-3xl'>{context[0]}</p>
            <p className='font-normal text-lg text-[#3A7C4E]'>{context[1]}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default DropDownElement