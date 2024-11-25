import Image from "next/image";
import React from "react";
import footerImage from "../../public/footerImage.svg";
import { nunitoSans } from "../../pages";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Button from "@/components/button/Button";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container px-4 py-5 sm:px-6 md:px-16 lg:px-20 mx-auto space-y-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 xxl:gap-64">
          <div className="space-y-7">
            <div className="flex items-center gap-2 ">
              <Image src={footerImage} alt="wf_footer" width={62} height={35} />
              <p
                className={` font-bold text-lg md:text-4xl ${nunitoSans.variable}`}
              >
                We<span className="text-[#7436F1]">5</span>ive
              </p>
            </div>
            <p className="text-sm md:text-base">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-2">
              Sign Up For Our Newsletter!
            </h4>
            <p className="text-sm md:text-base  mb-4 md:mb-8">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>

            <div className="flex items-center">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email Address"
                className=" w-44 h-10 md:w-Input-w md:h-Input-h rounded-l-lg focus:outline-none placeholder:text-black placeholder:text-sm md:placeholder:text-base p-4"
              />
              <Button className="w-10 h-10 md:w-48 md:h-14 px-16 md:px-14 py-0 md:py-4 bg-primary-600  rounded-r-lg flex items-center justify-center">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:justify-evenly md:gap-36">
          <div className="flex flex-col space-y-2 md:space-y-4">
            <Link href={"/"} className="font-bold text-sm md:text-base">
              Contact Us
            </Link>
            <Link href={"/"} className="text-sm md:text-base">
              support@we5ive.com
            </Link>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-4">
            <Link href={"/"} className="text-sm md:text-base">
              About Us
            </Link>
            <Link href={"/"} className=" text-sm md:text-base">
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-4">
            <Link href={"/"} className=" text-sm md:text-base">
              Privacy Policy
            </Link>
            <Link href={"/"} className="text-sm md:text-base">
              Terms & Condition
            </Link>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-4">
            <Link href={"/"} className="font-bold text-sm md:text-base">
              Social Link
            </Link>

            <div className="flex items-center gap-6">
              <Link href={"https://facebook.com"}>
                <Facebook className="cursor-pointer" />
              </Link>
              <Link href={"https://twitter.com"}>
                <Twitter className="cursor-pointer" />
              </Link>
              <Link href={"https://linkedin.com"}>
                <Linkedin className="cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
