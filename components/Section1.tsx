import React, { useState } from "react";
import { CloudMenu } from './'
import { LazyImage, ImageWithLazyFill, MenuDropdown } from "../components";

type Props = {};

const Section1 = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <>
      <section className="w-full bg-section-1 pt-4 pb-16 h-auto">
        <nav className="flex justify-between items-start px-6">
          <div className="w-16 h-28 bg-slate-500">{/* TODO : LOGO */} <span className="text-white">LOGO</span></div>
          <div className="hidden xl:flex flex-col lg:flex-row  justify-center items-center lg:items-start mt-4">
            <div className='cursor-pointer w-[13.75rem] h-[11.25rem]'>
              <CloudMenu link="#" src='/images/cloud-1.png' content='こだわり' content2='Excursive' />
            </div>
            <div className='cursor-pointer w-[13.75rem] h-[11.25rem] mt-0 lg:mt-[6rem]'>
              <CloudMenu link="#" src='/images/cloud-2.png' content='お食事' content2='Food Menu' />
            </div>
            <div className='cursor-pointer w-[13.75rem] h-[11.25rem]'>
              <CloudMenu link="#" src='/images/cloud-3.png' content='お飲み物' content2='Drinks' />
            </div>
            <div className='cursor-pointer w-[13.75rem] h-[11.25rem] mt-0 lg:mt-[6rem]'>
              <CloudMenu link="#" src='/images/cloud-4.png' content='お知らせ' content2='What ‘s new' />
            </div>
            <div className='cursor-pointer w-[13.75rem] h-[11.25rem]'>
              <CloudMenu link="#" src='/images/cloud-5.png' content='営業時間/アクセス' content2='Business Hours/Access' />
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="cursor-pointer">
              <a href="tel:0631236001" className="cursor-pointer">
                <div className="cursor-pointer w-14 h-14 hover:w-16 hover:h-16 transition-all rounded-full bg-[#26809d] mx-1 flex justify-center items-center">
                  <LazyImage
                    w={`30px`}
                    h={`30px`}
                    source={`/images/icons8-ringer-volume-90.png`}
                  />
                </div>
              </a>
            </div>
            <div onClick={toggleNavbar} className="w-14 h-14 hover:w-16 hover:h-16 cursor-pointer transition-all rounded-full bg-red-400 mx-1 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={24}
                height={24}
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth={1}
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit={10}
                  strokeDasharray={1}
                  strokeDashoffset={0}
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <path d="M0,172v-172h172v172z" fill="none" />
                  <g fill="#ffffff">
                    <path d="M14.33333,35.83333v14.33333h143.33333v-14.33333zM14.33333,78.83333v14.33333h143.33333v-14.33333zM14.33333,121.83333v14.33333h143.33333v-14.33333z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </nav>
        <div style={isNavOpen ? { display: "block" } : { display: "none" }} className={`bg-white w-[100vw] h-auto py-4 px-6 absolute z-10 top-0`}>
          <div className="flex justify-between items-center px-6">
            <div className="w-16 h-28 bg-slate-500">{/* TODO : LOGO */} <span className="text-white">LOGO</span></div>
            <div className="flex justify-center items-center">
              <div className="cursor-pointer">
                <a href="tel:0631236001" className="cursor-pointer">
                  <div className="cursor-pointer w-14 h-14 hover:w-16 hover:h-16 transition-all rounded-full bg-[#26809d] mx-1 flex justify-center items-center">
                    <LazyImage
                      w={`30px`}
                      h={`30px`}
                      source={`/images/icons8-ringer-volume-90.png`}
                    />
                  </div>
                </a>
              </div>
              <div onClick={toggleNavbar} className='cursor-pointer hover:w-16 hover:h-16 transition-all w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full'>
                <span className='text-2xl text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={20} height={20} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray={1} strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M40.13333,22.93333c-1.46702,0 -2.93565,0.55882 -4.05365,1.67969l-11.46667,11.46667c-2.24173,2.24173 -2.24173,5.87129 0,8.10729l41.81302,41.81302l-41.81302,41.81302c-2.24173,2.24173 -2.24173,5.87129 0,8.10729l11.46667,11.46667c2.24173,2.24173 5.87129,2.24173 8.10729,0l41.81302,-41.81302l41.81302,41.81302c2.236,2.24173 5.87129,2.24173 8.10729,0l11.46667,-11.46667c2.24173,-2.24173 2.24173,-5.87129 0,-8.10729l-41.81302,-41.81302l41.81302,-41.81302c2.24173,-2.236 2.24173,-5.87129 0,-8.10729l-11.46667,-11.46667c-2.24173,-2.24173 -5.87129,-2.24173 -8.10729,0l-41.81302,41.81302l-41.81302,-41.81302c-1.12087,-1.12087 -2.58663,-1.67969 -4.05365,-1.67969z" /></g></g></svg>
                </span>
              </div>
            </div>
          </div>
          <MenuDropdown />
        </div>
        <section className="w-full h-auto">
          <div className="flex justify-center items-center ">
            <div className="block w-[100vw] h-[66.66vh] relative">
              <ImageWithLazyFill
                css="object-contain relative h-[unset]"
                source={`/images/833 tran.png`}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Section1;
