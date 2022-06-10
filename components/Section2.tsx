import React from "react";
import { ImageWithLazyFill } from "./";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <>
      <div>
        <div className="block w-[100%] h-full relative">
          <img src="/images/waragamoset4K.png" alt="waragamoset image" />
          <div className="hidden lg:block">
            <div className="absolute w-[100%] h-[14rem] z-5 bottom-0">
              <ImageWithLazyFill css="object-cover" source="/svg/wave.svg" />
            </div>
            <div className="absolute w-[100%] h-[14rem] z-5 bottom-0 blur-lg">
              <ImageWithLazyFill css="object-cover" source="/svg/wave.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
