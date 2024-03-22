import { NavLink } from "@/types";

export const dishTypes = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snack",
] as const;

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "My recipes",
    link: "/recipes",
  },
  {
    name: "About Us",
    link: "/about",
  },
];
