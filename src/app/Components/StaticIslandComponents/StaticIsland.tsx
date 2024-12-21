"use client";
import React from "react";
import styles from "./styles.module.css";
import { useVideoStatus } from "@/app/Elements/hooks/globalHooks/VideoStatusContext ";
import { useIsMobile } from "@/app/Elements/hooks";

interface StaticIslandProps {
  items: { key: string }[];
  activeCircle: string;
}

export const StaticIsland: React.FC<StaticIslandProps> = ({
  items,
  activeCircle,
}) => {
  const isMobile = useIsMobile();
  const { isPlaying, volume, setVolume } = useVideoStatus(); // Obtener volumen y setVolume del contexto

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value)); // Actualizar el volumen global
  };

  return (
    <div
      className={`w-5 md:w-11 h-32 md:h-60 bg-[#000] rounded-full fixed top-1/2 right-0 -translate-y-1/2 flex flex-col justify-evenly items-center ${!isMobile ? styles.padreCircles : ""}`}
      style={{
        borderRadius: "20px 0 0 20px",
        boxShadow: "0 0 10px #fff3",
        zIndex: 999,
      }}
    >
      {isPlaying ? (
        <div className="flex flex-col items-center">
          {/* Input de rango para controlar el volumen */}
          <input
            type="range"
            min="0"
            max="100"
            value={volume} // Usa el volumen del contexto
            step="0.1" // Ajuste fino para mayor fluidez
            onChange={handleVolumeChange} // Manejador para actualizar el volumen
            className="w-40 transition-all duration-500 z-40 relative"
            style={{
              appearance: "none",
              height: "2px",
              background: `linear-gradient(to right, #333, #f2f2f2 ${volume}%, #333 ${volume}%)`, // Gradiente ajustable
              borderRadius: "5px",
              outline: "none",
              transform: "rotate(270deg)",
            }}
          />
          <style>{`
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              width: 10px; /* Tamaño del círculo */
              height: 10px;
              background: #f2f2f2; /* Color del círculo */
              border-radius: 50%; /* Forma circular */
              cursor: pointer;
            }
            input[type="range"]::-moz-range-thumb {
              width: 10px; /* Tamaño del círculo */
              height: 10px;
              background: #f2f2f2; /* Color del círculo */
              border-radius: 50%; /* Forma circular */
              cursor: pointer;
            }
          `}</style>
        </div>
      ) : (
        items.map((item) => (
          <a href={`#${item.key}`} key={item.key}>
            <div
              className={`rounded-full transition-all duration-500 ${
                activeCircle === item.key
                  ? "bg-yellow-500 w-[.4em] h-[.4em] md:w-[.8em] md:h-[.8em]"
                  : "bg-[#707073] w-[.2em] h-[.2em] md:w-[.3em] md:h-[.3em]"
              }`}
            ></div>
          </a>
        ))
      )}
    </div>
  );
};
