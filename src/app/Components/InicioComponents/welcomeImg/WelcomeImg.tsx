"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./welcomeImg.module.css";
import { RiArrowDownWideLine } from "react-icons/ri";
import { PersonalButton } from "@/app/Elements";

export const WelcomeImg: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const containerSubtitle2Ref = useRef<HTMLDivElement>(null);
  const subtitle2Ref = useRef<HTMLHeadingElement>(null);
  const buttonRefCursos = useRef<HTMLButtonElement>(null);
  const buttonRefEBooks = useRef<HTMLButtonElement>(null);
  const welcomeTextoRef = useRef<HTMLParagraphElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [subtitle2IsFullWidth, setSubtitle2IsFullWidth] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const progress = Math.min(scrollPosition / viewportHeight, 1) * 100;
    setScrollProgress(progress);

    updateTitleStyles(progress);
    updateContainerSubtitle2Styles(progress);
    updateSubtitle2Styles(progress);
    updateSubtitle(progress);
    updateButtonRefCursos(progress);
    updateButtonRefEBooks(progress);
    updateWelcomeTextoRef(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const updateTitleStyles = (scrollProgress: number) => {
    if (titleRef.current) {
      const scale = Math.min(1.3, 1 + scrollProgress / 300);
      const translateY = scrollProgress * 1.5;
      titleRef.current.style.transform = `translateY(${translateY}%) scale(${scale})`;
    }
  };

  const updateContainerSubtitle2Styles = (scrollProgress: number) => {
    if (containerSubtitle2Ref.current) {
      const scrollProgressNormalized = Math.min(window.scrollY / window.innerHeight, 1);
      const width = 100 * scrollProgressNormalized;
      const padding = 10 * scrollProgressNormalized;

      if (width === 100 && !subtitle2IsFullWidth) {
        setSubtitle2IsFullWidth(true);
      } else if (width !== 100 && subtitle2IsFullWidth) {
        setSubtitle2IsFullWidth(false);
      }

      if (width === 100) {
        const topOffset = 50 - (scrollProgressNormalized - 1) * 50;
        containerSubtitle2Ref.current.style.top = `${Math.max(topOffset, 0)}%`;
      }

      containerSubtitle2Ref.current.style.width = `${width}%`;
      containerSubtitle2Ref.current.style.padding = `${padding}px`;
    }
  };

  const updateSubtitle2Styles = (scrollProgress: number) => {
    if (subtitle2Ref.current) {
      const scale = Math.min(1.3, 1 + scrollProgress / 300);
      const translateY = scrollProgress * 10;
      subtitle2Ref.current.style.transform = `translateY(-${translateY}%) scale(${scale})`;
    }
  };

  const updateSubtitle = (scrollProgress: number) => {
    if (subtitleRef.current) {
      const scale = Math.min(1.3, 1 + scrollProgress / 300);
      const opacity = 1 - scrollProgress / 100;
      subtitleRef.current.style.opacity = `${opacity}`;
      subtitleRef.current.style.transform = `scale(${scale})`;
    }
  };

  const updateButtonRefCursos = (scrollProgress: number) => {
    if (buttonRefCursos.current) {
      const opacity = Math.min(scrollProgress / 100, 1);
      buttonRefCursos.current.style.opacity = `${opacity}`;
      if (scrollProgress <= 0) {
        buttonRefCursos.current.style.opacity = "0";
      }
    }
  };

  const updateButtonRefEBooks = (scrollProgress: number) => {
    if (buttonRefEBooks.current) {
      const opacity = Math.min(scrollProgress / 100, 1);
      buttonRefEBooks.current.style.opacity = `${opacity}`;
      if (scrollProgress <= 0) {
        buttonRefEBooks.current.style.opacity = "0";
      }
    }
  };

  const updateWelcomeTextoRef = (scrollProgress: number) => {
    if (welcomeTextoRef.current) {
      const opacity = Math.min(scrollProgress / 100, 1);
      const topValue = Math.max(100 - scrollProgress, 0);
      welcomeTextoRef.current.style.opacity = `${opacity}`;
      welcomeTextoRef.current.style.top = `${topValue}%`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-3rem)] bg-black z-0 top-12 fixed">
      <div className="flex flex-col items-center justify-center w-screen h-screen relative">
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black backdrop-blur-sm z-0 ${styles.bgShadowBlur}`}
        ></div>

        <h1
          ref={titleRef}
          className={`font-bold text-5xl md:text-8xl lg:text-[12rem] text-foreground z-10 ${styles.title}`}
        >
          TOTAL PRIVACY
        </h1>

        <h2 className="text-foreground relative z-10 text-lg" ref={subtitleRef}>
          Privacidad al alcance de todo el mundo
        </h2>

        <div
          className={`w-0 p-0 absolute h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex flex-col items-center justify-center overflow-hidden `}
          ref={containerSubtitle2Ref}
        >
          <h2
            className={`text-3xl text-white ${styles.title}`}
            style={{
              position: "relative",
              width: "1920px",
              whiteSpace: "nowrap",
              textAlign: "center",
              overflow: "hidden",
            }}
            ref={subtitle2Ref}
          >
            ¿Es momento de cambiar tu vida?
          </h2>
        </div>

        <div
          className={`${styles.welcomeTexto} w-full h-[65vh] absolute top-[100%] left-0 z-10 flex justify-center items-center `}
          ref={welcomeTextoRef}
        >
          <p
            className={`text-white text-center text-2xl w-[55vw] opacity-1 ${styles.title}`}
          >
            ¡Descubre cómo navegar de manera segura y proteger tu privacidad en línea! En Total Privacy, te ofrecemos recursos y cursos diseñados para enseñarte las mejores prácticas en la web. Aprende a proteger tu información personal, navegar de forma anónima y manejar tus redes sociales con total seguridad. Tu privacidad es lo más importante, y queremos ayudarte a mantenerla intacta. ¡Explora nuestros cursos y E-books y toma el control de tu seguridad en línea!
          </p>
        </div>

        <div
          className={`${styles.buttons} p-5 flex gap-10 items-end justify-center w-full h-[60vh] absolute top-0 left-0 z-10`}
        >
          <PersonalButton
            value="Ver cursos"
            color="white"
            ref={buttonRefCursos}
            className="opacity-0"
          />
          <PersonalButton
            value="Ver E-Books"
            color="white"
            ref={buttonRefEBooks}
            className="opacity-0"
          />
        </div>

        <div
          className={`absolute bottom-64 md:bottom-10 left-0 w-full flex flex-col items-center justify-center z-10 ${styles.arrowDownWideLineContainer}`}
        >
          <RiArrowDownWideLine
            className={`text-foreground w-12 h-12 animate-bounce ${styles.arrowDownWideLine}`}
          />
        </div>
      </div>
    </div>
  );
};
