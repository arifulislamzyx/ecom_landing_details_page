import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/wf-1.jpg";
import { nunitoSans } from "../../pages";
import { NavItems } from "@/data/navItems";
import { IANavItem } from "@/types/navItems";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import UserOptions from "@/components/userOptions/UserOptions";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navItemClicked = (slug: string) => {
    setActiveItem(slug);
  };

  return (
    <nav className="bg-secondary-50 ">
      <div className="container mx-auto px-4 py-5 md:px-16 lg:px-20 shadow-sm ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {openMenu ? <X /> : <Menu />}
            </button>

            <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
              <Image src={logo} alt="wf_logo" width={40} height={24} />

              <p
                className={`font-bold text-lg md:text-3xl ${nunitoSans.variable}`}
              >
                We<span className="text-primary-600">5</span>ive
              </p>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {NavItems.map((item: IANavItem) => (
              <Link
                href={item.slug!}
                key={item.id}
                className={`font-medium text-sm md:text-base lg:text-lg text-[#646464] hover:text-primary-800 cursor-pointer transition ${activeItem === item.slug ? "text-primary-600" : ""}`}
                onClick={() => navItemClicked(item.slug!)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white rounded-full shadow-md px-2 py-2.5 w-[242px] max-w-[300px]">
              <Search size={16} className=" text-black" />
              <input
                type="text"
                placeholder="Search"
                className="ml-2 w-full outline-none text-sm md:text-base text-blcak placeholder-black placeholder-text-normal"
              />
            </div>

            {/* Mobile Icons */}
            <Search className="md:hidden w-5 h-5 text-gray-700 cursor-pointer" />
            {/* mobile and desktop both */}
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-700 cursor-pointer " />
              <p className="absolute top-[-5px] right-[-5px] w-4 h-4 bg-black rounded-full text-white text-xs flex items-center justify-center mb-1">
                0
              </p>
            </div>
            <UserOptions />
          </div>
        </div>

        {/* Mobile Menu Links */}
        {openMenu && (
          <div className="md:hidden mt-3 bg-white rounded-md shadow-md p-4">
            <ul className="flex flex-col gap-2">
              {NavItems.map((item: IANavItem) => (
                <li
                  key={item.id}
                  className="font-medium text-gray-700 hover:text-[#581FC1] cursor-pointer transition"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
