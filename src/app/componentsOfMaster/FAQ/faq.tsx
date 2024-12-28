"use client";
import React, { useState } from "react";
import style from "./faq.module.css";
import data from "./../../../app/../../public/assets/PAQ.json";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${style.accordionItem} ${isActive ? style.active : ""}`}>
      <div className={style.accordionTrigger} onClick={toggleAccordion}>
        <div className={style.accordionTitle}>{title}</div>
        <div className={style.openCloseIcon}>
          <div className={style.openCloseLine}></div>
          <div className={style.openCloseLine}></div>
        </div>
      </div>
      <div className={style.accordionContent}>
        <p>
          {content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>{" "}
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <div className={style.contentOfFAQ}>
      <div className={style.faqTitle}>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className={style.contentMarcaAndBox}>
        <div className={style.prueba}>
          <div className={style.marca}></div>
        </div>
        <div className={style.contentLuz}>
          <div className={style.boxOFQuetions}>
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.pregunta}
                content={item.respuesta}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
