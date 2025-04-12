"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Subtitle, ContainerSections, SuccessCases } from "../components";
import { Product } from "@/app/Elements";

// Datos de ejemplo para los testimonios

interface Testimonial {
  product: Product;
}

export const SocialProofSection: React.FC<Testimonial> = ({ product }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  const testimonialData = product.testimonios;

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

  if (
    !testimonialData ||
    testimonialData.length === 0 ||
    testimonialData === null ||
    testimonialData[0] === undefined ||
    testimonialData[0] === null ||
    testimonialData[0].name === undefined ||
    testimonialData[0].name === null ||
    testimonialData[0].name === "" ||
    testimonialData[0].testimonio === ""
  ) {
    return null;
  } else {
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
            className="flex  gap-3 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
            ref={innerRef}
          >
            {testimonialData.map((item, index) => (
              <SuccessCases
                description={item.testimonio}
                img=""
                title={item.name}
                key={index}
              />
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
  }
};
