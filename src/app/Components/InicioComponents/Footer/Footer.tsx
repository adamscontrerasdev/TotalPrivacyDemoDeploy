import Link from "next/link";
import React from "react";
import { FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const normalizeText = "text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl";
  const normalizeTitles =
    "text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold";

  return (
    <div
      className="w-screen min-h-[30vh] p-10 relative bg-black/80 backdrop-blur-md 
    border-t border-primary"
    >
      {/* Sección de Información */}
      <div className="flex flex-col gap-5 lg:w-1/4">
        <h1
          className={`text-white ${normalizeTitles}`}
          style={{
            textShadow: "var(--textShadow-glow)",
          }}
        >
          TOTAL PRIVACY
        </h1>
        <Link
          href={"/politica-de-privacidad"}
          className={`inline-block text-gray-300 hover:text-primary transition duration-300  ${normalizeText}`}
        >
          Política de privacidad
        </Link>
        <Link
          href={"/terminos&condiciones"}
          className={`inline-block text-gray-300 hover:text-primary transition duration-300 ${normalizeText}`}
        >
          Términos & Condiciones
        </Link>
      </div>

      {/* Derechos Reservados */}
      <div
        className={`absolute bottom-0 left-0 pl-10 pb-10 text-gray-400 ${normalizeText}`}
      >
        <h2>©2025 All rights reserved by Total Privacy.</h2>
      </div>

      {/* Redes Sociales */}
      <div
        className={`absolute bottom-0 right-0 flex gap-5 pr-10 md:pb-10 pb-20`}
      >
        <Link href={"#"} className="group">
          <FaYoutube className="text-red-500 bg-black/50 p-2 sm:p-2.5 md:p-3 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full transition duration-300 scale-100 group-hover:scale-110 shadow-[0_0_15px_red]" />
        </Link>
        <Link href={"#"} className="group">
          <FaInstagram className="text-pink-500 bg-black/50 p-2 sm:p-2.5 md:p-3 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full transition duration-300 scale-100 group-hover:scale-110 shadow-[0_0_15px_pink]" />
        </Link>
        <Link href={"#"} className="group">
          <FaXTwitter className="text-primary bg-black/50 p-2 sm:p-2.5 md:p-3 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full transition duration-300 scale-100 group-hover:scale-110 shadow-[0_0_15px_white]" />
        </Link>
      </div>
    </div>
  );
};
