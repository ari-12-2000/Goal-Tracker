import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({setChecked, setValue}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setChecked((prevChecked) =>
      prevChecked.map((item) =>item=!item)
    );
    setValue(100);
  };

  return (
    <div className="relative w-full mt-4 select-none">
      <input
        type="checkbox"
        id="toggle"
        className={`absolute block w-14 h-14 rounded-full border-4 border-orange-600 bg-white appearance-none cursor-pointer ${
          isChecked ? "transition-all duration-1000 ease-in-out right-0" : ""
        }`}
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className="px-4 overflow-hidden h-14 rounded-full w-full flex items-center bg-orange-600 cursor-pointer"
      >
    <p className={`absolute left-2 text-sm text-red-500 ${isChecked ? "transition-all duration-500 ease-in-out right-2 " : ""}`}>Track</p>

        <div
          className={`${
            isChecked ? "hidden" : ""
          } ml-auto flex w-[70%] justify-between text-white`}
        >
          <p>Swipe to track all</p>
          <div className="">
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-300" />
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-200" />
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
