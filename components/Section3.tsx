import React from 'react'
import { Section3Item } from './'

type Props = {}

const Section3 = (props: Props) => {
  return (
    <>
      <div className='my-4'>
        <div className="flex flex-col justify-center items-center">
          <div className='flex justify-center'>
            <Section3Item src='/images/無題904-menu.png'/>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Section3Item src='/images/無題904-1.png'/>
            <Section3Item src='/images/無題904-2.png'/>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Section3Item src='/images/無題904-3.png'/>
            <Section3Item src='/images/無題904-4.png'/>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Section3Item src='/images/couresMenu.png'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3
