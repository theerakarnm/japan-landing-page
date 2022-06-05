import React from "react";
import Link from "next/link";

type Props = {
  isCol?: boolean;
};

const SocialMediaLink = ({ isCol }: Props) => {
  // TODO: Add social media links

  let col = ''

  if(isCol) {
    col = 'lg:flex-row flex-col'
  }
  return (
    <div className={`flex ${col}`}>
      <div className="mx-1">
        <Link href="https://facebook.com/waragamo/" target={`_blank`} rel="noopener noreferrer">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={50}
              height={50}
              viewBox="0 0 172 172"
              style={{ fill: "#000000" }}
            >
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray={1}
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none" />
                <g fill="#000000">
                  <path d="M137.6,22.93333h-103.2c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v103.2c0,6.33533 5.13133,11.46667 11.46667,11.46667h57.33333v-51.6h-17.2v-17.2h17.2v-9.2364c0,-17.48667 8.51973,-25.1636 23.05373,-25.1636c6.96027,0 10.64107,0.516 12.384,0.75107v16.44893h-9.91293c-6.16907,0 -8.3248,3.25653 -8.3248,9.84987v7.35013h18.08293l-2.45387,17.2h-15.62907v51.6h28.66667c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-103.2c0,-6.33533 -5.13707,-11.46667 -11.46667,-11.46667z" />
                </g>
              </g>
            </svg>
          </a>
        </Link>
      </div>
      <div className="mx-1">
        <Link href="https://instagram.com/waragamo" target={`_blank`} rel="noopener noreferrer">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={50}
              height={50}
              viewBox="0 0 30 30"
              style={{ fill: "#000000" }}
            >
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaLink;
