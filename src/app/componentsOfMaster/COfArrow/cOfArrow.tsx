"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./cOfArrow.module.css";
import data from "./../../../../public/assets/data.json";
import { TfiWorld } from "react-icons/tfi";
import Button from "../BDCompra/Button";

const COfArrow = () => {
  const elementRefs = useRef<HTMLDivElement[]>([]);
  const [activeButtonId, setActiveButtonId] = useState<string | null>(null);

  const arrayOfPhase = [
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "Bonus I",
    "Bonus II",
  ];

  const handleElementRef = (index: number) => (ref: HTMLDivElement | null) => {
    if (ref) elementRefs.current[index] = ref;
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      elementRefs.current.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isCentered =
            rect.top < viewportCenter && rect.bottom > viewportCenter;

          element.style.opacity = isCentered ? "1" : "0.3";

          // Cambia el color del ícono dentro del elemento
          const icon = element.querySelector("svg");
          if (icon) {
            icon.style.fill = isCentered ? "var(--primary-color)" : "#fff"; // Cambia el color
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-screen min-h-screen flex flex-col items-center justify-center relative`}
      style={{ clipPath: "inset(0)" }}
    >
      <div
        className={`bg-gray-400 w-1 h-full absolute -z-10 left-4 md:left-auto`}
      >
        <div
          className={`w-1 h-[50vh] sticky bg-primary top-0 -mt-[50vh] z-50`}
          style={{ boxShadow: "0px 0px 10px #00f " }}
        ></div>
      </div>

      <div className={`flex flex-col p-8 gap-10`}>
        {data.map((item, index) => (
          <div
            key={item.fase}
            className={`w-full flex justify-between flex-col h-auto opacity-30 transition-all duration-200 pl-4 md:pl-0 relative md:flex-row ${
              item.button ? "md:h-[100vh]" : "md:h-[50vh]"
            }`}
            ref={handleElementRef(index)}
          >
            <div className={`w-[100%] md:w-[45%]`}>
              <div
                className={`flex justify-center items-center w-full h-1/2 sticky ${
                  item.button ? "top-64" : "top-96"
                } left-0 z-10`}
              >
                <div className={style.text_block_78}>{item.fase}</div>
                <div
                  className={`${style.timeline_date_text}`}
                  style={item.fase > 6 ? { fontSize: "2.3em" } : {}}
                >
                  {item.fase && "FASE"} {arrayOfPhase[index]}
                </div>
              </div>
            </div>

            <div className="absolute w-10 -left-[2.09rem] md:left-auto md:relative md:w-1/10  flex justify-center h-[82%] z-0 ">
              <TfiWorld className="text-3xl w-8 h-8 flex justify-center items-center top-[50vh] left-0 z-50 sticky" />
            </div>

            <div className={style.timeline_right}>
              <div className={style.sticky_text_right}>
                <div className={style.timeline_title_right_text}>
                  {item.titulo}
                </div>
                <div className={style.imagen}>
                  <img src={item.imagen} alt="" />
                </div>
                <div
                  className={style.text_block_right}
                  style={{ lineHeight: "1.8" }}
                >
                  {Array.isArray(item.descripcion) ? (
                    item.descripcion.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))
                  ) : (
                    <p>{item.descripcion}</p>
                  )}
                </div>
              </div>
              {item.button && (
                <div className={style.containerOFbuttom}>
                  <Button
                    buttonId={item.titulo}
                    activeButtonId={activeButtonId}
                    setActiveButtonId={setActiveButtonId}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default COfArrow;
