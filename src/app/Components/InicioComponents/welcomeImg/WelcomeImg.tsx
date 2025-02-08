"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./welcomeImg.module.css";
import { RiArrowDownWideLine } from "react-icons/ri";
import { PersonalButton } from "@/app/Elements";
import { useIsMobile } from "@/app/Elements/hooks";
import CelComponent from "./CelComponent";
import Link from "next/link";

export const WelcomeImg: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const containerSubtitle2Ref = useRef<HTMLDivElement>(null);
  const subtitle2Ref = useRef<HTMLHeadingElement>(null);
  const buttonRefCursos = useRef<HTMLButtonElement>(null);
  const buttonRefEBooks = useRef<HTMLButtonElement>(null);
  const welcomeTextoRef = useRef<HTMLParagraphElement>(null);
  const imgFirmaRef = useRef<HTMLImageElement>(null);
  const containerBestSellingTemplateRef = useRef<HTMLDivElement>(null);
  const [subtitle2IsFullWidth, setSubtitle2IsFullWidth] = useState(false);
  const fatherContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [notBounce, setNotBounce] = useState(false);

  let lastScrollProgress = 0;

  const updateTitleStyles = useCallback((scrollProgress: number) => {
    if (titleRef.current) {
      const screenWidth = window.innerWidth;
      const isNotebookSize = screenWidth >= 1440 && screenWidth <= 1536;
      const isMidleSize = screenWidth >= 720 && screenWidth <= 1440;

      const scale = Math.max(0.3, 1 - scrollProgress / 20);

      const translateX = isNotebookSize
        ? Math.min(550, scrollProgress * 10)
        : isMidleSize
          ? Math.min(0, scrollProgress * 15)
          : Math.min(700, scrollProgress * 50);

      const translateY = isNotebookSize
        ? Math.min(300, scrollProgress * 5)
        : isMidleSize
          ? Math.min(370, scrollProgress * 5)
          : Math.min(450, scrollProgress * 5);
      if (
        (isNotebookSize && translateX >= 1000 && translateY >= 1000) ||
        (!isNotebookSize && translateX >= 700 && translateY >= 400)
      ) {
        return;
      }

      titleRef.current.style.transform = `translate(-${translateX}px, ${translateY}px) scale(${scale})`;

      const newText = scrollProgress > 50 ? "BEST SELLERS" : "TOTAL PRIVACY";

      if (
        titleRef.current.innerText !== newText &&
        scrollProgress !== lastScrollProgress
      ) {
        titleRef.current.classList.add(
          styles.titleTotalPrivacyFoanimation,
          styles.titleWithClipEffect,
        );

        setTimeout(() => {
          if (titleRef.current) {
            titleRef.current.innerText = newText;

            setTimeout(() => {
              if (titleRef.current) {
                titleRef.current.classList.remove(
                  styles.titleTotalPrivacyFoanimation,
                  styles.titleWithClipEffect,
                );
              }
            }, 300);
          }
        }, 200);
      }

      lastScrollProgress = scrollProgress;
    }
  }, []);

  const updateContainerSubtitle2Styles = useCallback(() => {
    if (containerSubtitle2Ref.current) {
      const scrollProgressNormalized = Math.min(
        window.scrollY / window.innerHeight,
        1,
      );
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
  }, [subtitle2IsFullWidth]);

  const updateSubtitle2Styles = (scrollProgress: number) => {
    if (subtitle2Ref.current) {
      // Consulta el ancho de la pantalla
      const screenWidth = window.innerWidth;

      // Ajusta el factor multiplicador según el ancho de la pantalla
      const multiplier = screenWidth < 1080 ? 10 : 8;

      const scale = Math.min(1.3, 1 + scrollProgress / 300);
      const translateY = scrollProgress * multiplier;

      subtitle2Ref.current.style.transform = `translateY(-${translateY}%) scale(${scale})`;
    }
  };

  const updateSubtitle = (scrollProgress: number) => {
    if (subtitleRef.current) {
      const scale = Math.min(1.3, 1 + scrollProgress / 300);
      const opacity = 1 - scrollProgress / 50;
      subtitleRef.current.style.opacity = `${opacity}`;
      subtitleRef.current.style.transform = `scale(${scale})`;
    }
  };
  // const updateButtonRefCursos = (scrollProgress: number) => {
  //   if (buttonRefCursos.current) {
  //     const opacity = Math.min(scrollProgress / 100, 1);
  //     const fullOpacity = scrollProgress >= 100;
  //     const topValue = Math.max(100 - scrollProgress, 0);

  //     buttonRefCursos.current.style.opacity = fullOpacity
  //       ? `${1}`
  //       : `${opacity}`;

  //     buttonRefCursos.current.style.top = `${topValue}%`;

  //     buttonRefCursos.current.style.transition = fullOpacity
  //       ? "opacity 1s ease, top 0.5s ease"
  //       : "opacity 0.3s ease, top 0.3s ease";
  //   }
  // };

  // const updateButtonRefEBooks = (scrollProgress: number) => {
  //   if (buttonRefEBooks.current) {
  //     const opacity = Math.min(scrollProgress / 100, 1);
  //     const fullOpacity = scrollProgress >= 100;
  //     const topValue = Math.max(100 - scrollProgress, 0);

  //     buttonRefEBooks.current.style.opacity = fullOpacity
  //       ? `${1}`
  //       : `${opacity}`;

  //     buttonRefEBooks.current.style.top = `${topValue}%`;

  //     buttonRefEBooks.current.style.transition = fullOpacity
  //       ? "opacity 1s ease, top .8s ease"
  //       : "opacity 0.3s ease, top 0.3s ease";
  //   }
  // };

  const updateWelcomeTextoRef = (scrollProgress: number) => {
    if (welcomeTextoRef.current) {
      const opacity = Math.min(scrollProgress / 100, 1);
      const fullOpacity = opacity === 100 ? true : false;
      const topValue = Math.max(100 - scrollProgress, 0);
      if (fullOpacity) {
        welcomeTextoRef.current.style.opacity = `${1}`;
      }
      welcomeTextoRef.current.style.top = `${topValue}%`;
      welcomeTextoRef.current.style.opacity = `${opacity}`;
    }
  };

  const updateContainerBestSellingTemplateRef = (scrollProgress: number) => {
    if (containerBestSellingTemplateRef.current) {
      const height = Math.min(15, 0.5 * scrollProgress, 25);

      containerBestSellingTemplateRef.current.style.height = `${height}%`;
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const progress = Math.min(scrollPosition / viewportHeight, 1) * 100;

    const target = 1500;
    if (scrollPosition >= target) {
      setNotBounce(true);
    } else {
      setNotBounce(false);
    }

    updateTitleStyles(progress);
    updateContainerSubtitle2Styles();
    updateSubtitle2Styles(progress);
    updateSubtitle(progress);
    // updateButtonRefCursos(progress);
    // updateButtonRefEBooks(progress);
    updateWelcomeTextoRef(progress);
    updateContainerBestSellingTemplateRef(progress);
  }, [
    updateTitleStyles,
    updateContainerSubtitle2Styles,
    updateSubtitle2Styles,
    updateSubtitle,
    // updateButtonRefCursos,
    // updateButtonRefEBooks,
    updateWelcomeTextoRef,
    updateContainerBestSellingTemplateRef,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClickToScrollCenter = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById("BEST_SELLERS");
    if (targetElement) {
      const offset = window.innerHeight * 0.3; // Calcular el 70% del viewport
      const elementTop =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - offset, // Ajustar para que quede centrado
        behavior: "smooth", // Desplazamiento suave
      });
    }
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (
      welcomeTextoRef.current &&
      imgFirmaRef.current &&
      buttonRefCursos.current &&
      buttonRefEBooks.current
    ) {
      const opacity = welcomeTextoRef.current.style.opacity;

      if (opacity === "1") {
        imgFirmaRef.current.style.opacity = "1";

        timeoutId = setTimeout(() => {
          if (buttonRefCursos.current) {
            buttonRefCursos.current.style.opacity = "1";
          }
          if (buttonRefEBooks.current) {
            buttonRefEBooks.current.style.opacity = "1";
          }
        }, 300);
      } else {
        // Clear the timeout if it's in progress
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        imgFirmaRef.current.style.opacity = "0";
        buttonRefCursos.current.style.opacity = "0";
        buttonRefEBooks.current.style.opacity = "0";
      }
    }

    return () => {
      // Clean up timeout on effect cleanup
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [welcomeTextoRef.current?.style.opacity]);

  return (
    <div>
      {isMobile ? (
        <CelComponent />
      ) : (
        <div
          className={`relative w-screen h-[250vh] flex flex-col items-center justify-start z-0 bg-black`}
          ref={fatherContainerRef}
        >
          <div
            className={`flex flex-col items-center justify-center w-screen 
            h-[100vh] sticky top-0 left-0 ${styles.bgShadowBlur}`}
          >
            <h1
              ref={titleRef}
              className={`font-bold text-xl sm:text-8xl md:text-8xl 2xl:text-[12rem] text-foreground z-[9999] relative ${styles.titleTotalPrivacy} w-screen text-center`}
            >
              TOTAL PRIVACY
            </h1>

            <h2
              className="text-foreground relative z-10 text-lg"
              ref={subtitleRef}
            >
              Si vis pacem para bellum
            </h2>

            <div
              className={`w-0 p-0 absolute h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex flex-col items-center justify-center overflow-hidden`}
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
                Sé privado, sé libre, sé ingobernable...
              </h2>
            </div>

            <div
              className={`${styles.welcomeTexto} w-full h-[65vh] absolute top-[100%] left-0 z-10 flex flex-col justify-center items-center `}
              ref={welcomeTextoRef}
            >
              <p
                className={`text-white text-center text-xl lg:text-2xl w-[55vw] opacity-1 ${styles.title}`}
              >
                &#34;No se te puede quitar aquello que no se sabe que es tuyo y
                no se puede cancelar aquel que no es público.&#34;
              </p>
              <img
                ref={imgFirmaRef}
                src="/img/Finales/Rave PrivacyNoBg.png"
                alt=""
                className="absolute top-[65%] -translate-y-1/2 left-[50%] -translate-x-1/2 object-cover w-80 opacity-0 transition-all duration-300 ease-in-out"
              />
            </div>

            <div
              className={`${styles.buttons} p-5 flex gap-10 items-end justify-center w-full h-[60vh] absolute top-0 left-0 z-10`}
            >
              <Link href="/cursos">
                <PersonalButton
                  value="Ver cursos"
                  color="white"
                  ref={buttonRefCursos}
                  className="opacity-0 transition-all duration-300 ease-in-out"
                />
              </Link>

              <Link href="/ebooks">
                <PersonalButton
                  value="Ver E-Books"
                  color="white"
                  ref={buttonRefEBooks}
                  className="opacity-0 transition-all duration-300 ease-in-out"
                />
              </Link>
            </div>
            <div
              className={`absolute bottom-64 md:bottom-10 left-0 w-full flex flex-col items-center justify-center z-50  cursor-pointer `}
              onClick={handleClickToScrollCenter}
            >
              <RiArrowDownWideLine
                className={`text-foreground w-12 h-12 ${notBounce ? "" : "animate-bounce"} `}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
