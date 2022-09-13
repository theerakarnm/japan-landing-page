import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { SlideImage } from "./";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const SlickCaro = (props: Props) => {
  const [wid, setWid] = useState<number | null>(null);

  useEffect(() => {
    setWid(window.innerWidth);
  }, []);

  let row = 1;

  if (wid !== null) {
    if (wid < 768) {
      row = 1;
    } else if (wid < 1024) {
      row = 2;
    } else {
      row = 3;
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3500,
    slidesPerRow: row,
  };

  const imageName = [
    "S__23994507",
    "S__23994509",
    "S__23994510",
    "S__23994512",
    "S__23994513",
    "S__23994514",
    "S__23994515",
    "S__23994516",
    "S__23994517",
    "S__23994520",
    "S__23994521",
    "S__23994597",
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {imageName.map((name, index) => {
          return (
            <div key={index}>
              <div>
                {<SlideImage src={`/images/slide_image/${name}.jpg`} />}
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="container mx-auto px-4 my-10 text-[#3A7C4E]">
        <h1 className="font-bold mb-1 text-[1.4rem]">{`ワラガモ（笑ウ鴨ニハ福来ル)`}</h1>
        <p>
          〜世界でここだけ！？藁焼き鴨しゃぶ酒場！！〜
          都内では珍しい、鴨を存分に楽しみ尽くす店！
          まずは、レアでお召し上がり頂けるほどの上質な鴨肉を、産地直送ネギと一緒に鉄鍋で焼く、名物「鴨ネギ焼き」！
          そして鴨の脂と旨味が残っている鉄鍋に、特製出汁を注いで頂くメインの「藁燻（わらくん）鴨しゃぶ」！店頭の窯で藁と一緒に燻製した鴨肉は絶品！！山盛り九条ネギと白葱、特製鴨つくねが、脇役にして主役のオールスター鍋です。
          〆には、鴨の旨味が詰まった出汁で頂く「雑炊・ラーメン・そば」をご用意。最後の一滴まで、どうぞ心ゆくまで鴨をご堪能下さい！
          その他にも鴨を使った一品料理がたくさんで、酒のあてに迷うほど。
          JR吉祥寺駅から徒歩5分、極上の鴨体験を、都心よりもリーズナブルなお値段でお楽しみ頂けます。
          地下にはお座敷もあるので小さいお子様連れの方にも大人気♩
          吉祥寺ワラガモ、皆様のご来店を心よりお待ち申し上げております。
        </p>
      </div>
    </div>
  );
};

export default SlickCaro;
