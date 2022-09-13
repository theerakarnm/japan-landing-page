import React from "react";
import { LazyImage, ImageWithLazyFill } from "./";
import Link from "next/link";

type Props = {
  src: string;
  context: string[];
  to: string;
  size: string;
  margin: string;
};

const DropDownElement = ({ src, context, to, size, margin }: Props) => {
  return (
    <Link href={to}>
      <a className="hover:text-[#3A7C4E] transition-all">
        <div className="flex items-center my-5">
          <div className={`block relative ${size} mx-6`}>
            <ImageWithLazyFill source={src} />
          </div>
          <div
            className={`flex flex-col justify-center-items-center ${margin}`}
          >
            <p className="font-semibold text-lg md:text-2xl">{context[0]}</p>
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
