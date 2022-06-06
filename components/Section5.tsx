import React from "react";
import { WhatNewElem, Map, SocialMediaLink, LazyImage,ImageWithLazyFill } from "./";
import Link from "next/link";
import { content } from "../configs/whatNewContent";

type Props = {
  noBusiness? : boolean
};

const Comp = () => {
  return (
    <> 
    <div>
        <div className="block w-[100%] h-full relative">
          <img
            className="w-[100%]"
            src="/images/section-bb.png"
            alt="detail food image"
          />
        </div>
      </div>
      <Map />
      <div className="flex justify-center my-6">
        <div className="lg:hidden">
          <div className="w-[4rem] h-[7rem] block relative mt-2">
            <Link href="/">
              <a>
                <ImageWithLazyFill source="/images/logo.png" />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <SocialMediaLink isCol />
        </div>
      </div>
    </>
  )
}

const Section5 = ({ noBusiness }: Props) => {
  return (
    <>
      <div className="my-10 container mx-auto p-4">
        {/* <h1 className="text-3xl md:text-[2.3rem] font-bold text-center">{`What's New`}</h1> */}
        <div className="flex justify-center">
          <LazyImage source="/images/WhatNewLogo.png" w={300} h={205} />
        </div>
        <div className="mt-3">
          {content.map((data, index) => {
            return <WhatNewElem key={index} data={data} />;
          })}
        </div>
      </div>
      {!noBusiness && <Comp/>}
    </>
  );
};

export default Section5;
