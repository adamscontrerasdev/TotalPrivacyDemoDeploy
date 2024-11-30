"use client";
import { notFound } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import data from "./../../../public/data/products.json";

const ContentList = ({ params }: { params: Promise<{ type: string }> }) => {
  const [isScrolling, setIsScrolling] = useState(false); // Para controlar el debounce

  const { type } = use(params);
  const items = data[type as "ebooks" | "cursos"];

  if (!items) {
    notFound(); // Redirige a 404 si el tipo no es válido
  }

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return; // Previene ejecución si ya está en proceso

      const direction = e.deltaY > 0 ? 1 : -1; // Detecta scroll hacia abajo o arriba
      const currentSectionIndex = Math.round(
        window.scrollY / window.innerHeight,
      );

      let targetIndex = currentSectionIndex + direction;
      targetIndex = Math.max(0, Math.min(targetIndex, sections.length - 1)); // Limita el índice al rango válido

      const targetPosition = targetIndex * window.innerHeight;

      setIsScrolling(true); // Activa el debounce
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setTimeout(() => setIsScrolling(false), 1100); // Libera el debounce después de 800ms
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      className="left-0 w-full min-h-[100vh] top-0 flex flex-col justify-center items-center"
      style={{
        background:
          "radial-gradient(circle at center, rgba(32, 58, 223, 0.2) 10%, rgba(0, 0, 0, 0.85) 50%, black 100%)",
      }}
    >
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="section w-screen h-screen flex flex-col items-center justify-center"
            id={item.key}
          >
            <div className="w-full h-full flex flex-col md:flex-row-reverse">
              {/* Imagen */}
              <div className="w-full md:w-1/2 h-[50%] md:h-full bg-black relative">
                <img
                  src={item.Bg}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="w-full h-full absolute top-0 left-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.85) 100%)`,
                  }}
                ></div>
              </div>

              {/* Contenido */}
              <div className="w-full md:w-1/2 h-[50%] md:h-full bg-black flex flex-col items-start justify-center p-12 gap-8">
                <h1 className="text-6xl font-extrabold text-white leading-tight">
                  {item.title}
                </h1>
                <h2 className="text-3xl text-gray-300 leading-relaxed">
                  {item.description}
                </h2>
                <h2 className="text-5xl font-bold text-green-500">
                  <s className="text-gray-500 text-4xl">50</s> {item.price}{" "}
                  {item.currency}
                </h2>
                <button
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl mt-6 text-xl transition-all duration-300 ease-in-out shadow-[0_0_10px_5px_rgb(202_138_4)] 
                hover:shadow-[0_0_20px_10px_rgb(250_204_21)]"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ContentList;
