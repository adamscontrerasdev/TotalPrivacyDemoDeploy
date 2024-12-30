"use client";

import Link from "next/link";
import React from "react";
import ReusableButton from "../elements/reusablesElements/ReusableButton";
import styles from "./FinancingButton.module.css";
import { IoIosArrowDown } from "react-icons/io";

const FinancingButton = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [buttonH, setButtonH] = React.useState(false);

  React.useEffect(() => {
    if (buttonH) {
      if (buttonRef.current) {
        buttonRef.current.classList.add(styles.noAnimation);
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.classList.remove(styles.noAnimation);
      }
    }
  }, [buttonH]);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className={styles.content} id="FinancingButton">
      {true && (
        <>
          <h2 style={{ fontWeight: "300" }}>Nuevo</h2>
          <IoIosArrowDown />
          <Link href={"https://pay.hotmart.com/S96495524B"}>
            <ReusableButton
              shadow={true}
              bg="#fff3"
              value={"Financia"}
              color={"#fff"}
              onMouseEnter={() => setButtonH(true)}
              onMouseLeave={() => setButtonH(false)}
              className={styles.FinancingButton}
              ref={buttonRef}
            />
          </Link>
          <p style={{ fontSize: ".8em", textAlign: "center" }}>
            Selecciona seQura en opciones de pago
            <br />
            (NO disponible en todos los países)
          </p>
          <div
            className="space"
            style={{
              height: "1px",
              width: "100%",
              background:
                "linear-gradient(to right, rgba(255, 0, 0, 0) 0%, #F00 50%, rgba(255, 0, 0, 0) 100%)",
            }}
          ></div>
          <div
            style={{
              position: "fixed",
              bottom: "1em",
              right: "1em",
              background: "linear-gradient(45deg, #FF0000, #800000)",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.3em",
              boxShadow: "0 0 10px #f00",
              zIndex: 9999,
              cursor: "pointer",
              padding: ".5em",
            }}
            onClick={() => scrollToSection("#FinancingButton")}
            className={styles.text}
          >
            <span
              style={{ color: "#FFF", textAlign: "center", fontSize: ".8em" }}
            >
              Financia el curso en cómodas cuotas <br /> y empieza hoy.
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default FinancingButton;
