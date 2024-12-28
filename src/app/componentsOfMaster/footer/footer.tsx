"use client";
import React from "react";
import style from "./footer.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.contentOfTitle}></div>
        <p className={style.p1}>
          <Link href="/privacyPolicy" target="_blank">
            Política de privacidad
          </Link>
          |
          <Link href="/terms&conditions" target="_blank">
            Términos & Condiciones
          </Link>
        </p>
        <p className={style.p2}>
          <br />
          ©2024 all rights reserved by Tokin Privacy.
        </p>
        <p className={style.empContent} style={{ color: "#666" }}>
          Blue Ocean 1984 LLC
          <br />
          30 N GOULD ST STE R Sheridan, WY 82801 Estados Unidos (307) 219-0316
        </p>
      </div>
    </div>
  );
};

export default Footer;
