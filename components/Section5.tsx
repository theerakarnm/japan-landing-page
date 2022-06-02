import React from "react";
import { WhatNewElem, Map, SocialMediaLink } from "./";

type Props = {};

const Section5 = (props: Props) => {
  const contentWhatNew = [
    {
      title: "新品",
      content: "新品のお知らせ",
    },
    {
      title: "新品",
      content: "新品のお知らせ",
    },
    {
      title: "新品",
      content: "新品のお知らせ",
    },
  ];
  return (
    <>
      <div className="my-10 container mx-auto p-4">
        <h1 className="text-3xl md:text-[2.3rem] font-bold text-center">{`What's New`}</h1>
        <div className="mt-3">
          {contentWhatNew.map((data, index) => {
            return <WhatNewElem key={index} data={data} />;
          })}
        </div>
      </div>
      <div>
        <div className="block w-[100%] h-full relative">
          <img
            className="w-[100%]"
            src="/images/Location.jpg"
            alt="detail food image"
          />
        </div>
      </div>
      <Map/>
      <div className="flex justify-center my-6">
        <SocialMediaLink/>
      </div>
    </>
  );
};

export default Section5;
