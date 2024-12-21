import React from "react";
import data from "../../../../../public/data/products.json";

export const BtcComponente = () => {
  const DataOfCursosDestacados = data.cursos;

  return (
    <div className="flex flex-col items-center gap-5 justify-center w-screen min:h-[50vh] ">
      <h1
        className="font-bold text-[4rem] text-white text-left  w-full px-10"
        style={{
          textShadow: "var(--textShadow-glow)",
        }}
      >
        Cursos destacados
      </h1>
      {DataOfCursosDestacados.map(
        (data) =>
          data.Destacado ? ( // No es necesario comparar con `true`
            <div
              key={data.id} // Siempre incluye una key única para elementos mapeados
              className="w-[80%] rounded-lg h-60 flex justify-center items-center flex-col bg-yellow-500 text-white"
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
          ) : null, // Retorna null si no es Destacado
      )}
    </div>
  );
};
