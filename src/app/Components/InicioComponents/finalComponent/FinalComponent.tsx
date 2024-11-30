"use client";
import React, { useState, useEffect, useRef } from "react";

export const FinalComponent = () => {
  const [encender, setEncender] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null); // Referencia al contenedor de 300vh

  const handleScroll = () => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      setEncender(rect.top <= 0); // Enciende cuando el contenedor llega a top 0
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className="flex flex-col items-center justify-start w-screen h-[300vh] bg-black relative"
    >
      <div
        className="w-screen h-[100vh] sticky top-0 flex flex-col justify-start items-start"
        style={{
          background: "#f00", // Color de fondo rojo
        }}
      >
        <div className="flex flex-col items-center justify-start pt-20 bg-black w-full h-full">
          <h1
            style={{
              textShadow: encender ? "var(--textShadow-glow)" : "none", // Efecto de neón cuando se activa
              color: encender ? "#fff" : "#222", // Cambio de color de texto
              transition: "color 0.5s ease, text-shadow 0.5s ease", // Transiciones suaves
            }}
            className="text-left text-6xl 2xl:text-8xl font-bold"
          >
            MASTER TOTAL PRIVACY
          </h1>
          <h2
            className="text-center text-md 2xl:text-md w-[50%] transition-all duration-500 ease-in-out"
            style={{ opacity: encender ? 1 : 0 }}
          >
            Conviértete en un experto en privacidad y seguridad digital con
            nuestro curso más avanzado y completo. Protege tu información,
            lidera el cambio y destaca en el mundo digital.
          </h2>
        </div>
      </div>
    </div>
  );
};
