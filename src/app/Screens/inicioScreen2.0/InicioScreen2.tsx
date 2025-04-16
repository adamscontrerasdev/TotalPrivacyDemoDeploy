import { InicioItem } from "@/app/Components";
import React from "react";
import data from "@/../../public/data/products.json";
import { Product } from "@/app/Elements";
export const InicioScreen2 = () => {
  const productArr = data.cursos;

  return (
    <div className="pt-12 flex flex-col items-center justify-center gap-2 p-2">
      {productArr.map((product: Product, index) => (
        <InicioItem product={product} key={index} />
      ))}
    </div>
  );
};
