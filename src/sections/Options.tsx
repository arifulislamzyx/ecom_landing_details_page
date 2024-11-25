import React from "react";
import { CreditCard, RefreshCcw, Truck } from "lucide-react";

const Options = () => {
  return (
    <main className="bg-option-bg text-white">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row items-center md:justify-evenly px-4 py-4 md:py-4 md:px-16 lg:px-20 h-20">
        <div className="flex gap-4">
          <Truck size={32} className="m-0 p-0" />
          <div className="space-y-2">
            <p className="font-bold md:font-semibold text-base md:text-lg ">
              FREE SHIPPING
            </p>
            <p className="text-sm">
              BUY BDT 3000+ & GET FREE DELIVERY & SPECIAL OFFERS
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <RefreshCcw size={32} />
          <div className="space-y-2">
            <p className="font-bold md:font-semibold text-base md:text-lg ">
              7 DAYS EXCHANGE
            </p>
            <p className="text-sm">
              EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
            </p>
          </div>
        </div>

        <div className=" flex gap-4">
          <CreditCard size={32} />

          <div className="space-y-2">
            <p className="font-bold md:font-semibold text-base md:text-lg ">
              100% PAYMENT SECURE
            </p>
            <p className=" text-sm">
              CASH ON DELIVERY AND SECURED ONLINE PAYMENT
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Options;
