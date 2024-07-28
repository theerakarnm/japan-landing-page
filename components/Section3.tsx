import React from 'react';
import { Section3Item } from './';
import { PREFIX } from '../configs/seo_config';

type Props = {};

const Section3 = (props: Props) => {
  const size = [
    'lg:w-[19.5rem] lg:h-[19.5rem] md:w-[17rem] md:h-[17rem] sm:w-[15rem] sm:h-[15rem] w-[12rem] h-[12rem]',
    'lg:w-[22rem] lg:h-[23rem] md:w-[17rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[15rem] h-[12rem]', // shabu
    'lg:w-[22rem] lg:h-[22rem] md:w-[17rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[15rem] h-[12rem]', // grill
    'lg:w-[21rem] lg:h-[21rem] md:w-[17rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[15rem] h-[12rem]', // drink
    'lg:w-[22rem] lg:h-[22rem] md:w-[17rem] md:h-[17rem] sm:w-[26rem] sm:h-[15rem] w-[15rem] h-[12rem]', // recommend
    'lg:w-[22rem] lg:h-[22rem] md:w-[17rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[15rem] h-[12rem]', // course menu
  ];
  return (
    <>
      <div className='mt-4 mb-8'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-start'>
            <Section3Item
              size={size[0]}
              noLink
              to='#'
              src={`${PREFIX}/904-menu.png`}
            />
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <Section3Item
              size={size[2]}
              to='/FoodMenu'
              src={`${PREFIX}/904-2.png`}
            />
            <Section3Item
              size={size[1]}
              to='/FoodMenu'
              src={`${PREFIX}/904-2-fix.png`}
            />
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <Section3Item
              size={size[4]}
              to='/Recommend'
              src={`${PREFIX}/904-3-fix.png`}
            />
            <Section3Item
              size={size[3]}
              to='/Drink'
              src={`${PREFIX}/904-drink-fixed.png`}
            />
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <Section3Item
              size={size[5]}
              to='/FoodMenu'
              src={`${PREFIX}/couresMenu2.png`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
