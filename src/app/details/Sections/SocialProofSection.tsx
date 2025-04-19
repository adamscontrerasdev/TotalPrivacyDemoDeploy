"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Subtitle, ContainerSections, SuccessCases } from "../components";
import { Product } from "@/app/Elements";
import { CarruselProof } from "../components/common/CarruselProof";

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
    return <CarruselProof testimonios={testimonialData} />;
  }
};
