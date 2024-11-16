"use client";
import React, { useEffect, useState } from "react";
import { PersonalButton } from "../../Elements/index"; // Asumiendo que tu botón personal está aquí
import style from "./containerOfButtonPrueba.module.css";

export const InicioScreen = () => {
  const [scrollProgress, setScrollProgress] = useState(0); // Estado para controlar el progreso del scroll

  // Función que maneja el scroll y actualiza el progreso
  const handleScroll = () => {
    // Obtener el progreso del scroll basado en la altura total de la página
    const scrollTop = window.scrollY; // Posición de desplazamiento vertical
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight; // Altura total del documento
    const scrollPercentage = (scrollTop / docHeight) * 300; // Porcentaje de desplazamiento
    setScrollProgress(scrollPercentage); // Actualizar el estado con el porcentaje
  };

  useEffect(() => {
    // Agregar el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-screen flex flex-col items-center justify-center ${style.container}`}
    >
      {/* Aquí pasamos el progreso del scroll como una prop para controlarlo */}
      <PersonalButton scrollProgress={scrollProgress} />
    </div>
  );
};
