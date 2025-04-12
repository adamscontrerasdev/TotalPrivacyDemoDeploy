import React from "react";
import { ContainerSections, Subtitle, Title } from "../components";
import { Product } from "@/app/Elements";

const SuccessCases: React.FC<{
  title: string;
  img: string;
  description: string;
}> = ({ title, img, description }) => {
  return (
    <div className="w-80 min-h-52 bg-neutral-900 rounded-3xl p-3 flex flex-col items-center justify-center gap-2">
      <div className=" flex w-full h-1/4 text-white gap-2 items-center justify-start font-bold">
        <div
          className={`w-10 aspect-square rounded-full bg-stone-600 overflow-hidden ${img ? "" : "animate-pulse"}`}
        >
          {img && (
            <img src={img} alt="User" className="w-full h-full object-cover" />
          )}
        </div>
        <h2
          className={`text-white rounded-3xl ${title ? "" : "bg-stone-600 animate-pulse min-w-52 min-h-7"}`}
        >
          {title}
        </h2>
      </div>
      <div className="w-full h-full text-left">
        <p
          className={`rounded-3xl ${description ? "" : "bg-stone-600 animate-pulse min-w-52 min-h-full"}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

interface Props {
  product: Product;
}

export const SuccessCasesSection: React.FC<Props> = ({ product }) => {
  const SuccesCaseItems = product.SuccessCasesSection;
  return (
    <ContainerSections>
      <div className="w-full  max-w-7xl flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <Title text="Casos de éxito" />
          <Subtitle text="Nuestros alumnos estan usando nuestro producto" />
        </div>
        <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 rounded-3xl ">
          {" "}
          {SuccesCaseItems.map((item, i) => (
            <SuccessCases
              description={item.description}
              img={item.img}
              key={i}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </ContainerSections>
  );
};
