"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./abautUs.module.css";
import styles from "./../../Master-Total-Privacy/page.module.css";
import Button from "../BDCompra/Button";

const AboutUs = () => {
  const aboutWrapperRef = useRef<HTMLDivElement>(null);
  const [isElementVisible, setIsElementVisible] = useState(false);
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutWrapperRef.current && !isElementVisible) {
        const element = aboutWrapperRef.current;
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const activationRange = viewportHeight * 1.8;

        if (
          rect.top >= viewportHeight / 2 - activationRange &&
          rect.bottom <= viewportHeight / 2 + activationRange
        ) {
          setIsElementVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isElementVisible]);

  return (
    <div
      className={`w-screen min-h-screen pt-10 flex flex-col items-center justify-center `}
      ref={aboutWrapperRef}
    >
      <div
        className={`w-full flex flex-col items-center justify-center gap-20 ${isElementVisible ? style.up : ""}`}
      >
        <h4 className={style.title}>Esto es lo que aprenderás...</h4>
        <h2 className={style.subTitle}>
          ¿Qué es el <br />
          Mster Total Privacy?
        </h2>
        <img
          className={style.foto}
          src="https://static.vecteezy.com/system/resources/previews/008/551/632/original/abstract-technology-cyber-security-privacy-information-network-concept-shield-protection-digital-network-internet-link-on-hi-tech-blue-future-background-vector.jpg"
          alt="imagen"
        />
        <p className={`lg:w-[40vw] w-3/4 text-center `}>
          Privacidad Total es la única formación integral en privacidad digital,
          creada por profesionales de la privacidad en sistemas e inteligencia
          cibernética.
          <br />
          <br />
          Está diseñada para acercar la protección de datos, patrimonio y
          libertad a aquellos que no son expertos en tecnología.
          <br />
          <br />
          En una sociedad que avanza hacia la debacle digital y la
          sobreexposición mediática, la privacidad, un derecho fundamental, está
          cada vez más amenazada.
          <br />
          <br />
          Te encuentras en un punto de inflexión: quienes no protejan su
          privacidad ahora se adentrarán en un mundo donde sus datos serán
          cadenas invisibles.
          <br />
          <br />
          Privacidad Total de Tokin Privacy ofrece privacidad a todos los
          niveles, con una formación impartida por especialistas del sector,
          incluyendo a su fundador, Rave.
          <br />
          <br />
          &quot;No se puede cancelar a quien no es público, y no se te puede
          arrebatar lo que no se sabe que es tuyo.&quot;
          <br />
          <br />
          — Rave, fundador de Tokin Privacy
          <br />
          <br />
          <span style={{ textShadow: "0px 0px 10px #fff" }}>
            La decisión es tuya: sé privado, sé libre, sé ingobernable.
          </span>
        </p>
        <div className={style.buttonContainer}>
          <Button
            buttonId="1"
            activeButtonId={activeButtonId}
            setActiveButtonId={setActiveButtonId}
          />{" "}
        </div>
        <p className={styles.textForButton}>
          <em>Serás redirigido a la página de pago.</em>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
