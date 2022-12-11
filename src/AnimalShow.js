import { useState } from "react";
import bird from "./svg/bird.svg";
import gator from "./svg/gator.svg";
import cow from "./svg/cow.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  gator,
  cow,
  cat,
  dog,
  horse,
};

export default function AnimalShow({ type }) {
  const [size, setSize] = useState(0);

  return (
    <div className="border border-slate-400 inline-block p-3 shadow-md">
      <span className="relative">
        <img
          className="w-16 h-16 hover:cursor-pointer"
          src={svgMap[type]}
          alt={type}
          onClick={() => setSize(size + 1)}
        />
        <img
          className={`absolute bottom-0`}
          style={{ width: 10 + 10 * size + "px" }}
          src={heart}
          alt="heart"
        />
      </span>
    </div>
  );
}
