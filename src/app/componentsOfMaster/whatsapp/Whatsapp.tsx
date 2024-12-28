import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import style from ".//whatsapp.module.css";
import Link from "next/link";
const Whatsapp = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone="
      target="blank"
      className={style.fatherOFLogo}
    >
      <IoLogoWhatsapp className={style.whatsapp} />
    </Link>
  );
};

export default Whatsapp;
