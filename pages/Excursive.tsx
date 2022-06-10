import { profile } from "console";
import type { NextPage } from "next";
import {
  Footer,
  MiniPage
} from "../components";

const Excursive: NextPage = () => {
  const prefix = '/images'
  const content = {
    src : `${prefix}/MenuDuckWithLetter-2.png`,
    content : [`${prefix}/section-4.png`,`${prefix}/無題861.jpg`]
  }
  return (
    <>
      <MiniPage srcHeader={content.src} srcContent={content.content}/>
      <Footer />
    </>
  );
};

export default Excursive;
