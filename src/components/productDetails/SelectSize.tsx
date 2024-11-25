import React, { useState } from "react";
import { sizes } from "@/data/size";

const SelectSize = () => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div>
      <p className="text-lg font-semibold space-y-4">Available Size</p>
      <div className="flex gap-2 ">
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 p-2 border rounded-lg bg-secondary-50 ${
              selectedSize === size
                ? "border-purple-600 text-black"
                : "border-gray-300"
            }`}
          >
            <p className="text-base">{size.size}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectSize;
