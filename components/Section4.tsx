import React from 'react';
import { PREFIX } from '../configs/seo_config';
type Props = {};

const Section4 = (props: Props) => {
  return (
    <>
      <div>
        <div className='block w-[100%] h-full relative'>
          <img
            className='w-[100%]'
            src={`${PREFIX}/section-4.png`}
            alt='detail food image'
          />
        </div>
      </div>
    </>
  );
};

export default Section4;
