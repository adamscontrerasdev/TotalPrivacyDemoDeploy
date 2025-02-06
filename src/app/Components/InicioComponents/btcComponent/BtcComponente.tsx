"use client";
import React from "react";
import data from "../../../../../public/data/products.json";
import Link from "next/link";
import { useIsMobile } from "@/app/Elements/hooks";

export const BtcComponente = () => {
  const DataOfCursosDestacados = data.cursos;
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center gap-5 justify-center w-screen min:h-[50vh] p-5 ">
      <h1
        className="font-bold text-4xl md:text-[3.5rem] text-white md:text-left w-full py-3 md:p-10 md:px-16  text-center"
        style={{
          textShadow: "0 0 5px #ffffff, 0 0 30px var(--provicional-color)",
        }}
      >
        CURSOS DESTACADOS
      </h1>
      {DataOfCursosDestacados.map((data) =>
        data.Destacado ? ( // No es necesario comparar con `true`
          <Link href={`/cursos/#${data.key}`} key={data.id}>
            <div
              key={data.id} // Siempre incluye una key única para elementos mapeados
              className="w-[80vw] rounded-lg overflow-hidden h-60 flex justify-center items-center flex-col  text-white relative hover:scale-95 transition-all duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${data.Bg})`, // Usa el campo `Bg` del objeto actual
                backgroundSize: isMobile ? "100% 100%" : "100%", // Escala la imagen para que cubra completamente el div
                backgroundPosition: "center", // Centra la imagen en el div
                backgroundRepeat: "no-repeat", // Evita que la imagen se repita
              }}
            >
              <div
                className="w-full h-full top-0 left-0 absolute bg-black/70 flex flex-col items-center justify-center"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <h1 className="md:text-6xl text-3xl text-white">
                  {data.title}
                </h1>{" "}
                {/* Usa el campo `title` del objeto actual */}
                <p className="text-white md:text-base text-xs text-center md:w-auto w-3/4">
                  {data.description}
                </p>{" "}
              </div>

              {/* Usa el campo `description` del objeto actual */}
            </div>
          </Link>
        ) : null,
      )}
    </div>
  );
};
