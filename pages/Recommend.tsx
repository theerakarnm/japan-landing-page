import type { NextPage } from "next";
import {
  Footer,
  MiniPage
} from "../components";

const Recommend: NextPage = () => {
  const prefix = '/images'
  const content = {
    src : `${prefix}/無題904-3-fix.png`,
    content : [`${prefix}/無題894.png`,`${prefix}/無題871.png`,`${prefix}/無題872 (1).png`]
  }
  return (
    <>
      <MiniPage srcHeader={content.src} srcContent={content.content}/>
      <Footer />
    </>
  );
};

export default Recommend;
