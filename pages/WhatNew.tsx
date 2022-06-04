import type { NextPage } from "next";
import {
  Footer,
  MiniPage
} from "../components";

const WhatNew: NextPage = () => {
  const prefix = '/images'
  const content = {
    src : `${prefix}/MenuDuckWithLetter-1.png`,
    content : [`${prefix}/無題894.png`] //TODO : What new src missing?
  }
  return (
    <>
      <MiniPage srcHeader={content.src} srcContent={content.content}/>
      <Footer />
    </>
  );
};

export default WhatNew;
