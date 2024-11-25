import React, { useState } from "react";
import { colors } from "@/data/colors";
import { IAColor } from "@/types/color";

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="hidden md:block md:space-y-1">
      <p className="text-lg font-semibold">Available Color</p>
      <div className="flex items-center gap-2 ">
        {colors?.map((color: IAColor) => (
          <div key={color.id} className="flex items-center gap-4">
            <button
              onClick={() => setSelectedColor(color)}
              className={`w-4 h-4 rounded-full border ${
                selectedColor === color
                  ? "ring-2 ring-purple-600"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.color }}
            ></button>

            <span
              className={`text-sm font-medium ${
                selectedColor === color ? "text-black" : "text-gray-600"
              }`}
            >
              {color.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
