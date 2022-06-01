import React, { useState } from "react";
import { LazyImage, ImageWithLazyFill, MenuDropdown } from "../components";

type Props = {};

const Section1 = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <>
      <section className="w-full bg-section-1 pt-4 pb-16 h-auto">
        <nav className="flex justify-between items-center px-6">
          <div className="w-14 h-24 bg-slate-500">{/* TODO : LOGO */}</div>
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
          <div onClick={toggleNavbar} className='absolute top-4 right-6 cursor-pointer'>
            <span className='text-2xl'>&#10006;</span>
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
