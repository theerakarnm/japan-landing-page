import React from 'react'
import { CloudMenu } from './'

type Props = {}

const MenuDropdown = (props: Props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div className='cursor-pointer w-[220px] h-[180px] mx-2'>
          <CloudMenu link="#" src='/images/cloud-1.png' content='こだわり' content2='Excursive' />
        </div>
        <div className='cursor-pointer w-[220px] h-[180px] mx-2 mt-0 lg:mt-[8rem]'>
          <CloudMenu link="#" src='/images/cloud-2.png' content='こだわり' content2='Excursive' />
        </div>
        <div className='cursor-pointer w-[220px] h-[180px] mx-2'>
          <CloudMenu link="#" src='/images/cloud-3.png' content='こだわり' content2='Excursive' />
        </div>
        <div className='cursor-pointer w-[220px] h-[180px] mx-2 mt-0 lg:mt-[8rem]'>
          <CloudMenu link="#" src='/images/cloud-4.png' content='こだわり' content2='Excursive' />
        </div>
        <div className='cursor-pointer w-[220px] h-[180px] mx-2'>
          <CloudMenu link="#" src='/images/cloud-5.png' content='こだわり' content2='Excursive' />
        </div>
      </div>
    </>
  )
}

export default MenuDropdown