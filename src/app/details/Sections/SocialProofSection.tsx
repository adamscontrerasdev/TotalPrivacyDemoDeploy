"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Subtitle, ContainerSections } from "../components";

// Datos de ejemplo para los testimonios
const testimonialData = [
  {
    id: 1,
    name: "María García",
    role: "CEO, TechSolutions",
    content:
      "El servicio que recibimos superó todas nuestras expectativas. Definitivamente recomendaría este producto a cualquier empresa.",
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director de Marketing, InnovaGroup",
    content:
      "Increíble experiencia de usuario. La implementación fue rápida y los resultados son excelentes.",
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Desarrolladora Senior, WebTech",
    content:
      "La calidad del producto es extraordinaria. El soporte técnico siempre está disponible para resolver cualquier problema.",
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    role: "Director de Operaciones, DataCorp",
    content:
      "Desde que implementamos la solución, nuestra productividad ha aumentado significativamente. ¡Gracias por un producto tan completo!",
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 5,
    name: "Ana López",
    role: "Gerente de Proyectos, CreateStudio",
    content:
      "Fácil de usar y extremadamente efectivo. Definitivamente volveremos a trabajar juntos en futuros proyectos.",
    avatar: "/api/placeholder/60/60",
  },
];

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-neutral-900 h-full rounded-lg shadow-lg flex flex-col items-start select-none p-3 w-72 min-w-72">
      <h2 className="font-bold text-white text-lg">{testimonial.name}</h2>
      <p className="text-left text-xs md:text-sm">{testimonial.content}</p>
    </div>
  );
};

export const SocialProofSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    const updateDragConstraints = () => {
      if (!carouselRef.current || !innerRef.current) return;
      const containerWidth = carouselRef.current.offsetWidth;
      const contentWidth = innerRef.current.scrollWidth;
      const max = contentWidth - containerWidth;
      setMaxDrag(max > 0 ? max : 0);
    };

    updateDragConstraints();
    window.addEventListener("resize", updateDragConstraints);
    return () => window.removeEventListener("resize", updateDragConstraints);
  }, []);

  return (
    <ContainerSections>
      <div
        className="w-full max-w-5xl overflow-hidden relative "
        ref={carouselRef}
      >
        <div className="w-full flex items-start pl-3 mb-3">
          <Subtitle text="Nuestros alumnos dicen :" />
        </div>
        <motion.div
          role="Button"
          className="flex h-40 gap-3 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          ref={innerRef}
        >
          {testimonialData.map((item, index) => (
            <Testimonial testimonial={item} key={index} />
          ))}
        </motion.div>
        <div
          className="w-full h-full absolute top-0 left-0  pointer-events-none"
          style={{
            background: "linear-gradient(to right, #000, transparent 3%)",
          }}
        ></div>
        <div
          className="w-full h-full absolute top-0 left-0  pointer-events-none"
          style={{
            background: "linear-gradient(to left, #000, transparent 3%)",
          }}
        ></div>
      </div>
    </ContainerSections>
  );
};
