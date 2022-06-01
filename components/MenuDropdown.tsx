import React from 'react'
import { CloudMenu } from './'

type Props = {}

const MenuDropdown = (props: Props) => {
  return (
    <>
      <div className="my-4 p-6">
        <div className="grid grid-cols-12 gap-1">
          <div></div>
          <div className="col-span-2 my-3">img</div>
          <div className="col-span-9 my-3">conent</div>
          <div></div>
          <div className="col-span-2 my-3"></div>
          <div className="col-span-9 my-3">conent</div>
          <div></div>
          <div className="col-span-2 my-3"></div>
          <div className="col-span-9 my-3">conent</div>
          <div></div>
          <div className="col-span-2 my-3"></div>
          <div className="col-span-9 my-3">conent</div>
          <div></div>
          <div className="col-span-2 my-3">img</div>
          <div className="col-span-9 my-3">conent</div>
        </div>
      </div>
    </>
  )
}

export default MenuDropdown