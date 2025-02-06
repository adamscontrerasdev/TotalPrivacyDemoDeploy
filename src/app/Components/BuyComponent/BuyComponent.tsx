"use client";

import { useBuyMode } from "@/app/Elements/hooks/globalHooks/BuyModeContext";
import { useScrollBlock } from "@/app/Elements/hooks/globalHooks/ScrollBlockContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBtc, FaCreditCard } from "react-icons/fa6";
import { useIsMobile } from "@/app/Elements/hooks";

export const BuyComponent = () => {
  const { setActive, active, setUrlCard, setUrlBtc, urlCard, urlBtc } =
    useBuyMode();
  const { setScrollBlock } = useScrollBlock();
  const isMobile = useIsMobile();
  const [btcComingSoon, setBtcComingSoon] = useState(false);
  const pathname = usePathname(); // Hook para obtener la ruta actual

  useEffect(() => {
    // Bloquear o desbloquear scroll en función del estado de "active"
    if (active) {
      document.body.style.overflow = "hidden";
      setScrollBlock(true);
    } else {
      document.body.style.overflow = "";
      setScrollBlock(false);
    }

    // Asegurarse de limpiar el estilo al desmontar el componente
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    // Cuando la URL cambia, limpia el estado global
    setActive(false);
    setUrlCard("");
    setUrlBtc("");
  }, [pathname, setActive, setUrlCard, setUrlBtc]);

  const handleOverlayClick = () => {
    // Cierra el modal y resetea los valores
    setActive(false);
    setUrlCard("");
    setUrlBtc("");
  };

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-[999999] transition-all duration-300 bg-[#0009]"
      style={{
        opacity: active ? 1 : 0,
        pointerEvents: active ? "auto" : "none",
        backdropFilter: "blur(5px)",
      }}
      onClick={handleOverlayClick} // Manejador de clic para el overlay
    >
      <div
        className="h-20 max-w-[28rem] md:h-1/5 bg-[#000] absolute top-1/2 rounded-xl left-1/2 flex justify-center items-center overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          boxShadow: "0 0 10px #fff2",
          width: active ? (isMobile ? "90%" : "50%") : "0",
          transform: active
            ? "translate(-50%,-50%) scale(1)"
            : "translate(-50%,-50%) scale(0.9)",
          padding: active ? "1.25rem" : "0",
          gap: active ? "1.25rem" : "0",
        }}
        onClick={(e) => e.stopPropagation()} // Evitar que el clic cierre el overlay
      >
        {/* Pago con tarjeta */}
        <Link
          href={urlCard}
          className="flex flex-col items-center justify-center w-1/2 h-full text-sm md:text-xl font-bold text-white"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "scale(1)" : "scale(0)",
            transition: "all .3s ease",
            whiteSpace: "nowrap",
          }}
        >
          <FaCreditCard className="fill-white text-white" />
          Pago con tarjeta
        </Link>

        {/* Separador estilizado */}
        <div
          className="w-[2px] h-[150%] bg-white rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          style={{
            boxShadow:
              "-30px 0px 50px 20px #00aaff, 30px 0px 50px 20px #f7931a",
          }}
        ></div>

        {/* Fondo "Próximamente..." */}
        <div
          className="h-[300%] w-3/4 absolute -right-1/4 rotate-12 z-10 flex justify-center items-center transition-all duration-300 ease-in-out"
          style={{
            background: "#0006",
            backdropFilter: "blur(20px)",
            opacity: btcComingSoon ? 1 : 0,
          }}
        ></div>
        <div
          className="absolute w-1/2 h-full right-0 top-0 z-20 flex justify-center items-center transition-all duration-1000 ease-in-out"
          onMouseEnter={() => setBtcComingSoon(true)}
          onMouseLeave={() => setBtcComingSoon(false)}
        >
          <h2
            className="text-white text-xl md:text-2xl font-bold transition-all duration-300 ease-in-out"
            style={{ transform: btcComingSoon ? "scale(1)" : "scale(0)" }}
          >
            Próximamente...
          </h2>
        </div>

        {/* Pago con Bitcoin */}
        <Link
          href={urlBtc}
          className="flex flex-col items-center justify-center w-1/2 h-full text-sm md:text-xl font-bold text-white"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "scale(1)" : "scale(0)",
            transition: "all .3s ease",
            whiteSpace: "nowrap",
          }}
        >
          <FaBtc className="fill-white text-white" />
          Pago con Bitcoin
        </Link>
      </div>
    </div>
  );
};
