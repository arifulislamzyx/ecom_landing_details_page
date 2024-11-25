import { IAProduct } from "@/types/product";
import React, { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "keen-slider/keen-slider.min.css";
import Button from "../button/Button";
import Slider from "../slider/Slider";

const RelatedProduct = ({
  relatedProduct,
}: {
  relatedProduct: IAProduct[];
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="container mx-auto px-4 py-5 md:px-16 lg:px-20 ">
      <Slider headline="Related Product">
        {relatedProduct
          .slice(0, showAll ? relatedProduct.length : 8)
          .map((product: IAProduct) => (
            <div key={product._id} className="keen-slider__slide">
              <ProductCard product={product} isBigDeal={false} />
            </div>
          ))}
      </Slider>

      {relatedProduct.length > 8 && (
        <div className="hidden md:block text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="font-semibold text-base text-white bg-primary-600 hover:bg-primary-500 transition-all px-6 py-2 rounded-lg mt-4 md:mt-6 mb-36 md:mb-20"
          >
            {showAll ? "Show Less" : "Show more"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default RelatedProduct;
