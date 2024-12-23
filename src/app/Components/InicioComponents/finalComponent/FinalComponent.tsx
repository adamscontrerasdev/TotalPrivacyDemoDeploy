"use client";
import React, { useState, useEffect, useRef } from "react";
import { master } from "./../../../../../public/data/products.json";
import Link from "next/link";
import { useIsMobile } from "@/app/Elements/hooks";

export const FinalComponent = () => {
  const [encender, setEncender] = useState(false);
  const [viewButtons, setViewButtons] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const masterProduct = master;
  const imagenPromocional = masterProduct
    ? masterProduct.imagenPromocional
    : "";

  const handleScroll = () => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      setEncender(rect.top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (encender) {
      setTimeout(() => {
        setViewButtons(true);
      }, 500);
    } else {
      setViewButtons(false);
    }
  }, [encender]);

  return (
    <div
      ref={parentRef}
      className="flex flex-col items-center justify-start w-screen h-[300vh] bg-black relative"
    >
      <div
        className="w-screen h-[100vh] sticky top-0 flex flex-col justify-start items-start gap-10"
        style={{
          background: "#f00",
        }}
      >
        <div
          className="flex flex-col items-center justify-start pt-20 bg-black w-full h-full transition-all duration-300 ease-in-out"
          style={{ gap: encender ? (isMobile ? "2.5rem" : "1rem") : "0" }}
        >
          <h1
            style={{
              textShadow: encender ? "var(--textShadow-glow)" : "none",
              color: encender ? "#fff" : "#222",
              transition: "color 0.5s ease, text-shadow 0.5s ease",
            }}
            className="text-left text-3xl md:text-6xl lg:text-8xl font-bold "
          >
            MASTER TOTAL PRIVACY
          </h1>
          <h2
            className="text-center text-sm md:text-md w-[80%] md:w-[50%] transition-all duration-500 ease-in-out "
            style={{
              opacity: encender ? 1 : 0,
              height: encender ? "10%" : "0",
            }}
          >
            Conviértete en un experto en privacidad y seguridad digital con
            nuestro curso más avanzado y completo. Protege tu información,
            lidera el cambio y destaca en el mundo digital.
          </h2>
          <div className="w-[80%] xl:w-[60%] rounded-3xl overflow-hidden relative">
            <img
              src={imagenPromocional}
              alt="Promocional"
              className="w-full h-full transition-all duration-300 ease-in-out"
              style={{ filter: encender ? "" : "grayscale(100%)" }}
            />
            <div
              className=" bg-black w-full h-full absolute top-0 left-0 z-10"
              style={{
                background: "linear-gradient(to right,#000, transparent, #000)",
              }}
            ></div>
          </div>
          <div
            className="flex flex-col md:flex-row gap-10 justify-around min-w-[10%] items-center transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: viewButtons ? 1 : 0,
              transitionDuration: viewButtons ? "1000ms" : "300ms",
            }}
          >
            <Link href="/cursos">
              <button className="bg-primary text-white text-lg xl:text-xl py-2 px-4 rounded-full shadow-lg shadow-[#203adf80] z-50">
                Adquirir
              </button>
            </Link>
            <Link href="/cursos">
              <button className="text-white text-lg xl:text-xl py-2 px-4 rounded-full shadow-sm border-2 border-white shadow-[#fff] z-50">
                Detalles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
