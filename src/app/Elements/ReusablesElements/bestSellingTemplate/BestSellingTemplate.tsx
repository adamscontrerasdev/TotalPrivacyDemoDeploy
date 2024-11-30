import React, { useState } from "react";

interface BestSellingTemplateProps {
  title?: string;
  bgImage?: string;
  description?: string;
}

export const BestSellingTemplate: React.FC<BestSellingTemplateProps> = ({
  title,
  bgImage,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`w-1/2 h-1/2 flex flex-col items-center justify-start pt-10 gap-2 relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`transform transition-transform duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
        }}
      ></div>
      <h1 className="text-2xl font-normal text-center z-50">{title}</h1>
      <p className="text-center text-xs w-1/2 z-50">{description}</p>
      <button className="bg-primary text-white text-sm p-2 rounded-lg shadow-lg shadow-[#203adf80] z-50">
        Ver mas
      </button>
    </div>
  );
};
