"use client";
import React from "react";
import PersonalH1 from "./../components/common/PersonalH1";
import RenderVideo from "../components/RenderVideo";
import Buttons from "./../components/common/Buttons";
import Title from "./../components/common/title";
import ArrowDown from "./../components/common/ArrowDown";
import { useEffect, useState } from "react";

const Home = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-start w-screen 
   p-5   bg-black"
    >
      <div
        className="absolute top-0 left-0 w-screen h-screen pointer-events-none"
        style={{
          background: `
      linear-gradient(50deg, transparent 0%, transparent 20%, transparent 70%, #250000 100%)
    `,
        }}
      />
      <div
        className="absolute top-0 left-0 w-screen h-screen pointer-events-none"
        style={{
          background: `
      linear-gradient(-50deg, transparent 0%, transparent 20%, transparent 70%, #060a28 100%)
    `,
        }}
      />
      {/* <Title value="Total Privacy Partners" w Logo={false} icon={true} /> */}

      <div className="w-full max-w-2xl lg:max-w-4xl  h-full  flex flex-col items-center justify-center gap-5 text-white ">
        <div className="flex flex-col items-center justify-center">
          <PersonalH1 value="Programa de Partners " bold center />
          <PersonalH1 value="Cambia Tu Vida con la Privacidad" bold center />
          <p className="text-sm md:text-base xl:text-xl text-gray-300 max-w-3xl text-center mt-4">
            Fórmate como representante de Rave Privacy, impacta al mundo, lleva
            la privacidad a cada rincón del globo y sal de la Matrix. Sé
            Ingobernable
          </p>
        </div>

        <div className="w-full max-w-xl 2xl:max-w-3xl">
          <RenderVideo />
        </div>

        <div className="w-full min-h-20 flex items-center justify-center gap-5">
          <Buttons
            variant="fill"
            value="Acceso Mensual"
            color="#ffffff"
            redirectToUrl="https://pay.hotmart.com/W98463930K?bid=1743810669523"
          />
          <Buttons
            variant="outline"
            value="Acceso Anual"
            color="#ffffff"
            redirectToUrl="https://pay.hotmart.com/W98463930K?off=9nvebz57&bid=1743727727011"
          />
        </div>
      </div>
      <ArrowDown opacity={opacity} redirect={"#BulletsPoints"} />
    </div>
  );
};

export default Home;
