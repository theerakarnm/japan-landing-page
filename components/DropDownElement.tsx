import React from "react";
import { LazyImage, ImageWithLazyFill } from "./";
import Link from "next/link";

type Props = {
  src: string;
  context: string[];
  to: string;
};

const DropDownElement = ({ src, context, to }: Props) => {
  return (
    <Link href={to}>
      <a className="hover:text-[#3A7C4E] transition-all">
        <div className="flex items-center my-5">
          <div className="block relative w-[4rem] h-[4.25rem] md:w-[6.25rem] md:h-[6.25rem] mx-6">
            <ImageWithLazyFill source={src} />
          </div>
          <div className="flex flex-col justify-center-items-center">
            <p className="font-semibold text-lg md:text-2xl">
              {context[0]}
            </p>
            <p className="font-normal text-sm md:text-md text-[#3A7C4E]">
              {context[1]}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default DropDownElement;
