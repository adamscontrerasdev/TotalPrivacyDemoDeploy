"use client";
import React, { useEffect } from "react";
import { BestSellingTemplate } from "../../Elements/index";
import Products from "../../../../public/data/products.json";

interface Ebook {
  title: string;
  price: number;
  Bg?: string;
  description?: string;
}

export const FirstMosaicoComponents: React.FC = () => {
  useEffect(() => {
    const ebooks: Array<Ebook> = Products.ebooks;
    console.log(ebooks);
  }, []);

  return (
    <div className="flex w-[100vw] h-[100vh] bg-black flex-wrap">
      {Products.ebooks
        .sort((a: Ebook, b: Ebook) => a.price - b.price)
        .slice(0, 4)
        .map((product: Ebook, index: number) => (
          <BestSellingTemplate
            key={product.title || index}
            bgColor={product.price > 100 ? "#fff" : "#000"}
            bgImage={product.Bg}
            description={product.description}
            title={product.title}
          />
        ))}
    </div>
  );
};
