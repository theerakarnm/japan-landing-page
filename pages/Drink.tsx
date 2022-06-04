import type { NextPage } from "next";
import {
  Footer,
  MiniPage
} from "../components";

const Recommend: NextPage = () => {
  const prefix = '/images'
  const content = {
    src : `${prefix}/MenuDuckWithLetter-4.png`,
    content : [`${prefix}/無題886.png`,`${prefix}/無題890.png`,`${prefix}/無題889.png`]
  }
  return (
    <>
      <MiniPage srcHeader={content.src} srcContent={content.content}/>
      <Footer />
    </>
  );
};

export default Recommend;
