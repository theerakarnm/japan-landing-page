import type { NextPage } from 'next';
import { Footer, MiniPage } from '../components';

const FoodMenu: NextPage = () => {
  const prefix = 'https://waragamo.eukron.com';
  const content = {
    src: `${prefix}/MenuDuckWithLetter-3.png`,
    content: [`${prefix}/food-1.jpg`, `${prefix}/food-2.jpg`, `${prefix}/food-3.jpg`, `${prefix}/food-4.jpg`, `${prefix}/food-5.jpg`, `${prefix}/food-6.jpg`, `${prefix}/food-7.jpg`],
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

export default FoodMenu;
