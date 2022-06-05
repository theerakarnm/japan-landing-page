import React from "react";
import Link from "next/link";
import { NewContent } from '../configs/whatNewContent'

type Props = {
  data: NewContent;
};

const WhatNewElem = ({ data }: Props) => {
  return (
    <Link href={`/WhatNewPage/${data.id}`} className="hover:text-[#3A7C4E]">
      <a>
        <div className="border-b-2 border-dotted border-[#3A7C4E] my-5 py-2">
          <h1 className="text-xl md:text-[1.9rem] font-bold text-[#3A7C4E] mb-2">
            {data.title}
          </h1>
          <p className="font-normal text-gray-600 text:sm md:text-md">
            {data.description}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default WhatNewElem;
