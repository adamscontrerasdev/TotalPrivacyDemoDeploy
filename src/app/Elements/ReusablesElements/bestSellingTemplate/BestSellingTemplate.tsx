"use client";
import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import Link from "next/link";
import { useBuyMode } from "../../hooks/globalHooks/BuyModeContext";

interface BestSellingTemplateProps {
  title?: string;
  bgImage?: string;
  description?: string;
  rootUrl: string;
  points?: string[];
  price: number;
  currency: string;
  cardPay?: string;
}

export const BestSellingTemplate: React.FC<BestSellingTemplateProps> = ({
  title,
  bgImage,
  rootUrl,
  points,
  price,
  cardPay,
  currency,
}) => {
  const { setUrlCard, setUrlBtc, setActive } = useBuyMode();

  const handleBuyMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(true);
    setUrlCard(cardPay || "");
    setUrlBtc(`ebooks#${rootUrl}`);
  };

  return (
    <div
      className={`w-full sm:w-[49%] h-[70vh] flex flex-col items-center justify-start p-3 pt-10 pb-3 md:px-10 gap-2 md:gap-5 relative overflow-hidden`}
      style={{ background: "linear-gradient(to bottom, #000, #203adf30)" }}
    >
      <div
        id="title"
        className=" h-[10%] w-full flex justify-star items-center text-4xl pl-1 md:text-5xl lg:pl-5 lg:text-6xl"
      >
        <h1 className="text-white font-bold">{title}</h1>
      </div>
      <div id="points&Img" className="h-[70%] w-full flex">
        <div
          id="points"
          className="w-[50%] h-full text-white pt-4 pl-1 lg:pl-5"
        >
          <ul className="flex flex-col gap-2">
            {points?.map((point, index) => (
              <li
                key={index}
                className=" flex justify-start items-center gap-2 text-white md:text-xl lg:text-2xl"
              >
                <GoCheckCircleFill className="fill-primary" />
                <p className="text-white text-xs md:text-xl lg:text-2xl">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div id="image" className="w-[50%] h-full">
          <img
            src={bgImage}
            alt={title}
            className="h-full object-cover  scale-150 lg:scale-[2] "
          />
        </div>
      </div>
      <div id="buttons&Price" className="h-[20%] w-full flex ">
        <div
          id="Adquirir&Detalles"
          className="w-[50%] h-full flex justify-start gap-5 pl-1 lg:pl-5 items-center "
        >
          <button
            className="text-white text-xl lg:text-2xl p-3 font-bold rounded-full bg-primary z-50"
            onClick={handleBuyMode}
          >
            Adquirir
          </button>
          <h2 className="text-4xl text-green-400 font-bold md:text-5xl">
            {currency + price}
          </h2>
        </div>
        <div
          id="Price"
          className="w-[50%] h-full flex justify-end lg:justify-end items-center lg:pr-5 "
        >
          <Link
            href={`ebooks#${rootUrl}`}
            className="text-white text-xl lg:text-2xl p-3 font-bold rounded-full border-white border-2 z-50"
          >
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
