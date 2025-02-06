"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface BuyModeContextProps {
  active: boolean;
  urlCard: string;
  urlBtc: string;
  setActive: (active: boolean) => void;
  setUrlCard: (urlCard: string) => void;
  setUrlBtc: (urlBtc: string) => void;
}

const BuyModeContext = createContext<BuyModeContextProps | undefined>(
  undefined,
);

export const BuyModeProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<boolean>(false);
  const [urlCard, setUrlCard] = useState<string>("");
  const [urlBtc, setUrlBtc] = useState<string>("");

  return (
    <BuyModeContext.Provider
      value={{ active, urlCard, urlBtc, setActive, setUrlCard, setUrlBtc }}
    >
      {children}
    </BuyModeContext.Provider>
  );
};

export const useBuyMode = () => {
  const context = useContext(BuyModeContext);
  if (context === undefined) {
    throw new Error("useBuyMode must be used within a BuyModeProvider");
  }
  return context;
};
