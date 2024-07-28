import React from 'react';
import { ImageWithLazyFill } from './';
import { PREFIX } from '../configs/seo_config';

type Props = {};

const Section2 = (props: Props) => {
  return (
    <>
      <div>
        <div className='block w-[100%] h-full relative'>
          <img
            src={`${PREFIX}/waragamoset4K.jpg`}
            alt='waragamoset image'
          />
          {/* <div className="hidden lg:block">
            <div className="absolute w-[100%] h-[14rem] z-5 bottom-0 xl:bottom-12">
              <ImageWithLazyFill css="object-cover" source="/svg/wave.svg" />
            </div>
            <div className="absolute w-[100%] h-[14rem] z-5 bottom-0 xl:bottom-12 blur-lg">
              <ImageWithLazyFill css="object-cover" source="/svg/wave.svg" />
            </div>
          </div> */}
        </div>

        <div className='container mx-auto px-4 mt-10 text-[#3A7C4E]'>
          <h1 className='font-bold mb-2 text-[1.4rem]'>Wargamo</h1>
          <p>
            Waragamo offers innovative duck cuisine with a variety of duck dishes. We source highest-grade domestic ducks such as Iwate and Kyoto ducks from a renowned farm in Tochigi, and chemical-free vegetables direct from Kyoto.Our best recommendation is the exquisite grilled Kamo (Kamo-Thigh)
            with Japanese white spring onion, and shabu-shabu hotpot with Kamo (smoked duck from rice straw ). Kyoto spring onions with smoked Kamo-thigh and Kamo-loin from rice straw, plus Kamo meatballs are innovative combinations of the ingredients that are only available here. We also pick
            popular Yamanashi Prefecture Japanese traditional wines for your enjoyment. Waragamo is an attractive, sophisticated Japanese-modern space, including hideaway-like private rooms on the basement floor. Our restaurant is suited for dinner parties, dates,entertainment for your clients,
            business meals, and banquets.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section2;
