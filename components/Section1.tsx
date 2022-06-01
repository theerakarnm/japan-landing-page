import React from 'react'
import { LazyImage } from '../components'

type Props = {}

const Section1 = (props: Props) => {
  return (
    <>
      <div className='w-full bg-section-1 py-6'>
        <div className="flex justify-between items-center px-8">
          <div className='w-14 h-24 bg-slate-500'>
            {/* TODO : LOGO */}
          </div>
          <div className="flex justify-around items-center">
            <div className='cursor-pointer'>
              <a href="tel:0631236001">
                <div className="cursor-pointer w-16 h-16 rounded-full bg-sky-500 mx-1 flex justify-center items-center">
                  <LazyImage w={`40px`} h={`40px`} source={`/images/icons8-ringer-volume-90.png`}/>
                </div>
              </a>
            </div>
            <div className="w-16 h-16 rounded-full bg-red-400 mx-1 flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  ) 
}  
 
export default Section1