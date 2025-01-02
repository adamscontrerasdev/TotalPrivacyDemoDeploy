"use client";
import React, { createContext, useContext, useCallback, useState } from "react";

interface ScrollContextProps {
  isScrollDisabled: boolean;
  setScrollDisabled: (disabled: boolean) => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isScrollDisabled, setIsScrollDisabled] = useState<boolean>(false);

  const setScrollDisabled = useCallback((disabled: boolean) => {
    setIsScrollDisabled(disabled);
    document.body.style.overflow = disabled ? "hidden" : "auto";
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrollDisabled, setScrollDisabled }}>
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
