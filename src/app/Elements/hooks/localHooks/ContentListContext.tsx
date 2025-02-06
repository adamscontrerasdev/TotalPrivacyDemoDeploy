"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

// Definir el tipo del contexto
interface ContentListContextType {
  filter: boolean;
  setFilter: (value: boolean) => void;
}

// Crear el contexto
const ContentListContext = createContext<ContentListContextType | undefined>(
  undefined,
);

// Hook personalizado para usar el contexto
export const useContentList = () => {
  const context = useContext(ContentListContext);
  if (!context) {
    throw new Error(
      "useContentList debe usarse dentro de un ContentListProvider",
    );
  }
  return context;
};

// Proveedor del contexto
export const ContentListProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<boolean>(false);

  return (
    <ContentListContext.Provider value={{ filter, setFilter }}>
      {children}
    </ContentListContext.Provider>
  );
};
