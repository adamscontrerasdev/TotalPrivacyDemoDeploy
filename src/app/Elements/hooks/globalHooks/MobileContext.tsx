// hooks/useDevice.tsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const MobileContext = createContext(false);

// Hook para acceder al contexto
export const useIsMobile = () => {
  return useContext(MobileContext);
};

interface MobileProviderProps {
  children: React.ReactNode;
  initialMobileState: boolean; // Pasar el estado inicial desde el servidor
}

// Proveedor del contexto
export const MobileProvider: React.FC<MobileProviderProps> = ({
  children,
  initialMobileState,
}) => {
  const [isMobile, setIsMobile] = useState(initialMobileState);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};
