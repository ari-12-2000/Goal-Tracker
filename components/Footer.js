import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { HiMiniFire } from "react-icons/hi2";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { SlGraph } from "react-icons/sl";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 mx-auto  px-6 py-4  flex justify-between text-orange-500 md:max-w-[500px]">
      <Link href="/">
        <HiMiniFire className="h-6 w-6" />
      </Link>
      <Link href="/Page2">
        <FitnessCenterIcon className="h-6 w-6" />
      </Link>

      <Link href="/Page3">
        <RestaurantIcon className="h-6 w-6" />
      </Link>
      <Link href="/Page4">
        <SlGraph className="h-6 w-6" />
      </Link>
    </footer>
  );
};
export default Footer;
