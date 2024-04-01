import { NavLink } from "@/types";

export const dishTypes = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snack",
] as const;

export const cusines = [
    'African',
    'Asian',
    'American',
    'British',
    'Cajun',
    'Caribbean',
    'Chinese',
    'Eastern European',
    'European',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'Southern',
    'Spanish',
    'Thai',
    'Vietnamese',
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
