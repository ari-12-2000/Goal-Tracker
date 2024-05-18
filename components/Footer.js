// Footer.js
"use client"; // Define the client boundary

import React, { useState } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { HiMiniFire } from "react-icons/hi2";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { SlGraph } from "react-icons/sl";

import Link from "next/link";

const Footer = () => {
  const [location, setLocation] = useState(1);
  return (
    <footer className="bg-zinc-900 mx-auto px-6 py-4 flex justify-between text-zinc-400 md:max-w-[500px]">
      <Link href="/">
        <HiMiniFire
          className={`${location === 1 && "text-orange-500"} h-6 w-6`}
          onClick={() => {
            setLocation(1);
          }}
        />
      </Link>
      <Link href="/Page2">
        <FitnessCenterIcon
          className={`${location === 2 && "text-orange-500"} h-6 w-6`}
          onClick={() => {
            setLocation(2);
          }}
        />
      </Link>
      <Link href="/Page3">
        <RestaurantIcon
          className={`${location === 3 && "text-orange-500"} h-6 w-6`}
          onClick={() => {
            setLocation(3);
          }}
        />
      </Link>
      <Link href="/Page4">
        <SlGraph
          className={`${location === 4 && "text-orange-500"} h-6 w-6`}
          onClick={() => {
            setLocation(4);
          }}
        />
      </Link>
    </footer>
  );
};

export default Footer;
