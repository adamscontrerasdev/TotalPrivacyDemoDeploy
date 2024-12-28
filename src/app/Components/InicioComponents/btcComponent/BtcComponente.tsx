import React from "react";
import data from "../../../../../public/data/products.json";

export const BtcComponente = () => {
  const DataOfCursosDestacados = data.cursos;

  return (
    <div className="flex flex-col items-center gap-5 justify-center w-screen min:h-[50vh] ">
      <h1
        className="font-bold text-4xl md:text-[3.5rem] text-white md:text-left w-full py-3 md:p-10 md:px-16  text-center"
        style={{
          textShadow: "0 0 5px #ffffff, 0 0 30px var(--provicional-color)",
        }}
      >
        CURSOS DESTACADOS
      </h1>
      {DataOfCursosDestacados.map((data) =>
        data.Destacado ? ( // No es necesario comparar con `true`
          <div
            key={data.id} // Siempre incluye una key única para elementos mapeados
            className="w-[80%] rounded-lg h-60 flex justify-center items-center flex-col bg-[#203adf] text-white"
            style={{
              backgroundImage: `url(${data.Bg})`, // Usa el campo `Bg` del objeto actual
              backgroundSize: "100%", // No escala la imagen
              backgroundPosition: "center", // Centra la imagen
              backgroundRepeat: "no-repeat", // Evita que la imagen se repita
            }}
          >
            <h1 className="text-2xl text-white">{data.title}</h1>{" "}
            {/* Usa el campo `title` del objeto actual */}
            <p className="text-white">{data.description}</p>{" "}
            {/* Usa el campo `description` del objeto actual */}
          </div>
        ) : null,
      )}
    </div>
  );
};
