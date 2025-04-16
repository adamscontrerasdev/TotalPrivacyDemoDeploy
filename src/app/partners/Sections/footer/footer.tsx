"use client";
import React from "react";
import style from "./footer.module.css";
import Title from "./../../components/common/title";

interface Props {
  outMain?: boolean;
  partners?: boolean;
}

const Footer = ({ outMain, partners }: Props) => {
  // Estilos de fondo
  const bgStyle = {
    background: outMain ? "#000" : "transparent",
  };

  const gradientStyle = {
    background: partners
      ? "linear-gradient(to bottom, #fffc, #000 20%)"
      : outMain
        ? "linear-gradient(to bottom, #600000, #000 50%)"
        : "linear-gradient(to bottom, rgba(255, 69, 58, 0.15), rgba(0, 0, 0, 0) 50%)",
  };

  const copyrightText = partners
    ? "©2025 all rights reserved by Rave Privacy."
    : "©2025 all rights reserved by Tokin Privacy.";

  return (
    <div className={style.section} style={bgStyle}>
      <div className={style.container} style={gradientStyle}>
        <div className={style.contentOfTitle}>
          {partners ? (
            <Title value="Total Privacy Partners" w Logo={false} icon={true} />
          ) : (
            <Title />
          )}
        </div>

        {/* <div className={style.p1}>
          <Link href="/privacyPolicy" target="_blank" className="text-nowrap">
            Política de privacidad
          </Link>
          <span className="px-1">|</span>
          <Link
            href="/terms&conditions"
            target="_blank"
            className="text-nowrap"
          >
            Términos & Condiciones
          </Link>
          {!partners && (
            <>
              <span className="px-1">|</span>
              <Link href="/partners">Partners</Link>
            </>
          )}
        </div> */}

        <p className={style.p2}>{copyrightText}</p>
      </div>
    </div>
  );
};

export default Footer;
