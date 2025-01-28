"use client";
import React, { useEffect, useState } from "react";
import { RenderVideo } from "../../Components";
import { useIsMobile } from "@/app/Elements/hooks";
import Link from "next/link";
import { FaCreditCard } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import { useScrollBlock } from "@/app/Elements/hooks/globalHooks/ScrollBlockContext";

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
  cardPay: string;
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
  cardPay,
}) => {
  const [firstPlay, setFirstPlay] = useState(false); // Estado elevado
  const [opacityFoContent, setOpacityFoContent] = useState(false);
  const [playOrpause, setPlayOrpause] = useState(false);
  const isMobile = useIsMobile();
  const [adquirirMode, setAdquirirMode] = useState(false);
  const [opacityFoArquirirKey, setOpacityFoArquirirKey] = useState(false);
  const [resizeContentAdquirirMode, setResizeContentAdquirirMode] =
    useState(false);
  const { setScrollBlock } = useScrollBlock();
  const [btcComingSoon, setBtcComingSoon] = useState(false);

  useEffect(() => {
    // Controlar la opacidad del contenido basado en playOrpause
    if (playOrpause) {
      setOpacityFoContent(true); // Mostrar contenido
    } else {
      setOpacityFoContent(false); // Ocultar contenido
    }
  }, [playOrpause]);

  const handleAdquirirButton = () => {
    if (adquirirMode) {
      setOpacityFoArquirirKey(false);
      setResizeContentAdquirirMode(false);
      setTimeout(() => setAdquirirMode(false), 300);
    } else {
      setAdquirirMode(true);
    }
  };

  useEffect(() => {
    if (adquirirMode) {
      setTimeout(() => setResizeContentAdquirirMode(true), 100);
    } else {
      setResizeContentAdquirirMode(false);
    }
  }, [adquirirMode]);

  useEffect(() => {
    if (adquirirMode) {
      setTimeout(() => setOpacityFoArquirirKey(true), 300); // Optimizado tiempo
    } else {
      setOpacityFoArquirirKey(false);
    }
  }, [resizeContentAdquirirMode]);

  useEffect(() => {
    if (adquirirMode) {
      setScrollBlock(true);
    } else {
      setScrollBlock(false);
    }
  }, [adquirirMode]);

  return (
    <div
      className={`w-full h-full flex flex-col ${order === 1 ? "md:flex-row" : "md:flex-row-reverse"}`}
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
        } ${video ? "left-0" : ""} ${video ? "md:bg-transparent" : ""} w-full md:w-1/2 h-[60%] md:h-full flex flex-col items-start justify-start md:py-40 p-12 gap-3 md:gap-8 z-50 bg-black transition-all duration-700  bottom-0 md:bottom-auto md:top-0 md:right-0 ${video ? "md:bg-custom-gradient-left" : ""}`}
        style={{
          opacity: !isMobile ? (opacityFoContent ? 0 : 1) : 1,
          pointerEvents: video ? "none" : "auto",
          transform: opacityFoContent ? "translateY(20px)" : "translateY(0)",
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
            className={`bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 md:py-4  md:px-10 rounded-xl mt-6 md:text-xl transition-all duration-300 ease-in-out shadow-[0_0_10px_5px_rgb(202_138_4)] hover:shadow-[0_0_20px_10px_rgb(250_204_21)]`}
            onClick={handleAdquirirButton}
          >
            Adquirir
          </button>
        )}
      </div>

      {/* Botón absolutamente posicionado */}
      {video && (
        <button
          className={`bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl md:text-xl transition-all duration-[1s] ease-in-out shadow-[0_0_10px_5px_rgb(202_138_4)] hover:shadow-[0_0_20px_10px_rgb(250_204_21)] absolute bottom-32  left-12`}
          style={{ zIndex: 99 }}
          onClick={handleAdquirirButton}
        >
          Adquirir
        </button>
      )}

      {/* Pantalla de overlay */}
      <div
        className="w-screen h-screen fixed top-0 left-0 z-[99999] transition-all duration-300"
        style={{
          opacity: adquirirMode ? 1 : 0,
          pointerEvents: adquirirMode ? "auto" : "none",
          backdropFilter: "blur(5px)",
        }}
        onClick={handleAdquirirButton}
      >
        <div
          className="h-20 max-w-[28rem]  md:h-1/4 bg-[#000] absolute top-1/2 rounded-xl left-1/2 flex justify-center items-center overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            boxShadow: "0 0 10px #fff2",
            width: isMobile
              ? resizeContentAdquirirMode
                ? "90%"
                : "0"
              : resizeContentAdquirirMode
                ? "50%"
                : "0",
            transform: resizeContentAdquirirMode
              ? "translate(-50%,-50%) scale(1)"
              : "translate(-50%,-50%) scale(0.9)",
            padding: resizeContentAdquirirMode ? "1.25rem" : "0",
            gap: resizeContentAdquirirMode ? "1.25rem" : "0",
          }}
          onClick={(e) => e.stopPropagation()} // Detener propagación del clic
        >
          <Link
            href={cardPay}
            className="flex flex-col items-center justify-center w-1/2 h-full text-sm md:text-2xl font-bold text-white"
            style={{
              opacity: opacityFoArquirirKey ? 1 : 0,
              transform: opacityFoArquirirKey ? "scale(1)" : "scale(0)",
              transition: "all .3s ease",
              whiteSpace: "nowrap",
            }}
          >
            <FaCreditCard className="fill-white text-white" />
            pago con tarjeta
          </Link>

          <div
            className="w-[2px] h-[150%] bg-white rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            style={{
              boxShadow:
                "-30px 0px 50px 20px #00aaff, 30px 0px 50px 20px #f7931a",
            }}
          ></div>

          <div
            className="h-[300%] w-3/4 absolute -right-1/4 rotate-12 z-10 flex justify-center items-center transition-all duration-300 ease-in-out"
            style={{
              background: "#0006",
              backdropFilter: "blur(20px)",
              opacity: btcComingSoon ? 1 : 0,
            }}
          ></div>
          <div
            className="absolute w-1/2 h-full  right-0 top-0 z-20 flex justify-center items-center transition-all duration-1000 ease-in-out"
            onMouseEnter={() => setBtcComingSoon(true)}
            onMouseLeave={() => setBtcComingSoon(false)}
          >
            <h2
              className="text-white text-xl md:text-2xl font-bold trassition-all duration-300 ease-in-out"
              style={{ transform: btcComingSoon ? "scale(1)" : "scale(0)" }}
            >
              Proximamente...
            </h2>
          </div>

          <Link
            href={"/"}
            className="flex flex-col items-center justify-center w-1/2 h-full text-sm md:text-2xl font-bold text-white relative "
            style={{
              opacity: opacityFoArquirirKey ? 1 : 0,
              transform: opacityFoArquirirKey ? "scale(1)" : "scale(0)",
              transition: "all .3s ease",
              whiteSpace: "nowrap",
            }}
          >
            <FaBtc className="fill-white text-white" />
            pago con Bitcoin
          </Link>
        </div>
      </div>
    </div>
  );
};
