import type { NextPage } from "next";
import {
  Footer,
  MiniPage
} from "../components";

const Recommend: NextPage = () => {
  const prefix = '/images'
  const content = {
    src : `${prefix}/MenuDuckWithLetter-4.png`,
    content : [`${prefix}/886.jpg`,`${prefix}/890.jpg`,`${prefix}/889.jpg`]
  }
  return (
    <>
      <MiniPage srcHeader={content.src} srcContent={content.content}/>
      <Footer />
    </>
  );
};

export default Recommend;
