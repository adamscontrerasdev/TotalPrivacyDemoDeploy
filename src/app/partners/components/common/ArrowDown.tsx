import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ArrowDownProps {
  opacity?: number;
  redirect?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ opacity = 1, redirect }) => {
  return (
    <div className="w-full h-10 md:h-20  bottom-0 left-0 text-amber-50 flex justify-center items-center text-3xl md:text-5xl">
      <Link href={redirect ? redirect : ""}>
        <IoIosArrowDown
          className="animate-bounce cursor-pointer"
          style={{
            opacity: opacity,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </Link>
    </div>
  );
};

export default ArrowDown;
