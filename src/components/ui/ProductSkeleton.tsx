import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-[302px] h-[400px] bg-gray-200 rounded-2xl mx-auto p-2 space-y-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-[287px] bg-gray-300 rounded-xl"></div>

      {/* Text Skeleton */}
      <div className="flex items-center justify-between">
        <div className="w-[150px] h-4 bg-gray-300 rounded"></div>
        <div className="w-[70px] h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Button Skeleton */}
      <div className="w-[286px] h-[40px] bg-gray-300 rounded-lg"></div>
    </div>
  );
};

export default ProductCardSkeleton;
