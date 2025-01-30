"use client";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Switch } from "../Switch/Switch";
import React from "react";

export const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideMenuIcon, setHideMenuIcon] = useState(false);
  let hoverTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => setHideMenuIcon(true), 300);
      return () => clearTimeout(timeout); // Limpia si `isOpen` cambia antes de los 300ms
    } else {
      setHideMenuIcon(false);
    }
  }, [isOpen]);

  const handleMouseLeave = () => {
    if (isOpen) {
      hoverTimeout = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleClick = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout); // Evita el cierre si el usuario vuelve a interactuar antes de 300ms
    }
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out fixed md:bottom-3 md:top-auto top-20 left-1/2 -translate-x-1/2 
      -translate-y-1/2 bg-white/10 rounded-full ${isOpen ? "md:w-1/4" : "md:w-14"}  ${isOpen ? "w-[90%]" : "w-14"}
      opacity-30 hover:opacity-100 h-14 z-[99999] backdrop-blur-lg border border-white/20 shadow-lg `}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: isOpen ? "1.25rem" : "0",
        gap: "1rem",
      }}
    >
      <h2
        className={`text-lg text-[#007AFF] font-bold ${isOpen ? "opacity-100" : "opacity-0"} transition-all ease-in-out ${isOpen ? "duration-1000" : "duration-200"}`}
      >
        Ver solo productos activos
      </h2>
      <Switch isOpen={isOpen} />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 l rounded-full text-3xl text-white cursor-pointer"
        onClick={handleClick}
        style={{ pointerEvents: hideMenuIcon ? "none" : "auto" }}
      >
        <IoIosMenu
          className={`transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        />
      </div>
    </div>
  );
};
