import React from "react";
import Image from "next/image";
import styles from "./welcomeImg.module.css";
import { RiArrowDownWideLine } from "react-icons/ri";

export const WelcomeImg = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-3rem)] bg-black relative z-0 top-12">
      <Image
        src={"/img/gestion-de-parches-ciberseguridad.png"}
        alt={"logo"}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="flex flex-col items-center justify-center w-screen h-screen relative">
        {/* Fondo con blur */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 backdrop-blur-sm backdrop-brightness-50 z-0"></div>

        {/* Texto encima */}
        <h1
          className={`font-bold text-9xl text-foreground relative z-10 ${styles.title}`}
        >
          Bienvenido a Privacidad-Total
        </h1>
        <h2 className="text-foreground relative z-10 ">
          Gestion de parches de seguridad ciber
        </h2>
        <div className="  absolute bottom-0 left-0 w-full flex flex-col items-center justify-center z-10">
          <RiArrowDownWideLine className="text-foreground relative z-10 text-4xl" />
        </div>
      </div>
    </div>
  );
};
