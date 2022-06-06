import type { NextPage } from "next";
import {
  Footer,
  MiniPage
} from "../components";

const Business: NextPage = () => {
  const prefix = '/images'
  const content = {
    src : `${prefix}/MenuDuckWithLetter-5.png`,
    content : [`${prefix}/BusinessSection.png`] //TODO : What new src missing?
  }
  return (
    <>
      <MiniPage srcHeader={content.src} srcContent={content.content}/>
      <Footer />
    </>
  );
};

export default Business;
