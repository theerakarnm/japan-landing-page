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

        <div className="container mx-auto px-4 text-[#3A7C4E]">
          <h1 className="font-bold mb-2 text-[1.4rem]">Wargamo</h1>
          <p>
            Waragamo offers innovative duck cuisine with a variety of duck
            dishes. We source highest-grade domestic ducks such as Iwate and
            Kyoto Ducks, chemical-free vegetables from a renowned farm in
            Tochigi, and vegetables direct from Kyoto . Our best recommendation
            is the exquisite Grilled Kamo (Kamo-Thigh) with Japanese white
            spring onion, and Shabu-Shabu Hotpot with Rice Straw Smoked Kamo
            (Aromatic Duck). Kyoto spring onions with rice Straw Smoked
            Kamo-Thigh, Kamo-Loin, Kamo meatballs are innovative combinations of
            the ingredients that are only available here. We also pick popular
            Yamanashi Prefecture Japanese Traditional wines for your enjoyment.
            Waragamo is an attractive, sophisticated Japanese-modern space,
            including hideaway-like private rooms in the basement floor. Our
            restaurant is suited for diner party,dates,entertainment for your
            clients, business meals, and banquets.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section2;
