import type { NextPage } from 'next';
import { Footer, MiniPage } from '../components';

const WhatNew: NextPage = () => {
  const prefix = 'https://waragamo.eukron.com';
  const content = {
    src: `${prefix}/MenuDuckWithLetter-1.png`,
    content: [`${prefix}/868.jpg`],
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

export default WhatNew;
