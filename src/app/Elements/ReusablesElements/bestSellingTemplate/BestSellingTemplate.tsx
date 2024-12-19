"use client";
import React, { useState } from "react";
import { useIsMobile } from "../../hooks";

interface BestSellingTemplateProps {
  title?: string;
  bgImage?: string;
  description?: string;
  rootUrl: string;
}

export const BestSellingTemplate: React.FC<BestSellingTemplateProps> = ({
  title,
  bgImage,
  description,
  rootUrl,
}) => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`w-[100vw] h-[70vh] sm:w-[49%] sm:h-[50vh] flex flex-col items-center justify-start pt-10 gap-2 relative overflow-hidden`}
      style={{ background: "linear-gradient(to bottom, #000, #203adf30)" }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div
        className={`transform transition-transform duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "contain", // Asegura que la imagen mantenga la proporción
          backgroundPosition: "center", // Centrada horizontalmente y desplazada un 30% hacia abajo
          backgroundRepeat: "no-repeat",

          display: "flex", // Centrar la imagen si se usa un contenido adicional
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "1", // Relación 1:1 para la imagen
          position: "absolute",
          top: isMobile ? "0" : "20%",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: 10,
        }}
      ></div>
      <h1 className="w-[100vw] md:w-auto text-2xl 2xl:text-3xl text-white font-normal text-center z-50">
        {title}
      </h1>
      <p className="text-center text-xs md:w-1/2 z-50 w-3/4 ">{description}</p>
      {!isMobile ? (
        <div className="flex gap-5 justify-center">
          {" "}
          <button className="bg-primary text-white text-xs py-2 px-4 rounded-full shadow-lg shadow-[#203adf80] z-50">
            <a href={""}>Adquirir</a>
          </button>
          <button className=" text-white text-xs py-2 px-4 rounded-full shadow-sm border-2 border-white shadow-[#fff] z-50">
            <a href={`/ebooks#${rootUrl}`}>Detalles</a>
          </button>
        </div>
      ) : (
        <div className="flex gap-5 justify-center absolute bottom-10 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-30">
          <button className="bg-primary text-white text-lg py-2 px-4 rounded-full shadow-lg shadow-[#203adf80] z-50">
            <a href={""}>Adquirir</a>
          </button>
          <button className=" text-white text-lg py-2 px-4 rounded-full shadow-sm shadow-[#fff] z-50 border-2 border-white">
            <a href={`/ebooks#${rootUrl}`}>Detalles</a>
          </button>
        </div>
      )}
    </div>
  );
};
