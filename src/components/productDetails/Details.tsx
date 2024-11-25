import React from "react";
import Rating from "./Rating";
import Button from "../button/Button";
import SelectColor from "./SelectColor";
import SelectSize from "./SelectSize";
import OrderQuantity from "./OrderQuantity";
import { IAProduct } from "@/types/product";

const Details = ({
  singleProduct,
  filter,
}: {
  singleProduct: IAProduct;
  filter: string;
}) => {
  const { name, price } = singleProduct || "";

  return (
    <div className="mt-8 w-full md:w-1/2">
      <div className="p-4">
        <div className="space-y-6">
          <Button className="text-white text-base  font-semibold bg-primary-950 px-14 py-2.5 rounded-lg">
            {filter}
          </Button>
          <h1 className="text-3xl font-semibold">{name}</h1>

          <Rating
            singleProduct={singleProduct}
            size={24}
            isProduvtReviewRating
            isRatings
          />
          <p className="text-2xl md:text-3xl font-bold ">BDT {price}</p>
        </div>

        <div className="border my-8"></div>
        <div className=" flex justify-between">
          <SelectSize />
          <SelectColor />
        </div>
        <div className="border-t my-8"></div>
        <OrderQuantity />
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            className="w-full md:flex-1 bg-primary-600 text-white text-base font-semibold
           py-2 rounded-lg "
          >
            Buy Now
          </Button>
          <Button className="w-full md:flex-1 border border-primary-600 text-primary-600 py-2 rounded-lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
