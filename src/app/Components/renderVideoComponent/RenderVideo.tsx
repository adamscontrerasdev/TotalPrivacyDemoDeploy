// RenderVideo.tsx
"use client";
import { ProgressBarElement } from "@/app/Elements";
import { useVideoStatus } from "@/app/Elements/hooks/globalHooks/VideoStatusContext ";
import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface RenderVideoProps {
  video: string;
  firstPlay: boolean;
  setFirstPlay: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayOrpause: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RenderVideo: React.FC<RenderVideoProps> = ({
  video,
  firstPlay,
  setFirstPlay,
  setPlayOrpause,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPlaying, setIsPlaying, volume } = useVideoStatus(); // Obtener volumen del contexto
  const [progress, setProgress] = useState(0);
  const stelaRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50">
      {/* Video */}
      <video
        ref={videoRef}
        src={video}
        className="absolute transition-all duration-[0.8s] linear"
        style={{
          objectFit: "cover",
          left: firstPlay ? "0" : "30%",
          top: 0,
          width: "100vw",
          height: "100vh",
        }}
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {/* Botón de overlay para Play/Pause */}
      <div
        className="absolute top-0 w-full h-full flex items-center justify-center cursor-pointer z-40 transition-all duration-[.8s] ease-in-out"
        onClick={handleOverlayClick}
        style={{
          left: firstPlay ? "0" : "30%",
        }}
      >
        {!isPlaying && <FaPlay className="text-white text-4xl" />}
        {isPlaying && firstPlay && <FaPause className="text-white text-4xl" />}
      </div>

      {/* Barra de progreso personalizada */}
      {firstPlay && (
        <ProgressBarElement
          progress={progress}
          handleProgressChange={handleProgressChange}
        ></ProgressBarElement>
      )}
    </div>
  );
};
