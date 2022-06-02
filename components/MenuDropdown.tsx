import React from 'react'
import { DropDownElement, SocialMediaLink, LazyImage } from './'

type Props = {}

const MenuDropdown = (props: Props) => {
  return (
    <>
      <div className="my-16 p-6">
        <div className="flex flex-col justify-center items-start">
          <DropDownElement to="#" src='/images/MenuDuck-1.png' context={['お知らせ','What ‘s new']}/>
          <DropDownElement to="#" src='/images/MenuDuck-2.png' context={['こだわり','Excursive']}/>
          <DropDownElement to="#" src='/images/MenuDuck-3.png' context={['お食事','Food Menu']}/>
          <DropDownElement to="#" src='/images/MenuDuck-4.png' context={['お飲み物','Drink']}/>
          <DropDownElement to="#" src='/images/MenuDuck-5.png' context={['営業時間/アクセス','Business Hours/Access']}/>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5">
          <SocialMediaLink/>
          <div className='flex flex-col justify-center items-center mx-6 my-4'>
            <LazyImage source='/images/MenuDuck-2.png' w={100} h={100}/>
            <h2 className='text-[#3A7C4E] font-semibold'>Some Text Here</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuDropdown