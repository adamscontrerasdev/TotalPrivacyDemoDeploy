// context/MobileContext.js
"use client";
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const MobileContext = createContext(false);

// Hook para acceder al contexto
export const useIsMobile = () => {
  return useContext(MobileContext);
};

interface MobileProviderProps {
  children: React.ReactNode;
}
// Proveedor del contexto
export const MobileProvider: React.FC<MobileProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Verificar al cargar la app
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};
