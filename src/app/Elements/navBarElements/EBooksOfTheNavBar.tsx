"use client";
import React, { useEffect, useState } from "react";
import { SiApple, SiWindows10, SiAndroid } from "react-icons/si";
import { RiBankFill } from "react-icons/ri";
import styles from "./ElementsNavBar.module.css";
import { GeneralCardOfNavbar } from "./../../Elements/index";
import dataOfEbooks from "./../../../../public/data/icoAndTitleOfTheNavBar.json";
import { TbDeviceImac } from "react-icons/tb";
import { useIsMobile } from "../hooks";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";

// Mapeo de nombres a componentes de react-icons
const iconMap: Record<string, React.ElementType> = {
  SiApple,
  TbDeviceImac,
  SiWindows10,
  SiAndroid,
  RiBankFill,
};

interface EBooksOfTheNavBarProps {
  isVisible?: boolean;
  duration?: number;
  closeMenu: () => void; // Nueva prop para cerrar el menú
}

export const EBooksOfTheNavBar: React.FC<EBooksOfTheNavBarProps> = ({
  isVisible,
  duration = 500,
  closeMenu,
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const isMobile = useIsMobile();
  // Validación para asegurarse de que dataOfCurso tenga el formato esperado
  const iconCards = Array.isArray(dataOfEbooks.EBooks)
    ? dataOfEbooks.EBooks
    : [];

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
      setTimeout(() => setIsAnimated(true), 100); // Iniciar animación con un pequeño delay
    } else {
      setIsAnimated(false);
      const timeout = setTimeout(
        () => setIsRendered(false),
        iconCards.length * 100 + duration
      );
      return () => clearTimeout(timeout);
    }
  }, [isVisible, duration, iconCards.length]);

  return (
    isRendered && (
      <div className="flex flex-col md:flex-row items-center justify-evenly w-3/4 absolute top-0 h-[95%] md:h-full text-text">
        {isMobile && (
          <Link href={"/ebooks"} onClick={closeMenu}>
            <div className="flex flex-col items-center justify-center">
              <LuMenu />
              <h3>Todos los E-Books</h3>
            </div>
          </Link>
        )}
        {iconCards.map(({ Icon, title, key }, index) => {
          const IconComponent = iconMap[Icon];
          if (!IconComponent) return null;

          const delay = isMobile
            ? isAnimated
              ? index * 20
              : (iconCards.length - 1 - index) * 20
            : isAnimated
              ? (iconCards.length - 1 - index) * 50
              : index * 50;

          return (
            <div
              key={index}
              className={`${styles.cardCurso} transition-opacity duration-200 cursor-pointer`}
              style={{
                opacity: isAnimated ? 1 : 0,
                transitionDelay: `${delay}ms`,
              }}
            >
              <Link href={`/ebooks#${key}`} onClick={closeMenu}>
                <GeneralCardOfNavbar ico={IconComponent} title={title} />
              </Link>
            </div>
          );
        })}
      </div>
    )
  );
};
