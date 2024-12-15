"use client";
import React, { useEffect } from "react";
import { BestSellingTemplate } from "../../Elements/index";
import Products from "../../../../public/data/products.json";
import { useIsMobile } from "../../Elements/hooks";

interface Ebook {
  title: string;
  price: number;
  Bg?: string;
  description?: string;
  key: string;
}

export const FirstMosaicoComponents: React.FC = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const ebooks: Array<Ebook> = Products.ebooks;
    console.log(ebooks);
  }, []);

  return (
    <div
      className="flex w-[100vw] min-h-[50vh] bg-black gap-2 flex-wrap justify-center relative"
      id="BEST_SELLERS"
    >
      {Products.ebooks
        .sort((a: Ebook, b: Ebook) => a.price - b.price)
        .slice(0, 4)
        .map((product: Ebook, index: number) => (
          <BestSellingTemplate
            key={product.title || index}
            bgImage={product.Bg}
            description={product.description}
            title={product.title}
            rootUrl={product.key}
          />
        ))}
      <div
        className="w-full h-20  absolute -top-20 left-0 "
        style={{
          background: "linear-gradient(to top, #000, transparent)",
          pointerEvents: "none", // Deshabilita clics e interacciones
        }}
        tabIndex={-1}
      >
        {isMobile && (
          <h1
            className="text-white text-center font-bold text-4xl bg-black border-none border-spacing-2 border-t-2 border-b-2 px-5 py-2 relative"
            style={{ textShadow: "var(--textShadow-glow)" }}
          >
            BEST SELLERS
            <span
              className="w-1/2 bottom-0 h-[2px] left-1/2 absolute -translate-x-1/2 opacity-100"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--primary-color), transparent)",
              }}
            ></span>
          </h1>
        )}
      </div>
    </div>
  );
};
