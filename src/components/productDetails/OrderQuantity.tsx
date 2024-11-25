import React, { useState } from "react";

const OrderQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="flex flex-col gap-4 mb-8">
      <p className="text-base font-bold">Quantity</p>
      <div className="w-[132px] h-12 flex items-center justify-around my-auto text-center px-4 py-2 bg-countColor rounded-3xl">
        <button onClick={decrementQuantity} className="w-4 h-4 text-black">
          -
        </button>
        <p className="text-base font-semibold">{quantity}</p>
        <button onClick={incrementQuantity} className="w-4 h-4 text-black">
          +
        </button>
      </div>
    </div>
  );
};

export default OrderQuantity;
