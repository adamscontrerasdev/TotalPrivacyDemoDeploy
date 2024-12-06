import React from "react";

interface CardOFProdectProps {
  title: string;
  price: number;
  currency: string;
  Bg: string;
  description: string;
  before: number;
  order: number;
}

export const CardOFProduct: React.FC<CardOFProdectProps> = ({
  title,
  price,
  currency,
  Bg,
  description,
  before,
  order,
}) => {
  return (
    <div
      className={`w-full h-full flex flex-col ${order === 1 ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Imagen */}
      <div className="w-full md:w-1/2 h-[50%] md:h-full bg-black relative">
        <img src={Bg} alt={title} className="w-full h-full object-cover" />
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
          {title}
        </h1>
        <h2 className="text-3xl text-gray-300 leading-relaxed">
          {description}
        </h2>
        <h2 className="text-5xl font-bold text-green-500">
          <s className="text-gray-500 text-4xl">
            {before && before + currency}
          </s>{" "}
          {price} {currency}
        </h2>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl mt-6 text-xl transition-all duration-300 ease-in-out shadow-[0_0_10px_5px_rgb(202_138_4)] 
                hover:shadow-[0_0_20px_10px_rgb(250_204_21)]"
        >
          Adquirir
        </button>
      </div>
    </div>
  );
};
