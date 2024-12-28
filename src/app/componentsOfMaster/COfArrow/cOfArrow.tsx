"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./cOfArrow.module.css";
import data from "./../../../../public/assets/data.json";
import { GiDualityMask } from "react-icons/gi";
import Button from "../BDCompra/Button";

const COfArrow = () => {
  const elementRefs = useRef<Array<HTMLDivElement | null>>([]);
  const maskRefs = useRef<Array<HTMLDivElement | null>>([]);
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

  useEffect(() => {
    const handleScroll = () => {
      elementRefs.current.forEach((elementRef) => {
        if (elementRef) {
          const rect = elementRef.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const viewportCenter = viewportHeight / 2;

          if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
            elementRef.classList.add(style.sticky);
          } else {
            elementRef.classList.remove(style.sticky);
          }
        }
      });

      maskRefs.current.forEach((maskRef) => {
        if (maskRef) {
          const rect = maskRef.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const viewportCenter = viewportHeight / 2;

          const parentElement = maskRef.closest(`.${style.Element}`);

          if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
            maskRef.classList.add(style.sticky);
            if (parentElement && style.NextOpacity) {
              parentElement.classList.add(style.NextOpacity);
            }
          } else {
            maskRef.classList.remove(style.sticky);
            if (parentElement && style.NextOpacity) {
              parentElement.classList.remove(style.NextOpacity);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleElementRef = (index: number) => (ref: HTMLDivElement | null) => {
    elementRefs.current[index] = ref;
  };

  const handleMaskRef = (index: number) => (ref: HTMLDivElement | null) => {
    maskRefs.current[index] = ref;
  };

  return (
    <div className={style.timelineComponent}>
      <div className={style.timelineProgress}></div>
      <div className={style.timelineProgress_bar}></div>

      <div className={style.elementsWrapper}>
        {data.map((item, index) => (
          <div
            key={item.fase}
            className={`${item.button ? style.bigElement : ""} ${
              style.Element
            }`}
            ref={handleElementRef(index)}
          >
            <div className={style.timeline_left}>
              <div className={style.sticky_text_left}>
                <div className={style.text_block_78}>{item.fase}</div>
                <div
                  className={`${style.timeline_date_text}`}
                  style={item.fase > 6 ? { fontSize: "2.3em" } : {}}
                >
                  {item.fase && "FASE"} {arrayOfPhase[index]}
                </div>
              </div>
            </div>

            <div className={style.timeline_center}>
              <div className={style.maskWrapper} ref={handleMaskRef(index)}>
                <GiDualityMask className={style.mask} />
              </div>
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
                  {" "}
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
                  />{" "}
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
