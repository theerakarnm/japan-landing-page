import React from "react";
import Link from "next/link";
import { ImageWithLazyFill } from ".";

type Props = {
  src: string;
  to: string;
  noLink?: boolean;
  size : string
};

const Section3Item = ({ src, to, noLink, size }: Props) => {
  if (noLink) {
    return (
      <div className={`block relative ${size} mx-12`}>
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
        <div className={`block relative ${size} mx-12`}>
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
