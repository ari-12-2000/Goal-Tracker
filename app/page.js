"use client";

import Goals from "@/components/Goals";
import CustomBarChart from "@/components/Graph";
import ProgressBar from "@/components/ProgressBar";
import Toggle from "@/components/Toggle";
import { useState } from "react";

let cnt = 0;
const page = () => {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState([false, false, false, false, false]);

  return (
    <div className="mx-auto p-6 bg-zinc-950 h-auto w-full md:max-w-[500px]">
      <div className="text-white h-auto  p-4  bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 w-full rounded-3xl ">
        <div className="flex items-center ">
          <img
            src="/images/target.png"
            alt=""
            className="inline mr-4 h-[90%] w-auto"
          />
          <div>
            <p>Your Daily Goal Almost Done</p>

            <p> {value * 0.05} of 5 Completed</p>
          </div>
        </div>

        <ProgressBar value={value} />
      </div>
      <Goals
        setValue={setValue}
        setChecked={setChecked}
        checked={checked}
        cnt={cnt}
      />
      <Toggle setChecked={setChecked} setValue={setValue} />
      <CustomBarChart value={value} />
    </div>
  );
};

export default page;
