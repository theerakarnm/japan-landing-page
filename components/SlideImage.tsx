import React from 'react'
import { ImageWithLazyFill } from './'

type Props = {
  src : string
}

const SlideImage = ({ src }: Props) => {
  return (
    <div className="flex justify-center items-center ">
            <div className="block w-[100vw] h-[43vh] xl:mt-20 relative">
              <ImageWithLazyFill
                css="object-contain relative h-[unset]"
                source={`${src}`}
              />
            </div>
          </div>
  )
}

export default SlideImage