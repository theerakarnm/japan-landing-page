import React from 'react';
// import Image from "next/image";

type Props = {
  source: string;
  css?: string;
};

const ImageWithLazyFill = ({ source, css }: Props) => {
  const sourceName = source.split('/')[source.split('/').length - 1];

  console.log(source);

  return (
    <>
      {/* <Image
        alt={`this is image of ${sourceName}`}
        className={css}
        src={source}
        layout={`fill`}
        placeholder="blur"
        blurDataURL={source}
        objectFit="cover"
      /> */}
      <div className='flex justify-center'>
        <img
          alt={`this is image of ${sourceName}`}
          className={`${css} `}
          src={source}
          // placeholder="blur"
        />
      </div>
    </>
  );
};

export default ImageWithLazyFill;
