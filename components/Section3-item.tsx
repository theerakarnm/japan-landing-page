import React from "react";
import Link from "next/link";
import { ImageWithLazyFill } from ".";

type Props = {
  src: string;
  to: string;
  noLink?: boolean;
};

const Section3Item = ({ src, to, noLink }: Props) => {
  if (noLink) {
    return (
      <div className="block relative lg:w-[32rem] lg:h-[22rem] md:w-[27rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[12rem]">
        <ImageWithLazyFill
          css="object-contain relative h-[unset]"
          source={src}
        />
      </div>
    );
  }
  return (
    <Link href={to}>
      <a>
        <div className="block relative lg:w-[32rem] lg:h-[22rem] md:w-[27rem] md:h-[17rem] sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[12rem]">
          <ImageWithLazyFill
            css="object-contain relative h-[unset]"
            source={src}
          />
        </div>
      </a>
    </Link>
  );
};

export default Section3Item;
