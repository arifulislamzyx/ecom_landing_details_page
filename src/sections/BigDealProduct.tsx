import Button from "@/components/button/Button";
import ProductCard from "@/components/productCard/ProductCard";
import SkeletonGrid from "@/components/ui/SkeletorGrid";
import { fetchProduct } from "@/redux/slice/ProductSlice";
import { AppDispatch, RootState } from "@/redux/store/Store";
import { IAProduct } from "@/types/product";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { productAnm } from "@/animation/varients";
import Slider from "@/components/slider/Slider";
import { useRouter } from "next/router";

const BigDealProduct = () => {
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, isError } = useSelector(
    (state: RootState) => state.product
  );
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleBigDealPorduct = (productId: string) => {
    router.push({
      pathname: `/product/${productId}`,
      query: { filter: "Summer Offer", from: "Big Deal" },
    });
  };

  if (isError) {
    return <p>{`Error Fetching Data ${isError}`}</p>;
  }

  if (isLoading) {
    return (
      <SkeletonGrid
        count={12}
        gridCols="mx-auto grid-cols-1 md:grid-cols-3 xxl:grid-cols-4"
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-5 md:px-16 lg:px-20">
      <div className="hidden md:flex items-center text-center justify-between mb-6">
        <div className="text-justify">
          <p className="text-base md:text-xl text-primary-600">SUMMER</p>
          <p className="font-bold text-2xl md:text-3xl">Big Deal</p>
        </div>
        <Link href={"/product"} className=" text-primary-600">
          <CircleArrowRight />
        </Link>
      </div>

      {/* Slider for small devices  */}
      <div className="block md:hidden">
        <p className="text-base md:text-xl text-primary-600">SUMMER</p>
        <Slider headline="Big Deal">
          {products
            .slice(0, showAll ? products.length : 12)
            .map((product: IAProduct) => (
              <div
                key={product._id}
                className="w-full keen-slider__slide block md:hidden"
              >
                <ProductCard product={product} isBigDeal />
              </div>
            ))}
        </Slider>
      </div>

      {/* Grid layout for larger devices */}
      <motion.div
        variants={productAnm}
        initial="hidden"
        animate="show"
        className="hidden md:grid md:grid-cols-3 xxl:grid-cols-4 gap-6"
      >
        {products
          .slice(0, showAll ? products.length : 12)
          .map((product: IAProduct) => (
            <div
              key={product._id}
              onClick={() => handleBigDealPorduct(product._id)}
            >
              <ProductCard product={product} isBigDeal />
            </div>
          ))}
      </motion.div>

      {products.length > 12 && (
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

export default BigDealProduct;
