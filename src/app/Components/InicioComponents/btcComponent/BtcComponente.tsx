import React from "react";
import { ebooks } from "../../../../../public/data/products.json";

export const BtcComponente = () => {
  const dataOfEbooksBancario = ebooks[4];

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[50vh] bg-black">
      <div
        className="w-[80%]  rounded-lg h-60 flex justify-center items-center flex-col"
        style={{
          backgroundImage: `url(${dataOfEbooksBancario.Bg})`,
          backgroundSize: "100%", // No escala la imagen
          backgroundPosition: "center", // Centra la imagen
          backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        }}
      >
        <h1 className="text-2xl text-white">{dataOfEbooksBancario.title}</h1>
        <p>{dataOfEbooksBancario.description}</p>
      </div>
    </div>
  );
};
