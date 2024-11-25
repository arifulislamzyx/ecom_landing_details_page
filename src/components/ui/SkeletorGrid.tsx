import React from "react";
import ProductCardSkeleton from "./ProductSkeleton";
import { SkeletonGridProps } from "@/types/skeletonGrid";

const SkeletonGrid: React.FC<SkeletonGridProps> = ({
  count = 0,
  gridCols = "grid-cols-4",
  className = "",
}) => {
  return (
    <div
      className={`container mx-auto px-4 py-5 md:px-16 lg:px-20 grid gap-6 ${gridCols} ${className}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
