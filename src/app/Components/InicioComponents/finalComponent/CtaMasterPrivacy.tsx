"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { master } from "./../../../../../public/data/products.json";
import { useIsMobile } from "@/app/Elements/hooks";

export const CtaMasterPrivacy = () => {
  const normalizeText = " text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl";
  const normalizeTitles =
    "text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl";
  const normalizeSubTitles =
    "text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl";

  const masterTotalPrivacy = master;
  const fatherOFMaster = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // Ref para el video
  const [playVideo, setPlayVideo] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false); // Nuevo estado para detectar si ya ocurrió
  const [upTitle, setUpTitle] = useState(false);
  const [upSubTitle, setUpSubTitle] = useState(false);
  const [opacityDesc, setOpacityDesc] = useState(0);
  const isMobile = useIsMobile();

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

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      if (videoElement && isMobile) {
        const remainingTime = videoElement.duration - videoElement.currentTime;
        if (remainingTime <= 2) {
          videoElement.pause();
          videoElement.removeEventListener("timeupdate", handleTimeUpdate); // Remueve el listener para evitar redundancia.
        }
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div
      className="w-screen min-h-screen bg-black relative flex items-start overflow-hidden transition-all duration-300 ease-in-out"
      ref={fatherOFMaster}
    >
      <div
        className="w-screen h-screen absolute top-0 left-0 z-20 transition-all duration-1000 ease-in-out"
        style={{
          background:
            "linear-gradient(to bottom right, #000 20%, transparent 60%)",
          opacity: upTitle ? 1 : 0,
        }}
      ></div>

      {isMobile ? (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover "
          src="/Videos/Finales/Cursos/BgMasterTotalVertical.mp4"
          muted
          playsInline
        ></video>
      ) : (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover "
          src="Videos/Finales/Cursos/BgMasterToalPrivacy.mp4"
          muted
          playsInline
        ></video>
      )}

      <div className="w-full  h-screen flex flex-col z-30 gap-5 relative py-20 px-10">
        <h1
          className={`text-white  font-bold flex flex-col w-full leading-none transition-all duration-300 ease-in-out ${normalizeTitles} `}
          style={{
            transform: !upTitle ? "translateY(100vh)" : "translateY(0)",
          }}
        >
          MASTER{" "}
        </h1>
        <span
          className={`font-bold text-white  leading-none transition-all duration-300 ease-in-out w-full ${normalizeSubTitles}  `}
          style={{
            transform: upSubTitle ? "translateY(0)" : "translateY(100vh)",
          }}
        >
          TOTAL PRIVACY
        </span>
        <p
          className={`w-[90%] text-red-500 transition-all duration-500 ease-in-out ${normalizeText}  `}
          style={{ opacity: opacityDesc }}
        >
          {masterTotalPrivacy.description.split("\n").map((line, index) => (
            <span key={index} className="text-white">
              {line}
              <br />
            </span>
          ))}
        </p>

        <div
          className="flex gap-5 transition-all ease-in-out "
          style={{
            transform: opacityDesc ? "translateY(0)" : "translateY(100vh)",
            opacity: opacityDesc,
            transition: "transform 1s ease-in-out, opacity 2s ease-in-out",
            transitionDelay: opacityDesc ? "0s, 1s" : "0s, 1s",
          }}
        >
          {masterTotalPrivacy.proximamente ? (
            <div className="flex flex-col items-start gap-3">
              <h2 className={`text-white ${normalizeText}`}>
                Este curso estará disponible proximamente...
              </h2>
              <div className=" flex flex-col items-start gap-1">
                {" "}
                <p className="">Apúntate a la lista de espera.</p>
                <Link
                  href={
                    "https://tokinprivacy.myflodesk.com/total-privacy-master-lista-de-espera"
                  }
                  className={`py-2 px-12 text-white font-bold rounded-full bg-primary hover:scale-95 self-start transition-all duration-300 ease-in-out ${normalizeText}`}
                >
                  Apuntarme
                </Link>
              </div>
            </div>
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
        {/* <div className="absolute bottom-0 left-0 w-full h-20 flex justify-start items-center px-10">
          <h2
            className={`flex flex-col  text-white font-bold ${normalizeText}`}
            style={{
              textShadow: "var(--textShadow-glow)",
            }}
          >
            TOTAL PRIVACY
          </h2>
        </div> */}
      </div>
    </div>
  );
};
