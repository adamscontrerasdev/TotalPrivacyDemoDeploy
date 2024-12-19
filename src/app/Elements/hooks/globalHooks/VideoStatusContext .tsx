// hooks/globalHooks/VideoStatusContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const VideoStatusContext = createContext<{
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  volume: number; // Agregar volumen al contexto
  setVolume: React.Dispatch<React.SetStateAction<number>>; // Función para actualizar el volumen
}>({
  isPlaying: false,
  setIsPlaying: () => {},
  volume: 100, // Valor inicial del volumen
  setVolume: () => {},
});

// Hook para acceder al contexto
export const useVideoStatus = () => useContext(VideoStatusContext);

// Proveedor del contexto
interface VideoStatusProviderProps {
  children: React.ReactNode;
}

export const VideoStatusProvider: React.FC<VideoStatusProviderProps> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100); // Estado global para el volumen

  return (
    <VideoStatusContext.Provider
      value={{ isPlaying, setIsPlaying, volume, setVolume }}
    >
      {children}
    </VideoStatusContext.Provider>
  );
};
