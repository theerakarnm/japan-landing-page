import React from 'react';
import { ImageWithLazyFill } from './';

type Props = {
  src: string;
};

const SlideImage = ({ src }: Props) => {
  return (
    <div className='flex justify-center items-center '>
      <div className='block w-[100vw] h-full xl:mt-20 relative'>
        <ImageWithLazyFill
          css='object-contain relative h-[20rem] md:h-[30rem]'
          source={`${src}`}
        />
      </div>
    </div>
  );
};

export default SlideImage;
