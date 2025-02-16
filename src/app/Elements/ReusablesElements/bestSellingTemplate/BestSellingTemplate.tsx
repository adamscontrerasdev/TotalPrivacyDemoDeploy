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

  const normalizeText =
    " text-md md:text-md lg:text-lg xl:text-xl 2xl:text-2xl";
  const normalizeTitles =
    "text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl";

  const handleBuyMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(true);
    setUrlCard(cardPay || "");
    setUrlBtc(`ebooks#${rootUrl}`);
  };

  return (
    <div
      className={`w-full sm:w-[49%] h-[70vh] flex flex-col items-center justify-start p-3 pt-10 pb-3 md:px-10 gap-2 md:gap-5  overflow-hidden relative`}
      style={{ background: "linear-gradient(to bottom, #000, #203adf30)" }}
    >
      <div
        id="title"
        className={` h-[10%] w-full flex justify-star items-center lg:pl-5pl-1  ${normalizeTitles}`}
      >
        <h1 className="text-white font-bold">{title}</h1>
      </div>
      <div id="points&Img" className="h-[70%] w-full flex">
        <div id="points" className="w-[50%] h-full text-white ">
          <ul className="flex flex-col gap-2">
            {points?.map((point, index) => (
              <li
                key={index}
                className={`flex justify-start items-center gap-2 text-white  `}
              >
                <p
                  className={`text-white  font-extralight flex justify-center items-center min-w-0 ${normalizeText} gap-2 `}
                >
                  <GoCheckCircleFill className="fill-primary w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 flex-shrink-0" />
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
      <div
        id="buttons&Price"
        className="h-[20%] w-full flex absolute bottom-0 left-0 right-0 px-5"
      >
        <div
          id="Adquirir&Detalles"
          className="w-[50%] h-full flex justify-start gap-5 pl-1 lg:pl-5 items-center "
        >
          <button
            className={`text-white p-3 font-bold rounded-full bg-primary z-50 ${normalizeText}`}
            onClick={handleBuyMode}
          >
            Adquirir
          </button>
          <h2 className={`text-green-400 font-bold ${normalizeTitles}`}>
            {currency + price}
          </h2>
        </div>
        <div
          id="Price"
          className="w-[50%] h-full flex justify-end lg:justify-end items-center lg:pr-5 "
        >
          <Link
            href={`ebooks#${rootUrl}`}
            className={`text-white p-3 font-bold rounded-full border-white border-2 z-50 ${normalizeText}`}
          >
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
