import React from "react";

interface ContentData {
  title: string;
  content: string;
}

type Props = {
  data: ContentData;
};

const WhatNewElem = ({ data }: Props) => {
  return (
    <div className="border-b-2 border-dotted border-[#3A7C4E] my-5 py-2">
      <h1 className="text-xl md:text-[1.9rem] font-bold text-[#3A7C4E] mb-2">{data.title}</h1>
      <p className="font-normal text-gray-600 text:sm md:text-md">{data.content}</p>
    </div>
  );
};

export default WhatNewElem;
