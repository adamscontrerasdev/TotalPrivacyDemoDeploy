// hooks/globalHooks/ScrollBlockContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

// Crear el contexto para scrollBlock
const ScrollBlockContext = createContext<{
  scrollBlock: boolean;
  setScrollBlock: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  scrollBlock: false, // Valor inicial del scrollBlock
  setScrollBlock: () => {}, // Función vacía por defecto
});

// Hook para acceder al contexto
export const useScrollBlock = () => useContext(ScrollBlockContext);

// Proveedor del contexto
interface ScrollBlockProviderProps {
  children: React.ReactNode;
}

export const ScrollBlockProvider: React.FC<ScrollBlockProviderProps> = ({
  children,
}) => {
  const [scrollBlock, setScrollBlock] = useState(false);

  return (
    <ScrollBlockContext.Provider value={{ scrollBlock, setScrollBlock }}>
      {children}
    </ScrollBlockContext.Provider>
  );
};
