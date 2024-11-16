import React, { useEffect, useRef, useState } from "react";
import style from "./personalButton.module.css";

interface PersonalButtonProps {
  scrollProgress: number;
}

export const PersonalButton: React.FC<PersonalButtonProps> = ({
  scrollProgress,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [previousProgress, setPreviousProgress] = useState(scrollProgress);

  useEffect(() => {
    const updateButton = () => {
      if (buttonRef.current) {
        const scale = Math.max(1, 1 + (scrollProgress * 0.5) / 100);
        const opacity = Math.min(1, scrollProgress / 100);

        // Ajusta el valor de translate para que parta de -50% y se modifique dinámicamente
        const translateX = 50 + Math.max(0, (scrollProgress * 100) / 100);
        const translateY = 50 + Math.max(0, (scrollProgress * 300) / 100);


        buttonRef.current.style.transform = `translate(-${translateX}%, -${translateY}%) scale(${scale})`;
        // buttonRef.current.style.opacity = `${opacity}`;
        console.log(scrollProgress);
      }
    };

    const handleScroll = () => {
      if (!isAnimationStarted && scrollProgress !== previousProgress) {
        setIsAnimationStarted(true);
      }

      if (isAnimationStarted) {
        window.requestAnimationFrame(updateButton);
      }

      setPreviousProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollProgress, isAnimationStarted, previousProgress]);

  return (
    <button ref={buttonRef} className={style.button}>
      clickME!!
    </button>
  );
};
