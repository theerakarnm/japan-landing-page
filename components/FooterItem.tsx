import React from "react";
import Link from "next/link";

interface Data {
  to: string;
  context: string[];
}
type Props = {
  data: Data;
};

const FooterItem = ({ data }: Props) => {
  return (
    <Link href={data.to} target={`_blank`}>
      <a>
        <div className="flex flex-col justify-center items-center my-3 mx-4">
          <h1 className="text-2xl font-bold text-[#3A7C4E]">
            {/* text-[#3A7C4E] */}
            {data.context[0]}
          </h1>
          <p className="text-md text-gray-500">{data.context[1]}</p>
        </div>
      </a>
    </Link>
  );
};

export default FooterItem;
