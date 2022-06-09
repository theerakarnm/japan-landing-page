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
    "S__23814232",
    "S__23814234",
    "S__23814235",
    "S__23814236",
    "S__23814239",
    "S__23814240",
    "S__23814241",
    "S__23814243",
    "S__23814245",
    "S__23814246",
    "S__23814247",
    "S__23814251",
    "S__23814258",
    "S__23814261",
    "S__23814263",
    "S__23814266",
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {imageName.map((name, index) => {
          return (
            <div key={index}>
              {<SlideImage src={`/images/slide_image/${name}.jpg`} />}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickCaro;
