import React from "react";
import Link from "next/link";

type Props = {
  isCol?: boolean;
};

const SocialMediaLink = ({ isCol }: Props) => {
  // TODO: Add social media links

  let col = ''

  if(isCol) {
    col = 'lg:flex-row flex-col'
  }
  return (
    <div className={`flex ${col}`}>
      <div className="mx-1">
        <Link href="https://facebook.com/waragamo/" target={`_blank`} rel="noopener noreferrer">
          <a>
            <img src="/images/facebook.png" alt="facebook link" width={60} height={60} />
          </a>
        </Link>
      </div>
      <div className="mx-1">
        <Link href="https://instagram.com/waragamo" target={`_blank`} rel="noopener noreferrer">
          <a>
            <img src="/images/instagram.png" alt="instagram link" width={60} height={60} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaLink;
