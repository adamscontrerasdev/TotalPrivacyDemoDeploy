"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define la forma de los datos que manejarás en el contexto
interface ActiveContextProps {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

// Crea el contexto con un valor inicial vacío
const ActiveContext = createContext<ActiveContextProps | undefined>(undefined);

// Proveedor para envolver tu aplicación
export const ActiveContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useGlobalContext = () => {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error(
      "useGlobalContext debe ser usado dentro de un GlobalProvider",
    );
  }
  return context;
};
