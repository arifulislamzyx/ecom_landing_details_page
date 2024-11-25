import { IAProduct } from "@/types/product";
import React from "react";
import ImageGallary from "./ImageGallary";
import Details from "./Details";
import ReviewAndRating from "./ReviewAndRatings";

const ProductDetails = ({
  singleProduct,
  filter,
  from,
}: {
  singleProduct: IAProduct;
  filter: string;
  from: string;
}) => {
  return (
    <div className="container mx-auto px-4 py-5 md:px-16 lg:px-20">
      <p className="mb-6 mt-8 text-base md:text-lg font-semibold">
        {from} / <span className="text-primary-600"> {filter}</span>
      </p>
      <div className="flex w-full flex-col md:flex-row">
        <ImageGallary singleProduct={singleProduct} />
        <Details filter={filter} singleProduct={singleProduct} />
      </div>
      <ReviewAndRating singleProduct={singleProduct} />
    </div>
  );
};

export default ProductDetails;
