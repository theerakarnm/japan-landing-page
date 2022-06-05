import React from "react";
import Link from 'next/link'
import { DropDownElement, SocialMediaLink, LazyImage } from "./";

type Props = {};

const MenuDropdown = (props: Props) => {
  const dropDownContents = [
    {
      to: "/WhatNewPage",
      src: "/images/MenuDuck-1.png",
      context: ["お知らせ", "What's new"],
      size: "w-[5rem] h-[5.25rem] md:w-[8rem] md:h-[8rem]",
      margin : 'ml-2'
    },
    {
      to: "/Excursive",
      src: "/images/MenuDuck-2.png",
      context: ["こだわり", "Excursive"],
      size: "w-[4rem] h-[4.25rem] md:w-[6.25rem] md:h-[6.25rem]",
      margin : 'ml-8'
    },
    {
      to: "/FoodMenu",
      src: "/images/MenuDuck-3.png",
      context: ["お食事", "Food Menu"],
      size: "w-[4rem] h-[4.25rem] md:w-[6.25rem] md:h-[6.25rem]",
      margin : 'ml-8'
    },
    {
      to: "/Drink",
      src: "/images/MenuDuck-4.png",
      context: ["お飲み物", "Drinks"],
      size: "w-[4rem] h-[4.25rem] md:w-[6.25rem] md:h-[6.25rem]",
      margin : 'ml-8'
    },
    {
      to: "/Business",
      src: "/images/MenuDuck-5.png",
      context: ["営業時間/アクセス", "Business Hours/Access"],
      size: "w-[5rem] h-[5.25rem] md:w-[8rem] md:h-[8rem]",
      margin : ''
    },
  ];

  return (
    <>
      <div className="my-16 ml-0 sm:ml-6">
        <div className="flex flex-col justify-center items-start">
          {dropDownContents.map((dropDownContent, index) => {
            console.log(
              <DropDownElement
                key={index}
                to={dropDownContent.to}
                src={dropDownContent.src}
                context={dropDownContent.context}
                size={dropDownContent.size}
                margin={dropDownContent.margin}
              />
            );

            return (
              <DropDownElement
                key={index}
                to={dropDownContent.to}
                src={dropDownContent.src}
                context={dropDownContent.context}
                size={dropDownContent.size}
                margin={dropDownContent.margin}
              />
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5">
          <SocialMediaLink />
          <div className="flex flex-col justify-center items-center mx-6 my-4">
            <Link href="/">
              <a>
                <LazyImage source="/images/FooterDuck.png" w={100} h={100} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDropdown;
