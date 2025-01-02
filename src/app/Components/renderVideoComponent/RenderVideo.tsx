"use client";
import { ProgressBarElement } from "@/app/Elements";
import { useIsMobile } from "@/app/Elements/hooks";
import { useVideoStatus } from "@/app/Elements/hooks/globalHooks/VideoStatusContext ";
import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface RenderVideoProps {
  poster: string;
  video: string;
  firstPlay: boolean;
  setFirstPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayOrpause: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RenderVideo: React.FC<RenderVideoProps> = ({
  video,
  poster,
  firstPlay,
  setFirstPlay,
  setPlayOrpause,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPlaying, setIsPlaying, volume } = useVideoStatus(); // Obtener volumen del contexto
  const [progress, setProgress] = useState(0);
  const stelaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Aplicar volumen global al video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100; // Ajustar el volumen del video
    }
  }, [volume]); // Reaplicar cada vez que el volumen cambie

  // Play/Pause toggle
  const handleOverlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handlePlay = () => {
    if (!firstPlay) setFirstPlay(true);
    setPlayOrpause(true);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setPlayOrpause(false);
    setIsPlaying(false);
  };

  // Actualiza el progreso del video de forma fluida
  useEffect(() => {
    const videoElement = videoRef.current;
    let animationFrameId: number;

    const updateProgress = () => {
      if (videoElement) {
        const progressPercentage =
          (videoElement.currentTime / videoElement.duration) * 100;
        setProgress(progressPercentage);
      }
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    if (videoElement) {
      videoElement.addEventListener("play", () => {
        animationFrameId = requestAnimationFrame(updateProgress);
      });

      videoElement.addEventListener("pause", () => {
        cancelAnimationFrame(animationFrameId);
      });

      videoElement.addEventListener("ended", () => {
        cancelAnimationFrame(animationFrameId);
        setProgress(0); // Reiniciar barra al finalizar
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", updateProgress);
        videoElement.removeEventListener("pause", updateProgress);
        videoElement.removeEventListener("ended", updateProgress);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime =
        (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    if (stelaRef.current) {
      stelaRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  // Detectar cambios en el hash de la URL y pausar el video
  useEffect(() => {
    const handleHashChange = () => {
      if (videoRef.current) {
        videoRef.current.pause(); // Pausar el video
        setIsPlaying(false); // Actualizar el estado de reproducción
      }
    };

    const checkHash = () => {
      if (window.location.hash) {
        handleHashChange(); // Pausar el video cuando cambia el hash
      }
    };

    // Revisar el hash cuando se monta el componente
    checkHash();

    window.addEventListener("scroll", checkHash); // Revisar el hash cuando se desplaza la página
    // Revisar cambios de hash manualmente
  }, []);

  return (
    <div className="absolute top-0 left-0 w-screen md:h-screen h-[40%] z-50 ">
      {/* Video */}
      <video
        ref={videoRef}
        src={video}
        controls={isMobile}
        playsInline={isMobile}
        controlsList="nodownload"
        className="absolute transition-all duration-[0.8s] linear w-full h-full"
        style={{
          objectFit: "cover",
          left: !isMobile ? (firstPlay ? "0" : "30%") : "0",
          top: 0,
        }}
        poster={isMobile ? poster : ""}
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {/* Botón de overlay para Play/Pause */}
      {!isMobile && (
        <div
          className="absolute top-0 w-full h-full flex items-center justify-center cursor-pointer z-40 transition-all duration-[.8s] ease-in-out"
          onClick={handleOverlayClick}
          style={{
            left: firstPlay ? "0" : "30%",
          }}
        >
          {!isPlaying && <FaPlay className="text-white text-4xl" />}
          {isPlaying && firstPlay && (
            <FaPause className="text-white text-4xl" />
          )}
        </div>
      )}

      {/* Barra de progreso personalizada */}
      {firstPlay && !isMobile && (
        <ProgressBarElement
          progress={progress}
          handleProgressChange={handleProgressChange}
        ></ProgressBarElement>
      )}
    </div>
  );
};
