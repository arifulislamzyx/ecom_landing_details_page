import React from "react";
import Image from "next/image";
import Link from "next/link";
import ShopNow from "@/components/shopNowButton/ShopNow";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { imagesData } from "@/data/NewCollection";

const Carousel = () => {
  const [ref] = useKeenSlider<HTMLDivElement>();

  return (
    <div>
      <div ref={ref} className="sm:hidden md:block keen-slider ">
        {imagesData.map((data, index) => (
          <div
            key={index}
            className="container mx-auto px-4 py-5 md:px-16 lg:px-20 flex flex-col md:flex-row keen-slider__slide"
          >
            <div>
              <div className="w-[621px] h-[480px] bg-secondary-100 relative"></div>
              <Image
                src={data.image!}
                width={468}
                height={566}
                alt="New_collection"
                className="absolute -top-20"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2 text-left sm:text-left space-y-6">
              <h2 className="text-4xl font-semibold text-black">
                {data.collection}
              </h2>
              <Link
                href={"/"}
                className="flex items-center text-center justify-center text-white"
              >
                <ShopNow />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
