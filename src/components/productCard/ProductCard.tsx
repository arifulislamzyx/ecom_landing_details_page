import React from "react";
import { IAProduct } from "@/types/product";
import Image from "next/image";
import Button from "../button/Button";
import { trancateText } from "@/utils/trancateText";
import { motion } from "framer-motion";
import Rating from "../productDetails/Rating";
import Link from "next/link";
import { showSlideProduct } from "@/animation/varients";

const ProductCard = ({
  product,
  isBigDeal,
}: {
  product: IAProduct;
  isBigDeal: boolean;
}) => {
  const textLength = 15;

  return (
    <motion.div
      variants={showSlideProduct}
      className="relative w-[302px] h-[400px] bg-white rounded-2xl items-center mx-auto p-2 space-y-4 hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="w-full h-[260px] overflow-hidden rounded-xl">
        <Image
          src={product?.img}
          alt="product_card"
          width={286}
          height={260}
          className="transition duration-700 ease-in-out transform hover:scale-105"
        />
      </div>

      <div>
        {isBigDeal && (
          <div className="mb-2">
            <Rating
              singleProduct={{
                ...product,
              }}
              isProduvtReviewRating
              size={16}
              isRatings={false}
            />
          </div>
        )}
        <Link
          href={`/product/${product._id}`}
          className="flex items-center justify-between"
        >
          <p className="text-base ">
            {trancateText(product?.name ?? "", textLength)}...
          </p>
          <p>BDT {product?.price}</p>
        </Link>
      </div>

      {isBigDeal && (
        <div className=" absolute -top-2.5 right-6 w-11 h-[60px] rounded-b-3xl text-xs font-bold text-white bg-primary-600 py-1 px-2 rounded mt-2 text-center">
          Up to 40%
        </div>
      )}

      <Button className=" text-base text-primary-600 w-[286px] h-[40px] border border-primary-600 rounded-lg">
        Add To Cart
      </Button>
    </motion.div>
  );
};

export default ProductCard;
