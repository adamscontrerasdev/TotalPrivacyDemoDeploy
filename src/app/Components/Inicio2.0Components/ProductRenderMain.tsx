"use client";
import {
  ButtonVSL,
  ContainerSections,
  Subtitle,
  Title,
} from "@/app/details/components";
import React from "react";
import data from "@/../../public/data/products.json";
import { Product } from "@/app/Elements";
import {
  SiApple,
  SiWindows10,
  SiAndroid,
  SiBitcoinsv,
  SiGrapheneos,
} from "react-icons/si";
import { TbDeviceImac } from "react-icons/tb";
import { Line } from "@/app/details/components/common/Line";

interface ProductCardProps {
  product?: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const iconMap: Record<string, React.ElementType> = {
    SiApple,
    TbDeviceImac,
    SiWindows10,
    SiAndroid,
    SiBitcoinsv,
    SiGrapheneos,
  };
  const IconComponent = iconMap[product?.icon || ""];

  return (
    <div className="w-full max-w-1/2 h-[22rem] bg-neutral-950 max-w-7xl rounded-2xl overflow-hidden flex flex-col items-center justify-between relative hover:scale-105 transition-transform duration-200">
      <div className="w-full h-20  flex flex-col items-start justify-center p-5">
        <h2 className="font-bold text-white text-2xl">{product?.title}</h2>
        <p className="text-xs text-left max-w-96">{product?.description}</p>
      </div>

      <div className="w-full h-20  flex items-center justify-between p-5 bg-black/50 backdrop-blur-xl gap-2 relative z-20">
        <div className=" flex gap-4  h-full justify-center items-center">
          <IconComponent className="text-white text-3xl" />
        </div>
        <div
          onClick={() => (location.href = `details/${product?.key}`)}
          className="w-full max-w-32"
        >
          <ButtonVSL value="Ver Curso" sm />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[80%] flex items-center justify-center">
        <img src={product?.Bg || ""} alt="" className="h-full" />
      </div>
    </div>
  );
};

export const ProductRenderMain = () => {
  const products: Product[] = data.cursos;

  return (
    <ContainerSections id="Cursos">
      <div
        className="w-full  max-w-7xl flex flex-col items-center justify-center 
      md:items-start md:justify-start  md:p-2 text-center"
      >
        <Title text="Cursos" />
        <div className="max-w-52 md:max-w-max text-center ">
          <Subtitle text="En esta sección podrás encontrar Nuestros Cursos" />
        </div>
      </div>
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-5 md:p-2 ">
        {products.map((product, index) => (
          <div key={index}>
            <div className="md:hidden">
              <Line color="#0083ff" />
              <br />
            </div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </ContainerSections>
  );
};
