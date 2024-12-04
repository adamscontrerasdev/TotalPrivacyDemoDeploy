"use client";
import { notFound } from "next/navigation";
import React, { useState, useEffect, useRef, use } from "react";
import data from "./../../../public/data/products.json";
import ScrollWheelHandler from "react-scroll-wheel-handler";
import styles from "./styles.module.css";
import Link from "next/link";

const ContentList = ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = use(params);
  const items = data[type as "ebooks" | "cursos"];
  const fatherRef = useRef<HTMLDivElement>(null);

  if (!items) {
    notFound(); // Redirige a 404 si el tipo no es válido
  }

  const [isScrolling, setIsScrolling] = useState<boolean>(false); // Estado para bloquear el scroll
  const [activeCircle, setActiveCircle] = useState<string>(""); // Estado para el círculo activo

  // Crear un objeto de refs para las secciones usando item.key como clave
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const setRef = (itemKey: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[itemKey] = el;
  };
  useEffect(() => {
    // Deshabilitar el scroll global mientras se ejecuta la animación
    if (isScrolling) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Detectar cuál sección está centrada cada vez que se haga scroll
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const closestSectionIndex = Math.round(
        currentScroll / window.innerHeight,
      );
      const targetKey = items[closestSectionIndex]?.key;
      setActiveCircle(targetKey || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling, items]);

  const handleScroll = (direction: "up" | "down") => {
    if (isScrolling) return; // Bloquear nuevos eventos mientras se ejecuta un scroll

    setIsScrolling(true); // Bloquear nuevos eventos
    const currentScroll = window.scrollY;
    const closestSectionIndex = Math.round(currentScroll / window.innerHeight);

    // Acceder al top de las secciones
    const targetIndex =
      direction === "down" ? closestSectionIndex + 1 : closestSectionIndex - 1;

    const targetKey = items[targetIndex]?.key;
    const targetSection = sectionRefs.current[targetKey];

    if (targetSection) {
      // Desplazar a la sección de destino inmediatamente
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }

    // Desbloquear el scroll después de la transición
    setTimeout(() => {
      setIsScrolling(false);
    }, 600); // Ajustar según la duración de "smooth"
  };

  return (
    <ScrollWheelHandler
      upHandler={() => handleScroll("up")}
      downHandler={() => handleScroll("down")}
      timeout={600} // Evitar múltiples eventos en un breve período
    >
      <div
        className="left-0 w-full min-h-[100vh] top-0 flex flex-col justify-center items-center"
        style={{
          background:
            "radial-gradient(circle at center, rgba(32, 58, 223, 0.2) 10%, rgba(0, 0, 0, 0.85) 50%, black 100%)",
        }}
        ref={fatherRef}
      >
        {items &&
          items.map((item) => (
            <div
              key={item.id}
              className="section w-screen h-screen flex flex-col items-center justify-center"
              id={item.key}
              ref={setRef(item.key)} // Asignar ref usando item.key
            >
              <div className="w-full h-full flex flex-col md:flex-row-reverse">
                {/* Imagen */}
                <div className="w-full md:w-1/2 h-[50%] md:h-full bg-black relative">
                  <img
                    src={item.Bg}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="w-full h-full absolute top-0 left-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.85) 100%)`,
                    }}
                  ></div>
                </div>

                {/* Contenido */}
                <div className="w-full md:w-1/2 h-[50%] md:h-full bg-black flex flex-col items-start justify-center p-12 gap-8">
                  <h1 className="text-6xl font-extrabold text-white leading-tight">
                    {item.title}
                  </h1>
                  <h2 className="text-3xl text-gray-300 leading-relaxed">
                    {item.description}
                  </h2>
                  <h2 className="text-5xl font-bold text-green-500">
                    <s className="text-gray-500 text-4xl">50</s> {item.price}{" "}
                    {item.currency}
                  </h2>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl mt-6 text-xl transition-all duration-300 ease-in-out shadow-[0_0_10px_5px_rgb(202_138_4)] 
                hover:shadow-[0_0_20px_10px_rgb(250_204_21)]"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div
        className={`w-11 h-60 bg-[#E3DDCF] rounded-full fixed top-1/2 right-0 -translate-y-1/2 flex flex-col justify-evenly items-center  ${styles.padreCircles}`}
        style={{ borderRadius: "20px 0 0 20px" }}
      >
        {items &&
          items.map((item) => (
            <Link href={`#${item.key}`} key={item.key}>
              {" "}
              <div
                key={item.key}
                className={`rounded-full  transition-all duration-500 ${
                  activeCircle === item.key
                    ? "bg-black w-[1em] h-[1em]"
                    : "bg-[#707073] w-[.5em] h-[.5em]"
                }`}
              ></div>
            </Link>
          ))}
      </div>
    </ScrollWheelHandler>
  );
};

export default ContentList;
