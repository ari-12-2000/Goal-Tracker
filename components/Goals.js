

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

const Goals = ({ setValue, setChecked, checked, setIsChecked, value }) => {
  let cnt = value * 0.05;

  const handleCheckbox = (id) => {
    
    setChecked((prevChecked) =>
      prevChecked.map((item, index) => (index === id ? !item : item))
    );
    if (checked[id]) cnt--;
    else {
      cnt++;
    }

    cnt === 5 ? setIsChecked(true) : setIsChecked(false);

    setValue((cnt / 5) * 100);
  };

  return (
    <>
      <div className="flex justify-between mt-4">
        <p className="text-white">Today&apos;s goal</p>
        <FontAwesomeIcon
          icon={faHeartPulse}
          className="text-red-500 h-6 heart"
        />
      </div>
      <div className="bg-zinc-900 items-center text-white mt-4  rounded-xl p-4 goals flex ">
        <div className="mr-3 h-9 border-zinc-800 border-2 rounded-lg w-8 ">
          <img className="h-[100%] w-[100%]" src="images/workout.png" alt="" />
        </div>
        <label htmlFor="0">Workout for 20 mins</label>
        <input
          id="0"
          type="checkbox"
          className={"-z-10 absolute opacity-0 "}
          onChange={() => handleCheckbox(0)}
        />
        <label
          htmlFor="0"
          className={`relative ${
            checked[0] ? "bg-purple-700" : "bg-white"
          } ml-auto  rounded-lg h-9 w-8`}
        >
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              checked[0] ? "block" : "hidden"
            }`}
          >
            ✓
          </span>
        </label>
      </div>

      <div className="bg-zinc-900 items-center text-white mt-4  rounded-xl p-4 goals flex ">
        <div className="mr-3 h-9 border-zinc-800 border-2 rounded-lg w-8  ">
          <img className="h-[100%] w-[100%]" src="images/fire.png" alt="" />
        </div>
        <label htmlFor="1">Read book for 15 mins</label>
        <input
          id="1"
          type="checkbox"
          className={"-z-10 absolute opacity-0 "}
          onChange={() => handleCheckbox(1)}
        />
        <label
          htmlFor="1"
          className={`relative ${
            checked[1] ? "bg-orange-600" : "bg-white"
          } ml-auto  rounded-lg h-9 w-8`}
        >
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              checked[1] ? "block" : "hidden"
            }`}
          >
            ✓
          </span>
        </label>
      </div>
      <div className="bg-zinc-900 items-center text-white mt-4  rounded-xl p-4 goals flex ">
        <div className="mr-3 h-9 border-zinc-800 border-2 rounded-lg w-8  ">
          <img className="h-[100%] w-[100%]" src="images/foot.png" alt="" />
        </div>
        <label htmlFor="2">30 mins walk</label>
        <input
          id="2"
          type="checkbox"
          className={"-z-10 absolute opacity-0 "}
          onChange={() => handleCheckbox(2)}
        />
        <label
          htmlFor="2"
          className={`relative ${
            checked[2] ? "bg-lime-300" : "bg-white"
          } ml-auto  rounded-lg h-9 w-8`}
        >
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              checked[2] ? "block" : "hidden"
            }`}
          >
            ✓
          </span>
        </label>
      </div>
      <div className="bg-zinc-900 items-center text-white mt-4  rounded-xl p-4 goals flex ">
        <div className="mr-3 h-9 border-zinc-800 border-2 rounded-lg w-8  ">
          <img className="h-[100%] w-[100%]" src="images/sleep.png" alt="" />
        </div>
        <label htmlFor="3">Sleep at 11am sharp</label>
        <input
          id="3"
          type="checkbox"
          checked={checked[3]}
          className={"-z-10 absolute opacity-0"}
          onChange={() => handleCheckbox(3)}
        />
        <label
          htmlFor="3"
          className={`relative ${
            checked[3] ? "bg-teal-500" : "bg-white"
          } ml-auto rounded-lg h-9 w-8`}
        >
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              checked[3] ? "block" : "hidden"
            }`}
          >
            ✓
          </span>
        </label>
      </div>

      <div className="bg-zinc-900 items-center text-white mt-4  rounded-xl p-4 goals flex ">
        <div className="mr-3 h-9 border-zinc-800 border-2 rounded-lg w-8  ">
          <img className="h-[100%] w-[100%]" src="images/drink.png" alt="" />
        </div>
        <label htmlFor="4">Drink 3L water</label>
        <input
          id="4"
          type="checkbox"
          checked={checked[4]}
          onChange={() => handleCheckbox(4)}
          className={"-z-10 absolute opacity-0"}
        />
        <label
          htmlFor="4"
          className={`relative ${
            checked[4] ? "bg-sky-600" : "bg-white"
          } ml-auto rounded-lg h-9 w-8`}
        >
          <span
            className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              checked[4] ? "block" : "hidden"
            }`}
          >
            ✓
          </span>
        </label>
      </div>
    </>
  );
};

export default Goals;
