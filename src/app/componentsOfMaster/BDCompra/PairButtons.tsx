import React, { useEffect, useRef } from "react";
import styles from "./PairButtons.module.css";
import { FaTelegram } from "react-icons/fa6";
import Link from "next/link";
import { useGlobalContext } from "../context/avtiveContext";
import { IoWalletOutline, IoLogoBitcoin } from "react-icons/io5";

const PairButtons = () => {
  const tarjetasIsHover = true;
  const bitcoinIsHover = true;
  const masterRef = useRef<HTMLDivElement>(null);
  const visaRef = useRef<HTMLDivElement>(null);
  const paypalRef = useRef<HTMLDivElement>(null);
  const btcRef = useRef<HTMLDivElement>(null);
  const isActive = useGlobalContext().isActive;

  useEffect(() => {
    if (tarjetasIsHover) {
      masterRef.current?.classList.add(styles.hoverMaster);
      visaRef.current?.classList.add(styles.hoverVisa);
      paypalRef.current?.classList.add(styles.hoverPaypal);
    } else {
      masterRef.current?.classList.remove(styles.hoverMaster);
      visaRef.current?.classList.remove(styles.hoverVisa);
      paypalRef.current?.classList.remove(styles.hoverPaypal);
    }

    if (bitcoinIsHover) {
      btcRef.current?.classList.add(styles.hoverBtc);
    } else {
      btcRef.current?.classList.remove(styles.hoverBtc);
    }
  }, [tarjetasIsHover, bitcoinIsHover]);

  return (
    <div className={` py-5  flex flex-col items-center justify-center gap-5 `}>
      {isActive ? (
        <>
          <div className={` flex flex-col items-center justify-center `}>
            <h2 className={styles.title}>Adquirir</h2>

            <span style={{ transition: "all .5s" }}>
              <p
                className="text-yellow-500"
                style={{
                  fontSize: ".8em",
                  transition: "all .5s",
                  textShadow: "0px 0px 10px #fff",
                }}
              >
                Debe selecionar un método de pago
              </p>
            </span>
          </div>
          <div
            className={`w-screen md:w-[30vw] min-h-20 flex items-center justify-evenly `}
          >
            <Link
              href={""}
              className={` px-5 py-3 bg-primary rounded-full md:hover:bg-[#10229c] transition-all duration-200 `}
            >
              <h3 className="text-white text-lg flex items-center gap-2 ">
                Tarjeta <IoWalletOutline className="text-white fill-white" />
              </h3>
            </Link>
            <Link
              href={""}
              className={` px-5 py-3 bg-primary rounded-full md:hover:bg-[#10229c] transition-all duration-200`}
            >
              <h3 className="text-white text-lg flex items-center gap-2 ">
                Bitcoin <IoLogoBitcoin className="text-white fill-white" />
              </h3>
            </Link>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{ color: "#6b7280", fontSize: "1.5rem", fontWeight: "600" }}
          >
            Plazas agotadas
          </h2>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <p style={{ color: "#ffffff", fontSize: "1.125rem" }}>
              Todas las plazas agotadas para no quedarte fuera en la próxima
              edición, apúntate a nuestra lista de espera.
            </p>
            <p
              style={{
                color: "#ffffff",
                fontSize: "1.125rem",
                marginTop: "1rem",
              }}
            >
              Haz click en el botón:
            </p>
            <Link
              href="https://tokinprivacy.myflodesk.com/waitinglist"
              style={{
                marginTop: "1rem",
                display: "inline-block",
                color: "#ffffff",
                fontSize: "1.125rem",
                fontWeight: "700",
                backgroundColor: "#f97316",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                boxShadow: "0px 0px 10px #f97316",
                transition: "background-color 0.2s",
              }}
            >
              Lista de espera
            </Link>
            <p
              style={{
                color: "#ffffff",
                fontSize: "1.125rem",
                marginTop: "2rem",
              }}
            >
              O únete a nuestro canal privado de Telegram, donde hablamos de
              privacidad sin censura y compartimos contenido exclusivo:
            </p>
            <Link
              href="https://t.me/TokinPrivacy"
              style={{
                marginTop: "1rem",
                display: "inline-block",
                color: "#ffffff",
                fontSize: "1.125rem",
                fontWeight: "700",
                backgroundColor: "#3b82f6",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                boxShadow: "0px 0px 10px #3b82f6",
                transition: "background-color 0.2s",
              }}
            >
              Telegram
              <FaTelegram
                style={{
                  fontSize: ".8rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </Link>
            <span
              style={{
                fontSize: "0.875rem",
                color: "#d1d5db",
                marginTop: "1rem",
                display: "block",
              }}
            >
              Haga click en el botón para unirse.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PairButtons;
