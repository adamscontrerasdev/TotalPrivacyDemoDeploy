"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContainerSections } from "../components";
import { Product } from "@/app/Elements";

interface Props {
  product: Product;
}

const BulletsPointsSection: React.FC<Props> = ({ product }) => {
  const points: string[] = product.points ?? [];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveIndex(null);
  };

  const handleClick = (index: number) => {
    if (isMobile) setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ContainerSections>
      <div className="w-full max-w-7xl flex flex-wrap justify-center gap-4 transition-all duration-300">
        {points.map((point, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              animate={{
                flexGrow: isActive ? 2 : 1,
                flexBasis: isActive ? "calc(50% - 1rem)" : "calc(25% - 1rem)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col items-center justify-center bg-neutral-900 text-white p-4 rounded-2xl shadow-md cursor-pointer min-h-[10rem] overflow-hidden user-select-none"
              style={{
                minWidth: "120px",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
            >
              <p
                className="text-center"
                style={{
                  fontSize: isActive ? "1.5rem" : "1rem",
                  transition: "font-size 0.3s ease",
                }}
              >
                {point}
              </p>
            </motion.div>
          );
        })}
      </div>
    </ContainerSections>
  );
};

export default BulletsPointsSection;
