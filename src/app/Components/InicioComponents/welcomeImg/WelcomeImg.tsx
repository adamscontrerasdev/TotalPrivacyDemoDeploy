"use client";
import React from "react";
import Image from "next/image";
import styles from "./welcomeImg.module.css";
import { RiArrowDownWideLine } from "react-icons/ri";
import { useIsMobile } from "@/app/Elements/hooks";

export const WelcomeImg = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-3rem)] bg-black relative z-0 top-12">
      {/* <Image
        src={"/img/gestion-de-parches-ciberseguridad.png"}
        alt={"logo"}
        layout="fill"
        objectFit="cover"
        quality={100}
      /> */}
      <div className="flex flex-col items-center justify-center w-screen h-screen relative">
        {/* Fondo con blur */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black backdrop-blur-sm z-0 ${styles.bgShadowBlur}`}
        ></div>

        {/* Destellos que se cruzan hacia el centro */}

        {/* <div
          className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-0"
          style={{
            background:
              "radial-gradient(circle at bottom left, rgba(220, 38, 38, 0.6) 10%, transparent 70%)",
            opacity: 0.2,
          }}
        ></div>

        <div
          className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-0"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(0, 123, 255, 0.6) 10%, transparent 70%)",
            opacity: 0.3,
          }}
        ></div> */}

        {/* Texto encima */}
        {!isMobile && (
          <h1
            className={`font-bold md:text-8xl lg:text-[12rem] text-foreground  z-10  ${styles.title}`}
          >
            TOTAL PRIVACY
          </h1>
        )}
        {!isMobile && (
          <h2 className="text-foreground relative z-10 ">
            Gestión de parches de seguridad ciber
          </h2>
        )}

        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center z-10">
          <RiArrowDownWideLine className="text-foreground relative z-10 text-4xl" />
        </div>
      </div>
    </div>
  );
};
