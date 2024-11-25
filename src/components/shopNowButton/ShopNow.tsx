import { MoveUpRight } from "lucide-react";
import React from "react";
import Button from "../button/Button";

const ShopNow = () => {
  return (
    <>
      <Button className="text-center text-lg bg-primary-500 w-[150px] h-12 px-[30px] py-3  rounded-[28px]">
        Shop Now
      </Button>
      <MoveUpRight className="text-center  text-lg bg-primary-500 p-3 w-12 h-12 rounded-3xl" />
    </>
  );
};

export default ShopNow;
