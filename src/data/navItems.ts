import { IANavItem } from "@/types/navItems";

export const NavItems: IANavItem[] = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "Shop",
    slug: "/product",
  },
  {
    id: 3,
    name: "Deals",
    slug: "/deals", // {to manage active navItems have to use slug which not required}
  },
  {
    id: 4,
    name: "What's New",
    slug: "/whats-new", // {to manage active navItems have to use slug which not required}
  },
];
