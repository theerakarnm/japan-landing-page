import type { NextPage } from "next";
import {
  Footer,
  MiniPage
} from "../components";

const FoodMenu: NextPage = () => {
  const prefix = '/images'
  const content = {
    src : `${prefix}/MenuDuckWithLetter-3.png`,
    content : [`${prefix}/936.jpg`,`${prefix}/910.jpg`,`${prefix}/881.jpg`,`${prefix}/874.jpg`,`${prefix}/894.png`,`${prefix}/871.jpg`,`${prefix}/872 (1).jpg`]
  }
  return (
    <>
      <MiniPage srcHeader={content.src} srcContent={content.content}/>
      <Footer />
    </>
  );
};

export default FoodMenu;
