import React from "react";
import { DropDownElement, SocialMediaLink, LazyImage } from "./";

type Props = {};

const MenuDropdown = (props: Props) => {
  const dropDownContents = [
    {
      to: "/",
      src: "/images/MenuDuck-1.png",
      context: ["お知らせ", "What's new"],
    },
    {
      to: "/",
      src: "/images/MenuDuck-2.png",
      context: ["こだわり", "Excursive"],
    },
    {
      to: "/",
      src: "/images/MenuDuck-3.png",
      context: ["お食事", "Food Menu"],
    },
    {
      to: "/",
      src: "/images/MenuDuck-4.png",
      context: ["お飲み物", "Drink"],
    },
    {
      to: "/",
      src: "/images/MenuDuck-5.png",
      context: ["営業時間/アクセス", "Business Hours/Access"],
    },
  ];

  return (
    <>
      <div className="my-16 ml-6">
        <div className="flex flex-col justify-center items-start">
          {dropDownContents.map((dropDownContent, index) => {
            return (
              <DropDownElement
                key={index}
                to={dropDownContent.to}
                src={dropDownContent.src}
                context={dropDownContent.context}
              />
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5">
          <SocialMediaLink />
          <div className="flex flex-col justify-center items-center mx-6 my-4">
            <LazyImage source="/images/MenuDuck-2.png" w={100} h={100} />
            <h2 className="text-[#3A7C4E] font-semibold">Some Text Here</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDropdown;
