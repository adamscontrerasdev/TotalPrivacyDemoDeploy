"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./welcomeImg.module.css";
import { RiArrowDownWideLine } from "react-icons/ri";
import { useIsMobile } from "@/app/Elements/hooks";
import { IoLockOpenSharp } from "react-icons/io5";
import { PersonalButton } from "@/app/Elements";

export const WelcomeImg: React.FC = () => {
  const isMobile = useIsMobile();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const containerSubtitle2Ref = useRef<HTMLDivElement>(null);
  const subtitle2Ref = useRef<HTMLHeadingElement>(null);
  const buttonRefCursos = useRef<HTMLButtonElement>(null);
  const buttonRefEBooks = useRef<HTMLButtonElement>(null);
  const welcomeTextoRef = useRef<HTMLParagraphElement>(null);

  const [subtitle2IsFullWidth, setSubtitle2IsFullWidth] = useState(false); // Nuevo estado para verificar el 100% de ancho

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Calcula el progreso del scroll en base al tamaño de la ventana
      const progress = Math.min(scrollPosition / viewportHeight, 1) * 100;
      setScrollProgress(progress);
    };

    const updateTitleStyles = () => {
      if (titleRef.current) {
        const scale = Math.min(1.3, 1 + scrollProgress / 300); // Máximo de escala 1.5
        const translateY = scrollProgress * 1.5; // Desplazamiento vertical

        titleRef.current.style.transform = `translateY(${translateY}%) scale(${scale})`;
      }
    };

    // Esta función se ejecutará cuando el ancho llegue al 100%
    const updatecontainSubtitle2Styles = () => {
      if (containerSubtitle2Ref.current) {
        const scrollProgressNormalized = Math.min(
          window.scrollY / window.innerHeight,
          1
        ); // Calcula el progreso del scroll (0 a 1)

        // Calcula el ancho y el padding basados en el progreso del scroll
        const width = 100 * scrollProgressNormalized; // De 0% a 100%
        const padding = 10 * scrollProgressNormalized; // De 0px a 10px

        // Verificamos si el ancho llega al 100% y cambiamos el estado para que ejecute `updateSubtitle2Styles`
        if (width === 100 && !subtitle2IsFullWidth) {
          setSubtitle2IsFullWidth(true); // Activamos el estado cuando el ancho llega al 100%
        } else if (width !== 100 && subtitle2IsFullWidth) {
          setSubtitle2IsFullWidth(false); // Desactivamos el estado cuando el ancho vuelve a ser menor a 100%
        }

        // Calculamos el top dinámicamente una vez que el ancho llegue al 100%
        if (width === 100) {
          const topOffset = 50 - (scrollProgressNormalized - 1) * 50; // Restamos de 50% cuando el ancho llega al 100%
          containerSubtitle2Ref.current.style.top = `${Math.max(
            topOffset,
            0
          )}%`; // Evitar que el top sea negativo
        }

        // Actualizamos el estilo de ancho y padding
        containerSubtitle2Ref.current.style.width = `${width}%`; // Ancho dinámico
        containerSubtitle2Ref.current.style.padding = `${padding}px`; // Padding dinámico

        // Llamamos a `updateSubtitle2Styles` cuando el ancho sea 100%
      }
    };

    const updateSubtitle2Styles = () => {
      if (subtitle2Ref.current) {
        const scale = Math.min(1.3, 1 + scrollProgress / 300); // Máximo de escala 1.5
        const translateY = scrollProgress * 10; // Desplazamiento vertical

        subtitle2Ref.current.style.transform = `translateY(-${translateY}%) scale(${scale})`;
      }
    };

    const updateSubtitle = () => {
      if (subtitleRef.current) {
        const scale = Math.min(1.3, 1 + scrollProgress / 300); // Máximo de escala 1.5

        const opacity = 1 - scrollProgress / 100; // Reduce opacidad según el scroll
        subtitleRef.current.style.opacity = `${opacity}`;
        subtitleRef.current.style.transform = ` scale(${scale})`;
      }
    };

    const updateButtonRefCursos = () => {
      if (buttonRefCursos.current) {
        // Si el scroll está bajando, aumenta la opacidad según el progreso del scroll
        const opacity = Math.min(scrollProgress / 100, 1); // Aumenta opacidad según el scroll (máximo 1)
        buttonRefCursos.current.style.opacity = `${opacity}`;

        // Si el scroll no está bajando (puede ser subiendo), puedes hacer que la opacidad vuelva a 0
        // Si prefieres que la opacidad se mantenga constante o vuelva a 0, se puede hacer con un umbral de scroll
        if (scrollProgress <= 0) {
          buttonRefCursos.current.style.opacity = "0"; // Si el scroll está en la parte superior
        }
      }
    };

    const updateButtonRefEBooks = () => {
      if (buttonRefEBooks.current) {
        // Calcula la opacidad según el progreso del scroll
        const opacity = Math.min(scrollProgress / 100, 1); // Aumenta opacidad según el scroll (máximo 1)
        buttonRefEBooks.current.style.opacity = `${opacity}`;

        // Si el scroll está al principio, regresa a la opacidad inicial
        if (scrollProgress <= 0) {
          buttonRefEBooks.current.style.opacity = "0"; // Si el scroll está al principio
        }
      }
    };

    const updateWelcomeTextoRef = () => {
      if (welcomeTextoRef.current) {
        // Calcula la opacidad basada en el progreso del scroll (máximo 1)
        const opacity = Math.min(scrollProgress / 100, 1);

        // Calcula el valor de top según el progreso del scroll (de 100% a 0%)
        const topValue = Math.max(100 - scrollProgress, 0); // Empieza desde 100% y se mueve hacia 0%

        // Aplica los estilos calculados
        welcomeTextoRef.current.style.opacity = `${opacity}`;
        welcomeTextoRef.current.style.top = `${topValue}%`; // Ajusta la posición top
      }
    };
    const handleScroll = () => {
      updateTitleStyles();

      updateScrollProgress();
      updatecontainSubtitle2Styles();
      updateSubtitle2Styles();
      updateSubtitle();
      updateButtonRefEBooks();
      updateButtonRefCursos();
      updateWelcomeTextoRef();
    };

    window.addEventListener("scroll", handleScroll);
    console.log(scrollProgress);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollProgress, subtitle2IsFullWidth]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-3rem)] bg-black  z-0 top-12 fixed">
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
              width: "1920px", // Ancho fijo del texto
              whiteSpace: "nowrap", // Evita que el texto haga saltos de línea
              textAlign: "center", // Centra el texto horizontalmente
              overflow: "hidden", // Limita el contenido visible
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
            ¡Descubre cómo navegar de manera segura y proteger tu privacidad en
            línea! En Total Privacy, te ofrecemos recursos y cursos diseñados
            para enseñarte las mejores prácticas en la web. Aprende a proteger
            tu información personal, navegar de forma anónima y manejar tus
            redes sociales con total seguridad. Tu privacidad es lo más
            importante, y queremos ayudarte a mantenerla intacta. ¡Explora
            nuestros cursos y E-books y toma el control de tu seguridad en
            línea!
          </p>
        </div>
        <div
          className={`${styles.buttons}  p-5 flex gap-10 items-end justify-center w-full h-[60vh] absolute top-0 left-0 z-10`}
        >
          <PersonalButton
            value="Ver cursos"
            color="primary"
            ref={buttonRefCursos}
            className="opacity-0"
          />
          <PersonalButton
            value="Ver E-Books"
            color="primary"
            ref={buttonRefEBooks}
            className="opacity-0"
          />
        </div>
        <div
          className={`absolute bottom-64 md:bottom-10 left-0 w-full flex flex-col items-center justify-center z-10 ${styles.arrowDownWideLineContainer}`}
        >
          <RiArrowDownWideLine
            className={`text-foreground relative z-10 text-4xl ${styles.arrowDownWideLineIcon}`}
          />
        </div>
      </div>
    </div>
  );
};
