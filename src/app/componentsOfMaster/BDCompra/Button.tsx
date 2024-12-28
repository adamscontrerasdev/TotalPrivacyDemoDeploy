"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./button.module.css";
import Link from "next/link";
import ReusableButton from "../elements/reusablesElements/ReusableButton";
import { IoWalletOutline, IoLogoBitcoin } from "react-icons/io5";

interface ButtonProps {
  xplicacion?: boolean;
  buttonId: string; // Identificador único para cada botón
  activeButtonId: string | null; // ID del botón actualmente expandido
  setActiveButtonId: (id: string | null) => void; // Función para actualizar el ID activo
}

const Button: React.FC<ButtonProps> = ({
  xplicacion,
  buttonId,
  activeButtonId,
  setActiveButtonId,
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isPressed, setIsPressed] = useState(false); // Estado para manejar el tamaño del botón

  useEffect(() => {
    if (triggerRef.current) {
      setContentHeight(triggerRef.current.offsetHeight * 5);
    }
  }, [triggerRef.current]);

  const toggleExpand = () => {
    setActiveButtonId(activeButtonId === buttonId ? null : buttonId);
  };

  const isExpanded = activeButtonId === buttonId;

  return (
    <div className={style.container}>
      <ReusableButton
        shadow={true}
        value="Adquirir"
        color="#fff"
        bg={"#00f"}
        className={`${style.buttonTransparent} ${
          isPressed ? style.buttonPressed : ""
        }`}
        onClick={toggleExpand}
        onMouseDown={() => setIsPressed(true)} // Reducir tamaño (escritorio)
        onMouseUp={() => setIsPressed(false)} // Restaurar tamaño (escritorio)
        onMouseLeave={() => setIsPressed(false)} // Restaurar si se sale del botón (escritorio)
        onTouchStart={() => setIsPressed(true)} // Reducir tamaño (móvil)
        onTouchEnd={() => setIsPressed(false)} // Restaurar tamaño (móvil)
        ref={triggerRef}
      ></ReusableButton>
      <div
        className={`transition-all duration-200 overflow-hidden w-[70vw] md:w-[50vw] relative flex flex-col items-center justify-center gap-10 md:gap-16`}
        style={{
          height: isExpanded ? `${contentHeight}px` : "0",
          willChange: "height",
        }}
      >
        <p className="text-white">Seleccione método de pago</p>
        <div className={style.metodos}>
          <Link
            href={""}
            className={`px-5 py-3 bg-primary rounded-full md:hover:bg-[#10229c] transition-all duration-200 absolute`}
            style={{
              top: "50%",
              right: isExpanded ? "25%" : "50%",
              transform: "translate(50%, -50%)",
              opacity: isExpanded ? 1 : 0,
              transitionDelay: isExpanded ? "0s" : "0s",
              willChange: "right, opacity",
            }}
          >
            <h3 className="text-white text-lg flex items-center gap-2 ">
              Tarjeta <IoWalletOutline className="text-white fill-white" />
            </h3>
          </Link>
          <Link
            href={""}
            className={`px-5 py-3 bg-primary rounded-full md:hover:bg-[#10229c] transition-all duration-200 absolute`}
            style={{
              top: "50%",
              right: isExpanded ? "75%" : "50%",
              transform: "translate(50%, -50%)",
              opacity: isExpanded ? 1 : 0,
              transitionDelay: isExpanded ? "0.2s" : "0s",
              willChange: "right, opacity",
            }}
          >
            <h3 className="text-white text-lg flex items-center gap-2 ">
              Bitcoin <IoLogoBitcoin className="text-white fill-white" />
            </h3>
          </Link>
        </div>
        <div
          className={style.xplicacion}
          style={{
            opacity:
              typeof xplicacion !== "undefined"
                ? xplicacion
                  ? "1"
                  : "0"
                : "1",
            willChange: "opacity",
          }}
        >
          <p>Pagar con Bitcoin</p>
          <p>Pagar con Tarjeta</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
