import PersonalH1 from "./../components/common/PersonalH1";
import Skeleton from "./../components/common/Skeleton";
import React from "react";

const ModulosItems = [
  {
    title: "Construye tu negocio rentable e impacta millones de vidas",
    description:
      "El programa de partners de Rave Privacy es un sistema diseñado para que cualquier persona, sin experiencia previa, pueda construir un negocio rentable en el sector de la privacidad digital.",
    direction: 0,
    img: "img/Partners/Modulos/M1.png",
  },
  {
    title: "Más que un negocio, es tu oportunidad de ser libre",
    description:
      "Como partner, obtendrás acceso a productos premium y autorización para venderlos generando altas comisiones. Formarás parte de una comunidad exclusiva de emprendedores.",
    direction: 1,
    img: "img/Partners/Modulos/M2.png",
  },
];
interface ModuleProps {
  title?: string;
  direction?: number;
  description?: string;
  img: string;
}

const Module: React.FC<ModuleProps> = ({
  title,
  direction,
  description,
  img,
}) => {
  return (
    <div
      className={`w-full max-w-2xl xl:max-w-7xl min-h-[50vh] flex flex-col items-center justify-center gap-10 text-white py-5 ${
        direction === 1 ? "xl:flex-row-reverse" : "xl:flex-row"
      } `}
    >
      {/* Imagen (Skeleton) */}
      <div className="h-1/2 w-full xl:w-1/2 ">
        {img ? (
          <img
            src={img}
            alt="Modulo"
            className="w-full h-full object-contain rounded-xl"
          />
        ) : (
          <Skeleton className="h-full w-full rounded-xl" />
        )}
      </div>

      {/* Texto */}
      <div className="h-auto w-full xl:w-1/2 flex flex-col  gap-3">
        <PersonalH1 value={title} noP></PersonalH1>
        <p className="text-sm md:text-lg lg:text-2xl text-gray-300 ">
          {description}
        </p>
      </div>
    </div>
  );
};

const Modulos = () => {
  return (
    <div className="w-full  min-h-screen  flex justify-center items-center flex-col px-5 bg-black xl:py-10">
      {ModulosItems.map((modulo, index) => (
        <Module
          title={modulo.title}
          direction={modulo.direction}
          description={modulo.description}
          key={index}
          img={modulo.img}
        />
      ))}
    </div>
  );
};

export default Modulos;
