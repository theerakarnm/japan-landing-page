import type { NextPage } from 'next';
import { Footer, MiniPage } from '../components';

const Business: NextPage = () => {
  const prefix = 'https://waragamo.eukron.com';
  const content = {
    src: `${prefix}/MenuDuckWithLetter-5.png`,
    content: [`${prefix}/business_section.png`],
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

export default Business;
