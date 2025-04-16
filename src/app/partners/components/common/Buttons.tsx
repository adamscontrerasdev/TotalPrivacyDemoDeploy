"use client";

import React from "react";
import ShinyText from "./../common/ShinyText";

type Variant = "fill" | "outline";

interface ButtonProps {
  variant?: Variant;
  onClick?: () => void;
  value?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  neon?: boolean;
  redirectToUrl?: string;
  className?: string;
  hover?: boolean;
  roundedFull?: boolean;
}

// Función para calcular el contraste del color de fondo
const getContrastColor = (bgColor: string): string => {
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
};

const Button: React.FC<ButtonProps> = ({
  variant = "fill",
  onClick,
  value = "Botón",
  color = "#ff0000",
  size = "",
  neon = false,
  redirectToUrl,
  className = "",
  hover,
  roundedFull,
}) => {
  const textColor = variant === "fill" ? getContrastColor(color) : color;

  const getNeonColor = (baseColor: string): string => {
    const HexMap = "0123456789ABCDEF".split("");

    if (baseColor.startsWith("#")) {
      baseColor = baseColor.slice(1);
    }

    if (baseColor.length === 3 || baseColor.length === 4) {
      baseColor = baseColor
        .split("")
        .map((char) => char + char)
        .join("");
    }

    if (baseColor.length === 8) {
      baseColor = baseColor.slice(0, 6);
    }

    const baseColorSplit = baseColor.match(/.{1,2}/g) || [];

    const brighterHex = baseColorSplit
      .map((pair) =>
        pair
          .split("")
          .map((char) => {
            const index = HexMap.indexOf(char.toUpperCase());
            return HexMap[Math.min(index + 2, 15)];
          })
          .join(""),
      )
      .join("");

    return `#${brighterHex}`;
  };

  const handleClick = () => {
    if (onClick) onClick();
    if (redirectToUrl) window.location.href = redirectToUrl;
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: variant === "fill" ? color : "transparent",
        border: variant === "outline" ? `2px solid ${color}` : "none",
        color: textColor,
        boxShadow: neon ? `0px 0px 20px ${getNeonColor(color)}` : "",
      }}
      className={`px-6 py-3  font-bold text-sm transition-all duration-300 cursor-pointer shadow-lg active:scale-95 hover:text-white ${className} ${
        hover ? "hover:scale-105" : ""
      } ${roundedFull ? "rounded-full" : "rounded-lg"}`}
    >
      <ShinyText
        text={value}
        color={`${textColor}a4`}
        className={`text-${size}`}
      />
    </button>
  );
};

export default Button;
