import { AppDispatch, RootState } from "@/redux/store/Store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "@/redux/slice/ProductSlice";
import ProductCard from "@/components/productCard/ProductCard";
import { IAProduct } from "@/types/product";
import SkeletonGrid from "@/components/ui/SkeletorGrid";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { productAnm } from "@/animation/varients";
import { useRouter } from "next/router";
import Slider from "@/components/slider/Slider";

const FeaturedProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, isError } = useSelector(
    (state: RootState) => state.product
  );
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (isError) {
    return <p>{`Error Fetching Product Data ${isError}`}</p>;
  }

  if (isLoading) {
    return <SkeletonGrid count={3} gridCols="grid-cols-3" />;
  }
  const handleFeaturedPorduct = (productId: string) => {
    router.push({
      pathname: `/product/${productId}`,
      query: { filter: "New Arrival", from: "Featured Product" },
    });
  };

  return (
    <div className="container mx-auto px-4 py-5 md:px-16 lg:px-20 ">
      <motion.div
        variants={productAnm}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-5 md:px-16 lg:px-20 "
      >
        <p className="text-primary-600 text-base md:text-lg mb-1">
          FEATURED PRODUCT
        </p>
        <Slider headline="New Arrivals">
          {products.map((product: IAProduct) => (
            <div
              key={product._id}
              onClick={() => handleFeaturedPorduct(product._id)}
              className="keen-slider__slide py-2"
            >
              <ProductCard product={product} isBigDeal={false} />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default FeaturedProduct;
