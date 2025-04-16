import React from "react";
import { ButtonVSL, ContainerSections } from "../components";
import { Product } from "@/app/Elements";

interface Feature {
  productFeature?: {
    title: string;
    content: string;
    order: number;
    button: string;
  };
}

const FeaturesCard: React.FC<Feature> = ({ productFeature }) => {
  if (
    !productFeature ||
    productFeature.title === "" ||
    productFeature.content === "" ||
    productFeature.order === undefined
  ) {
    return null;
  } else {
    return (
      <div
        className={`w-full flex flex-col-reverse md:h-80 ${productFeature?.order === 1 ? "md:flex-row" : "md:flex-row-reverse"} gap-10`}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
          <h2 className="text-xl md:text-4xl text-white font-bold text-left">
            {productFeature?.title}
          </h2>
          <p className="text-xs md:text-base text-neutral-300 text-left max-w-xl">
            {productFeature?.content}
          </p>
          <ButtonVSL
            value={
              productFeature?.button !== "" ? productFeature?.button : "Ver mas"
            }
          />
        </div>
        <div className="w-full md:w-1/2 aspect-video bg-neutral-800 animate-pulse rounded-2xl"></div>
      </div>
    );
  }
};

interface Props {
  product?: Product;
}

export const FeaturesSection: React.FC<Props> = ({ product }) => {
  return (
    <ContainerSections>
      <div className="w-full max-w-7xl flex flex-col md:gap-10 gap-5 lg:gap-20 ">
        {product?.features.map((feature, index) => (
          <FeaturesCard productFeature={feature} key={index} />
        ))}
      </div>
    </ContainerSections>
  );
};
