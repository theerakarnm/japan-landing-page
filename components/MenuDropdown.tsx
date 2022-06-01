import React from 'react'
import { CloudMenu } from './'

type Props = {}

const MenuDropdown = (props: Props) => {
  return (
    <>
      <div className="bg-white w-[100vw] h-auto py-4 px-6 absolute z-10 top-0">
        <div className="flex justify-around items-center">
          <div className='w-[220px] h-[160px]'>
            <CloudMenu src='/images/cloud-1.png' content='こだわり' content2='Excursive'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuDropdown