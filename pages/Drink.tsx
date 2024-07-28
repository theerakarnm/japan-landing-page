import type { NextPage } from 'next';
import { Footer, MiniPage } from '../components';

const Recommend: NextPage = () => {
  const prefix = 'https://waragamo.eukron.com';
  const content = {
    src: `${prefix}/MenuDuckWithLetter-4.png`,
    content: [`${prefix}/drink-1.jpg`, `${prefix}/drink-2.jpg`, `${prefix}/drink-3.jpg`],
  };
  return (
    <>
      <MiniPage
        srcHeader={content.src}
        srcContent={content.content}
      />
      <Footer />
    </>
  );
};

export default Recommend;
