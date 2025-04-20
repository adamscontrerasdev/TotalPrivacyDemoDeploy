"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContainerSections } from "../components";
import { Product } from "@/app/Elements";

interface Props {
  product: Product;
}

const PointItem: React.FC<{ point: string }> = ({ point }) => {
  return (
    <div className="w-60 aspect-square bg-black rounded-3xl flex items-center justify-center transition-all duration-300 ease-in-out">
      <div className="w-full h-2 bg-red-500 rounded-full"></div>
      <div className="w-full h-2 bg-red-500 rounded-full"></div>
      <p className="text-sm text-white">{point}</p>
    </div>
  );
};

const BulletsPointsSection: React.FC<Props> = ({ product }) => {
  const points: string[] = product.points ?? [];

  return (
    <ContainerSections>
      <div className=" w-full max-w-7xl grid grid-cols-3 gap-2 items-center justify-center origin-center bg-red-600 content-center place-items-center">
        {points.map((point, index) => (
          <PointItem key={index} point={point} />
        ))}
      </div>
    </ContainerSections>
  );
};

export default BulletsPointsSection;
