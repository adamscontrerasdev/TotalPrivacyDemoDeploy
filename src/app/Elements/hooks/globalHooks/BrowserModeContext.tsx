"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface BrowserModeContextProps {
  browserMode: boolean;
  setBrowserMode: (mode: boolean) => void;
}

const BrowserModeContext = createContext<BrowserModeContextProps | undefined>(
  undefined,
);

export const BrowserModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [browserMode, setBrowserMode] = useState<boolean>(false);

  return (
    <BrowserModeContext.Provider value={{ browserMode, setBrowserMode }}>
      {children}
    </BrowserModeContext.Provider>
  );
};

export const useBrowserMode = (): BrowserModeContextProps => {
  const context = useContext(BrowserModeContext);
  if (!context) {
    throw new Error("useBrowserMode must be used within a BrowserModeProvider");
  }
  return context;
};
