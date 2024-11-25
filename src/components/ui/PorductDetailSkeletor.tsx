import React from "react";

const ProductPageSkeleton = () => {
  return (
    <div className="w-full px-4 lg:px-10 animate-pulse">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image Section */}
        <div className="flex-1 space-y-4">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="w-[80px] h-[80px] bg-gray-200 rounded-md"
              ></div>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 space-y-4">
          <div className="w-1/3 h-6 bg-gray-200 rounded"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
          <div className="w-1/5 h-6 bg-gray-200 rounded"></div>
          <div className="w-2/3 h-12 bg-gray-200 rounded"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded"></div>

          {/* Sizes and Colors */}
          <div className="flex gap-4">
            <div className="w-[100px] h-10 bg-gray-200 rounded"></div>
            <div className="w-[100px] h-10 bg-gray-200 rounded"></div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <div className="w-[40px] h-[40px] bg-gray-200 rounded"></div>
            <div className="w-[40px] h-[40px] bg-gray-200 rounded"></div>
            <div className="w-[40px] h-[40px] bg-gray-200 rounded"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <div className="w-[45%] h-[50px] bg-gray-200 rounded"></div>
            <div className="w-[45%] h-[50px] bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 flex gap-4">
        <div className="w-1/3 h-10 bg-gray-200 rounded"></div>
        <div className="w-1/4 h-10 bg-gray-200 rounded"></div>
        <div className="w-1/4 h-10 bg-gray-200 rounded"></div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 space-y-6">
        <div className="w-1/3 h-6 bg-gray-200 rounded"></div>
        {[1, 2].map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
            <div className="w-3/5 h-3 bg-gray-200 rounded"></div>
            <div className="w-2/5 h-3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <div className="w-1/4 h-6 bg-gray-200 rounded"></div>
        <div className="flex gap-4 mt-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="w-[150px] h-[200px] bg-gray-200 rounded"></div>
              <div className="w-[150px] h-4 bg-gray-200 rounded"></div>
              <div className="w-[100px] h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
