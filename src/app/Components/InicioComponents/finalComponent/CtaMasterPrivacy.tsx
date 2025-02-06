"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { master } from "./../../../../../public/data/products.json";

export const CtaMasterPrivacy = () => {
  const masterTotalPrivacy = master;
  const fatherOFMaster = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // Ref para el video
  const [playVideo, setPlayVideo] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false); // Nuevo estado para detectar si ya ocurrió
  const [upTitle, setUpTitle] = useState(false);
  const [upSubTitle, setUpSubTitle] = useState(false);
  const [opacityDesc, setOpacityDesc] = useState(0);

  const handleScroll = () => {
    if (fatherOFMaster.current && !hasPlayedOnce) {
      const rect = fatherOFMaster.current.getBoundingClientRect();

      // Detecta si el contenedor padre está en el top por primera vez
      if (rect.top <= 300) {
        setPlayVideo(true);
        setHasPlayedOnce(true); // Evita que vuelva a dispararse
        setTimeout(() => {
          setUpTitle(true);
        }, 500);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasPlayedOnce]);

  useEffect(() => {
    if (playVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [playVideo]);

  useEffect(() => {
    if (upTitle) {
      setTimeout(() => {
        setUpSubTitle(true);
      }, 200);
    } else {
      setUpSubTitle(false);
    }

    if (upTitle) {
      setTimeout(() => setOpacityDesc(1), 500);
    } else {
      setOpacityDesc(0);
    }
  }, [upTitle]);

  return (
    <div
      className="w-screen min-h-screen bg-black relative flex items-start overflow-hidden transition-all duration-300 ease-in-out"
      ref={fatherOFMaster}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Videos/Finales/Cursos/Master.mp4"
        muted
      ></video>

      <div className="w-full lg:w-1/2 h-screen flex flex-col py-20 lg:py-32 px-10 lg:px-20 z-30 gap-5 relative ">
        <h1
          className="text-white text-[4rem] md:text-[11rem] lg:text-[12rem] font-bold flex flex-col w-full leading-none transition-all duration-300 ease-in-out"
          style={{
            transform: !upTitle ? "translateY(100vh)" : "translateY(0)",
          }}
        >
          MASTER{" "}
        </h1>
        <span
          className=" font-bold text-white text-[2.1rem] md:text-[5.8rem] lg:text-[6.5rem] leading-none transition-all duration-300 ease-in-out w-full"
          style={{
            transform: upSubTitle ? "translateY(0)" : "translateY(100vh)",
          }}
        >
          TOTAL PRIVACY
        </span>
        <p
          className="uppercase w-[90%] text-white text-md lg:text-xl transition-all duration-500 ease-in-out"
          style={{ opacity: opacityDesc }}
        >
          {masterTotalPrivacy.description}
        </p>
        <div
          className="flex gap-5 transition-all duration-1000 ease-in-out "
          style={{
            transform: opacityDesc ? "translateY(0)" : "translateY(100vh)",
          }}
        >
          {masterTotalPrivacy.proximamente ? (
            <h2 className="text-white text-md lg:text-xl">
              Este curso estará disponible próximamente...
            </h2>
          ) : (
            <>
              <Link
                href="/Master-Total-Privacy"
                className="py-2 px-12 text-white font-bold rounded-full bg-primary "
              >
                Adquirir
              </Link>
              <Link
                href="/Master-Total-Privacy"
                className="py-2 px-12 text-white font-bold rounded-full border-2 border-white"
              >
                Detalles
              </Link>
            </>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 flex justify-start items-center px-10">
          <h2
            className="flex flex-col text-2xl text-white font-bold"
            style={{
              textShadow: "var(--textShadow-glow)",
            }}
          >
            TOTAL PRIVACY
          </h2>
        </div>
      </div>
    </div>
  );
};
