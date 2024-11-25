import React from "react";
import Link from "next/link";
import ShopNow from "@/components/shopNowButton/ShopNow";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/varients";

const Header = () => {
  return (
    <header
      className="w-full bg-cover bg-center flex items-center justify-center text-center text-white "
      style={{
        backgroundImage: `url(${"https://s3-alpha-sig.figma.com/img/8d85/bb17/9d972fb25b5ad899dca00d131d9f310c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FhXN6ihLSUkEWLMTdLLYrtolM-LGXORSrGG7j46V~OqhOXqKCtv5C6p6kfGbhsFcbAiRr~yUtuaO5va8N4FW7vedwbGBJVKxABuJKp3In35~Ok6JWiXmmc9vMoghm3PMHl1Iz3HStJbKePgnDophkhPGohJIunkg7AbvObX3CeuuIKi6Xtjj~lY6Iu1Lg~DUUIfz5~9lW4i-9GoEwRJxTSfvq-1NbhpMVk8bVcygZ8GPwc-oeT69YOX63BtrEJniTblh8SqJlwKS00wWl1OQ1DcQoo5NQMyN5IjJM2SMR5rtCgQzBedPAm6bN0E4F9n~tMJJdq6NGVlan1E7U3bsyA__"})`,
        backgroundSize: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >
      <div className="container flex flex-col space-y-6">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
        >
          <h3 className="font-bold text-2xl md:text-5xl">
            Elevate Your Everyday Style
          </h3>
          <p className="text-sm md:text-lg">
            Discover the Latest Trends in Sustainable Fashion
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
        >
          <Link
            href={"/"}
            className="flex items-center text-center justify-center "
          >
            <ShopNow />
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
