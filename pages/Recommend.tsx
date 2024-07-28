import type { NextPage } from 'next';
import { Footer, MiniPage } from '../components';

const Recommend: NextPage = () => {
  const prefix = 'https://waragamo.eukron.com';
  const content = {
    src: `${prefix}/904-3-fix.png`,
    content: [`${prefix}/894.jpg`, `${prefix}/871.jpg`, `${prefix}/872 (1).jpg`],
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
