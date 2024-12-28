"use client";
import React, { createContext, useContext, useCallback } from "react";

interface ScrollContextProps {
  toggleBodyScroll: (enable: boolean) => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const toggleBodyScroll = useCallback((enable: boolean) => {
    document.body.style.overflow = enable ? "auto" : "hidden";
  }, []);

  return (
    <ScrollContext.Provider value={{ toggleBodyScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
