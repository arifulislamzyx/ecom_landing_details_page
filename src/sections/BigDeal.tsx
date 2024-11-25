import React from "react";
import bigDealImage from "../../public/bigDeal.png";
import Image from "next/image";
import { pacifico } from "../../pages";
import Link from "next/link";
import ShopNow from "@/components/shopNowButton/ShopNow";

const BigDeal = () => {
  return (
    <div className="container mx-auto md:px-16 lg:px-20 mt-6 mb-8 md:mb-24 ">
      <div className="bg-secondary-100 flex flex-col gap-11 text-center md:text-justify  md:flex-row items-center md:justify-between px-4 py-6 md:px-16 ">
        <div>
          <p className={`${pacifico.className} text-2xl mb-6 text-primary-700`}>
            Big Deal
          </p>
          <p className="font-semibold text-3xl md:text-4xl xxl:text-5xl mb-6">
            <span className="text-primary-700">30% </span> Off For New
            Cusotomers
          </p>
          <Link
            href={"/"}
            className="flex  justify-center md:justify-normal md:text-justify text-white"
          >
            <ShopNow />
          </Link>
        </div>
        <Image
          src={bigDealImage}
          alt="big_deal_image"
          width={427}
          height={495}
        />
      </div>
    </div>
  );
};

export default BigDeal;
