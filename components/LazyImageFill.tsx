import React from "react";
import Image from 'next/image'

type Props = {
  source: string;
  css?: string;
};

const ImageWithLazyFill = ({ source, css }: Props) => {
  const sourceName = source.split("/")[source.split("/").length - 1];
  return (
    <>
      <Image
        alt={`this is image of ${sourceName}`}
        className={css}
        src={source}
        layout={`fill`}
        placeholder="blur"
        blurDataURL={source}
        objectFit="cover"
      />
      {/* <img
      alt={`this is image of ${sourceName}`} 
      className={`${css} w-full h-full absolute object-contain top-0 left-0`}
      src={source}
      // placeholder="blur"
      /> */}
    </>
  );
};

export default ImageWithLazyFill;
