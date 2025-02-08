import { PersonalButton } from "@/app/Elements";
import Link from "next/link";
import React, { useCallback } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import styles from "./welcomeImg.module.css";
import data from "./dataInicio.json";

const CelComponent = () => {
  const { eslogan, subtitle, parrafo } = data;
  const handleClickToScroll70vh = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById("BEST_SELLERS");
    if (targetElement) {
      const offset = window.innerHeight * 0.2; // Calcular el 80% del viewport
      const elementTop =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - offset, // Ajustar para que quede a 70vh
        behavior: "smooth", // Desplazamiento suave
      });
    }
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center gap-2"
      style={{
        background:
          "radial-gradient(circle at center, #203adf30 10%, black 70%)",
      }}
    >
      <div className=" flex flex-col justify-center items-center absolute top-20 ">
        <h1
          className={`font-bold text-4xl text-foreground  relative  w-screen text-center`}
          style={{ textShadow: "var(--textShadow-glow)" }}
        >
          TOTAL PRIVACY
        </h1>
        <h2 className="text-foreground relative z-10 text-sm">{eslogan}</h2>
      </div>
      <div className=" flex flex-col justify-center relative items-center gap-2 p-5 ">
        <h2 className="text-xl text-white">{subtitle}</h2>
        <p className={`text-center`}>&#34;{parrafo}&#34;</p>
        <img
          src="/img/Finales/Rave PrivacyNoBg.png"
          alt=""
          className=" h-20  w-52 object-cover opacity-100 transition-all duration-300 ease-in-out"
        />{" "}
      </div>
      <div className=" w-full flex justify-evenly">
        <Link href="/cursos">
          <PersonalButton
            value="Ver cursos"
            color="white"
            className="opacity-1"
          />
        </Link>
        <Link href="/ebooks">
          <PersonalButton
            value="Ver E-Books"
            color="white"
            className="opacity-1"
          />
        </Link>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full flex flex-col items-center justify-center z-10 ${styles.arrowDownWideLineContainer}`}
        onClick={handleClickToScroll70vh}
      >
        <RiArrowDownWideLine
          className={`text-foreground w-12 h-12 animate-bounce ${styles.arrowDownWideLine}`}
        />
      </div>
    </div>
  );
};

export default CelComponent;
