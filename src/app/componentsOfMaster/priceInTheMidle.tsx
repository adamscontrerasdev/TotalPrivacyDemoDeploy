import React from "react";
import styles from "./../Master-Total-Privacy/page.module.css";

const PriceInTheMidle = () => {
  const price: string = "1490";
  return (
    <div className={`w-full flex flex-col items-center justify-center  h-40`}>
      <h2 className={styles.price}>€{price}</h2>
    </div>
  );
};

export default PriceInTheMidle;
