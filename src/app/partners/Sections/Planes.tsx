"use client";
import Buttons from "./../components/common/Buttons";
import PersonalH1 from "./../components/common/PersonalH1";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const PlanesItems = [
  {
    title: "Standard Mensual",
    description:
      "Suscripción mensual a la formación como partner en privacidad de Rave Privacy",
    price: 44,
    currency: "€",
    destacado: true,
    year: false,
    link: "https://pay.hotmart.com/W98463930K?bid=1743810669523",
    benefits: [
      "Acceso inmediato al programa",
      "Baja inversión inicial",
      "Perfecto para principiantes",
      "Flexibilidad total, cancela cuando quieras",
    ],
  },
  {
    title: "Ultimate Anual",
    description:
      "Para los más comprometidos con su libertad, acceso anual sin restricciones a la formación como partner.",
    price: 462,
    currency: "€",
    destacado: false,
    year: true,
    link: "https://pay.hotmart.com/W98463930K?off=9nvebz57&bid=1743727727011",
    benefits: [
      "Acceso inmediato al programa",
      "Pago único con descuento exclusivo",
      "Mayor compromiso con el negocio",
    ],
  },
];

interface PlanProps {
  plan: {
    title: string;
    description: string;
    price: number;
    currency: string;
    destacado: boolean;
    year: boolean;
    link: string;
    benefits: string[];
  };
}

const Plan: React.FC<PlanProps> = ({ plan }) => {
  return (
    <div
      className={`sm:w-96  p-1 rounded-xl shadow-lg flex flex-col items-center justify-center ${
        plan.destacado ? "bg-[#fff] w-full" : "bg-neutral-900"
      }`}
    >
      <h2
        className={`font-medium text-black text-base md:text-xl lg:text-2xl flex items-center gap-1 ${
          plan.destacado ? "opacity-100" : "opacity-0"
        }`}
      >
        Más Popular
      </h2>

      <div className="w-full min-h-[50vh] bg-neutral-800 rounded-2xl p-4 flex flex-col items-center gap-4">
        <div className="w-full bg-neutral-900 rounded-2xl p-3 flex flex-col items-start gap-2">
          <h2 className="text-white text-sm md:text-base lg:text-lg font-light">
            {plan.title}
          </h2>
          <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold flex items-center gap-1">
            {plan.currency}
            {plan.price}
            <span>/</span>
            <span className="text-sm md:text-base lg:text-lg font-bold">
              {plan.year ? "Año" : "Mes"}
            </span>
          </h2>
          <h2 className="text-white text-xs md:text-sm lg:text-base font-light">
            {plan.year ? `${plan.currency}38,5 / Mes` : ``}
          </h2>
          {/* <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-all cursor-pointer"
            onClick={() => window.open(plan.link, "_blank")}
          >
            Acceder
          </button> */}
          <Buttons
            className="w-full"
            color="#ffffff"
            variant={plan.destacado ? "fill" : "outline"}
            value="Acceder"
            roundedFull={false}
            redirectToUrl={plan.link}
          />
        </div>
        <p className="text-white text-xs md:text-sm lg:text-base font-light border-b-1 border-white pb-2">
          {plan.description}
        </p>
        <ul className="text-white text-xs md:text-sm lg:text-base font-light w-full">
          {plan.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheck className="text-green-400" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Planes = () => {
  return (
    <div className="w-full bg-black flex justify-center items-center flex-col px-5 pb-20">
      <PersonalH1 value="Planes de Acceso" bold center />
      <p className="text-sm md:text-base xl:text-xl text-gray-300 max-w-3xl text-center mt-4">
        Accede hoy a la oportunidad que cambiará tu vida
      </p>
      <div className=" w-full xl:max-w-[90rem] flex gap-6 justify-center items-start flex-wrap py-6 ">
        {PlanesItems.map((plan, index) => (
          <Plan plan={plan} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Planes;
