import BigDeal from "@/sections/BigDeal";
import BigDealProduct from "@/sections/BigDealProduct";
import FeaturedProduct from "@/sections/FeaturedProduct";
// import FeaturedProduct from "@/sections/FeaturedProduct";
// import { BigDealProduct } from "../src/sections/BigDealProduct";
import Header from "@/sections/Header";
import NewCollections from "@/sections/NewCollections";
import Options from "@/sections/Options";
import localFont from "next/font/local";

export const pacifico = localFont({
  src: "./fonts/Pacifico-Regular.ttf",
  variable: "--font-pacifico",
  weight: "400",
});
export const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "100 900",
});
export const nunitoSans = localFont({
  src: "./fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
  variable: "--font-nunito-sans",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Header />
      <Options />
      <FeaturedProduct />
      <BigDeal />
      <NewCollections />
      <BigDealProduct />
    </>
  );
}
