"use client";

import { MAX, MIN } from "@/app/constants";

export default function ProgressBar({ value = 0, onComplete = () => {} }) {

  return (
    <div className="progress h-auto mt-2 ">
      <div
        className="border-2 rounded-3xl ml-12"
        style={{
          transform: `scaleX(${value/MAX})`,
          transformOrigin: "left",
        }}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={value}
        role="progressbar"
      />
      <div className="text-right">{value.toFixed()}%</div>
    </div>
  );
}
