import React, { useState } from "react";
import { CloudMenu } from "./";
import { LazyImage, ImageWithLazyFill, MenuDropdown } from "../components";

type Props = {};

const MiniPage = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number | string>("h-[0px]");

  const toggleNavbar = () => {
    if (!isNavOpen) {
      document.body.style.overflow = "hidden";
      setIsNavOpen(!isNavOpen);
      setTimeout(() => {
        setHeight("h-[100vh] py-4");
      }, 50);
    } else {
      document.body.style.overflow = "auto";
      setHeight("h-[0px] py-0");
      setTimeout(() => {
        setIsNavOpen(!isNavOpen);
      }, 300);
    }
  };
  return (
    <>
      <section className="w-full bg-section-1 pt-4 pb-16 h-auto">
        <nav className="flex justify-between items-start px-6">
          <div className="block relative w-[7rem] h-[10rem] mt-2 ml-2">
            {/* TODO : LOGO <span className="text-white">LOGO</span> */}
            <ImageWithLazyFill source="/images/logo.png" />
          </div>
          <div className="hidden xl:flex flex-col lg:flex-row justify-center items-center lg:items-start mt-4 fixed w-full z-[6]"></div>
          <div className="flex justify-end items-center z-[9]">
            <div className="cursor-pointer md:block hidden">
              <a
                href="https://s.tabelog.com/tokyo/A1320/A132001/13187638/"
                className="cursor-pointer"
              >
                <div className="cursor-pointer w-[6rem] h-[3rem] rounded transition-all bg-teal-500 hover:bg-teal-600 hover:shadow-lg mx-1 flex justify-center items-center">
                  <span className="font-bold text-white">WEB予約</span>
                </div>
              </a>
            </div>
            <div className="cursor-pointer">
              <a href="tel:0422249383" className="cursor-pointer">
                <div className="cursor-pointer w-14 h-14 hover:w-16 hover:h-16 transition-all rounded-full bg-[#26809d] mx-1 flex justify-center items-center">
                  <LazyImage
                    w={`30px`}
                    h={`30px`}
                    source={`/images/icons8-ringer-volume-90.png`}
                  />
                </div>
              </a>
            </div>
            <div
              onClick={toggleNavbar}
              className="w-14 h-14 hover:w-16 hover:h-16 cursor-pointer transition-all rounded-full bg-red-400 mx-1 flex justify-center items-center"
            >
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
        <div
          style={isNavOpen ? { display: "block" } : { display: "none" }}
          className={`w-[100vw]  px-6 fixed z-10 top-0 bg-white transition-all overflow-auto ${height}`}
        >
          <div className="flex justify-between items-center px-6">
            <div className="w-[7rem] h-[10rem] block relative mt-2">
              <ImageWithLazyFill source="/images/logo.png" />
            </div>
            <div className="flex justify-center items-center">
              <div className="cursor-pointer">
                <a href="tel:0422249383" className="cursor-pointer">
                  <div className="cursor-pointer w-14 h-14 hover:w-16 hover:h-16 transition-all rounded-full bg-[#26809d] mx-1 flex justify-center items-center">
                    <LazyImage
                      w={`30px`}
                      h={`30px`}
                      source={`/images/icons8-ringer-volume-90.png`}
                    />
                  </div>
                </a>
              </div>
              <div
                onClick={toggleNavbar}
                className="cursor-pointer hover:w-16 hover:h-16 transition-all w-14 h-14 bg-slate-500 flex justify-center items-center rounded-full"
              >
                <span className="text-2xl text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={20}
                    height={20}
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
                        <path d="M40.13333,22.93333c-1.46702,0 -2.93565,0.55882 -4.05365,1.67969l-11.46667,11.46667c-2.24173,2.24173 -2.24173,5.87129 0,8.10729l41.81302,41.81302l-41.81302,41.81302c-2.24173,2.24173 -2.24173,5.87129 0,8.10729l11.46667,11.46667c2.24173,2.24173 5.87129,2.24173 8.10729,0l41.81302,-41.81302l41.81302,41.81302c2.236,2.24173 5.87129,2.24173 8.10729,0l11.46667,-11.46667c2.24173,-2.24173 2.24173,-5.87129 0,-8.10729l-41.81302,-41.81302l41.81302,-41.81302c2.24173,-2.236 2.24173,-5.87129 0,-8.10729l-11.46667,-11.46667c-2.24173,-2.24173 -5.87129,-2.24173 -8.10729,0l-41.81302,41.81302l-41.81302,-41.81302c-1.12087,-1.12087 -2.58663,-1.67969 -4.05365,-1.67969z" />
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <MenuDropdown />
        </div>
        <section className="w-full h-auto">
          <div className="flex justify-center items-center">
            <div className="block w-[15rem] h-[12rem] relative">
              <ImageWithLazyFill
                css="object-contain relative h-[unset]"
                source={`/images/MenuDuckWithLetter-1.png`}
              />
            </div>
          </div>
          <div>
            <hr className="w-[80vw] h-[2px] mt-2 mb-10 bg-[#497556] mx-auto" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="block w-[80%] h-[40rem] relative">
              <ImageWithLazyFill
                css="object-contain relative h-[unset]"
                source={`/images/無題871.png`}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default MiniPage;
