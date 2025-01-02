"use client";
import React, { useEffect, useState } from "react";
import { RenderVideo } from "../../Components";
import { useIsMobile } from "@/app/Elements/hooks";

interface CardOFProductProps {
  title: string;
  price: number;
  currency: string;
  Bg: string;
  video?: string;
  description: string;
  before: number;
  order: number;
  poster?: string;
}

export const CardOFProduct: React.FC<CardOFProductProps> = ({
  title,
  price,
  currency,
  Bg,
  video,
  description,
  before,
  order,
  poster,
}) => {
  const [firstPlay, setFirstPlay] = useState(false); // Estado elevado
  const [opacityFoContent, setOpacityFoContent] = useState(false);
  const [playOrpause, setPlayOrpause] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Controlar la opacidad del contenido basado en playOrpause
    if (playOrpause) {
      setTimeout(() => setOpacityFoContent(true), 800); // Ocultar contenido
    } else {
      setTimeout(() => setOpacityFoContent(false), 800); // Mostrar contenido
    }
  }, [playOrpause]);

  return (
    <div
      className={`w-full h-full flex flex-col ${
        order === 1 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ background: `radial-gradient(at top, #000, #203adf30 )` }}
    >
      {/* Imagen o Video */}
      <div
        className={`w-full md:w-1/2 h-[40%] md:h-full ${video ? "" : "relative"}`}
      >
        {video && poster ? (
          <RenderVideo
            video={video}
            poster={poster}
            firstPlay={firstPlay}
            setFirstPlay={setFirstPlay}
            setPlayOrpause={setPlayOrpause}
          />
        ) : (
          <>
            <img
              src={Bg}
              alt={title}
              className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-[40%] md:-translate-y-[50%] "
            />
            <div
              className="w-full h-full absolute top-0 left-0"
              style={{
                background: `linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.85) 100%)`,
              }}
            ></div>
          </>
        )}
      </div>
      {/* Contenido */}
      <div
        className={`${
          video ? "absolute" : ""
        } ${video ? "left-0" : ""} ${video ? "md:bg-transparent" : ""} w-full md:w-1/2 h-[60%] md:h-full flex flex-col items-start justify-start md:py-40 p-12 gap-3 md:gap-8 z-50 bg-black transition-all linear duration-700  bottom-0 md:bottom-auto md:top-0 md:right-0 ${
          video ? "md:bg-custom-gradient-left" : ""
        }`}
        style={{
          opacity: !isMobile ? (opacityFoContent ? 0 : 1) : 1,
          pointerEvents: video ? "none" : "auto",
        }}
      >
        <h1 className="text-2xl md:text-6xl font-extrabold text-white leading-tight">
          {title}
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-300 leading-relaxed">
          {description}
        </h2>
        <h2 className="text-xl md:text-5xl font-bold text-green-500">
          <s className="text-gray-500 text-lg md:text-4xl">
            {before && currency + before}
          </s>{" "}
          {currency}
          {price}
        </h2>

        {video ? (
          <div className="w-full">
            <button className="mt-6 py-4 px-10 text-black">Adquirir</button>
          </div>
        ) : (
          <button
            className={`bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 md:py-4  md:px-10 rounded-xl mt-6 md:text-xl transition-all duration-300 ease-in-out shadow-[0_0_10px_5px_rgb(202_138_4)] 
                hover:shadow-[0_0_20px_10px_rgb(250_204_21)]`}
          >
            Adquirir
          </button>
        )}
      </div>

      {/* Botón absolutamente posicionado */}
      {video && (
        <button
          className={`bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl md:text-xl transition-all duration-[1s] ease-in-out shadow-[0_0_10px_5px_rgb(202_138_4)] 
                hover:shadow-[0_0_20px_10px_rgb(250_204_21)]
                absolute bottom-32  left-12`}
          style={{
            zIndex: 99,
          }}
        >
          Adquirir
        </button>
      )}
    </div>
  );
};
