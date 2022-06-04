import type { NextPage } from "next";
import {
  Footer,
  MiniPage
} from "../components";

const FoodMenu: NextPage = () => {
  const prefix = '/images'
  const content = {
    src : `${prefix}/MenuDuckWithLetter-3.png`,
    content : [`${prefix}/無題875.png`,`${prefix}/無題874.png`]
  }
  return (
    <>
      <MiniPage srcHeader={content.src} srcContent={content.content}/>
      <Footer />
    </>
  );
};

export default FoodMenu;
