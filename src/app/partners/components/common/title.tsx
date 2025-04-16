import React from "react";
import { TfiWorld } from "react-icons/tfi";

interface TitleProps {
  value?: string;
  sm?: boolean;
  w?: boolean;
  Logo?: boolean;
  icon?: boolean;
}

const Title: React.FC<TitleProps> = ({
  value = "Tokin Privacy",
  sm = false,
  w = false,
  Logo = true,
  icon = false,
}) => {
  return (
    <div
      className={`flex justify-start items-center ${sm ? "h-15" : "h-20"}
    ${!Logo ? "max-w-max" : w ? "max-w-60" : "max-w-24"}  gap-2 ${
      !sm ? "py-5 md:py-4 xl:py-3" : "py-3 xl:py-1 md:py-2"
    }`}
    >
      {Logo ? (
        <img
          src="\White_Icon.svg"
          alt="Title-Icon"
          className="h-full flex-1/4"
        />
      ) : null}

      {icon ? (
        <TfiWorld className="text-white h-full md:text-lg xl:text-2xl" />
      ) : null}

      <h1 className="text-white flex flex-col  md:text-lg xl:text-2xl font-bold flex-3/4">
        {value}
      </h1>
    </div>
  );
};

export default Title;
