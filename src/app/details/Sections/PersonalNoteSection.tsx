import React from "react";
import { ContainerSections } from "../components";
import { Line } from "../components/common/Line";
import { Product } from "@/app/Elements";

interface Props {
  product?: Product;
}

export const PersonalNote: React.FC<Props> = ({ product }) => {
  if (!product || product.personalNote.note === "") {
    return null;
  } else {
    return (
      <ContainerSections>
        <Line color="#0083ff" />
        <div className="w-full max-w-7xl  flex justify-center items-center">
          <div className="w-full max-w-2xl  flex flex-col gap-5  rounded-2xl">
            <div className="w-full h-[30%] ">
              <div className="h-40 aspect-video rounded-2xl">
                {product?.personalNote?.img !== "" ? (
                  <img src={product?.personalNote?.img} alt="img" />
                ) : (
                  <div className="bg-neutral-800 animate-pulse rounded-2xl w-full h-full"></div>
                )}
              </div>
            </div>
            <div className="w-full h-[70%] ">
              <p className="text-xs md:text-base text-neutral-300 text-left ">
                {product?.personalNote?.note}
              </p>
            </div>
          </div>
        </div>
        <Line color="#0083ff" />
      </ContainerSections>
    );
  }
};
