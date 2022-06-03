import React from "react";
import { LazyImage } from "./";
import Link from "next/link";

type Props = {
  src: string;
  content: string;
  content2: string;
  link: string;
  spacial?: boolean;
};

const CloudMenu = ({ src, content, content2, link, spacial }: Props) => {
  let className
  let width
  let flexStyle
  if (!!spacial) {
    className = `absolute bottom-4 left-0`;
    width = `w-[14rem]`
    flexStyle = `justify-center`
  } else {
    className = `absolute bottom-5 left-0`;
    width = `w-[11rem]`
    flexStyle = `justify-end`
  }
  return (
    <>
      <Link href={link}>
        <a className="hover:text-[#3A7C4E] transition-all">
          <div className={`absolute ${width} h-[9.3rem]`}>
            <div className={`flex ${flexStyle}`}>
              <LazyImage source={src} w={140} h={60} />
            </div>
            <div className={className}>
              <p className="font-bold text-[1.6rem] leading-7">{content}</p>
              <p className="font-normal text-lg leading-8 text-[#3A7C4E]">{content2}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default CloudMenu;
