"use client";
import React, { useEffect, useState } from "react";
import { SiApple, SiWindows10, SiAndroid, SiBitcoinsv } from "react-icons/si";
import { TbDeviceImac } from "react-icons/tb";
import styles from "./ElementsNavBar.module.css";
import { GeneralCardOfNavbar } from "./../../Elements/index";
import dataOfCurso from "./../../../../public/data/icoAndTitleOfTheNavBar.json";
import { useIsMobile } from "../hooks";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";

// Mapping icon names to react-icons components
const iconMap: Record<string, React.ElementType> = {
  SiApple,
  TbDeviceImac,
  SiWindows10,
  SiAndroid,
  SiBitcoinsv,
};

interface CursoOfTheNavBarProps {
  isVisible?: boolean;
  duration?: number;
}

export const CursoOfTheNavBar: React.FC<CursoOfTheNavBarProps> = ({
  isVisible,
  duration = 200, // reduce duración
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const isMobile = useIsMobile();

  const iconCards = Array.isArray(dataOfCurso.curso) ? dataOfCurso.curso : [];

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
      setTimeout(() => setIsAnimated(true), 50); // Inicia fade-in rápidamente
    } else {
      setIsAnimated(false);
      const timeout = setTimeout(
        () => setIsRendered(false),
        iconCards.length * 50 + duration, // tiempo reducido para fade-out completo
      );
      return () => clearTimeout(timeout);
    }
  }, [isVisible, duration, iconCards.length]);

  return (
    isRendered && (
      <div className="flex flex-col md:flex-row items-center justify-evenly w-3/4  text-text  absolute top-0 h-[95%] md:h-full ">
        {isMobile && (
          <div className="flex flex-col items-center justify-center">
            <LuMenu />
            <h3>Todos los cursos</h3>
          </div>
        )}

        {iconCards.map(({ Icon, title, key }, index) => {
          const IconComponent = iconMap[Icon];
          if (!IconComponent) return null;

          // Reduce el delay para una desaparición más rápida
          const delay = isMobile
            ? isAnimated
              ? index * 20 // Aparece de izquierda a derecha con menor delay
              : (iconCards.length - 1 - index) * 20
            : isAnimated
              ? index * 50 // Aparece de izquierda a derecha con menor delay
              : (iconCards.length - 1 - index) * 50; // Desaparece de derecha a izquierda
          return (
            <div
              key={index}
              className={`${styles.cardCurso} transition-opacity duration-200 cursor-pointer`}
              style={{
                opacity: isAnimated ? 1 : 0,
                transitionDelay: `${delay}ms`,
              }}
            >
              <Link href={`/cursos#${key}`}>
                <GeneralCardOfNavbar ico={IconComponent} title={title} />
              </Link>
            </div>
          );
        })}
      </div>
    )
  );
};
