import React from "react";
import styles from "./page.module.css";
import VideoComponent from "./../componentsOfMaster/videoComponent";
import PriceInTheMidle from "./../componentsOfMaster/priceInTheMidle";
import AboutUs from "./../componentsOfMaster/aboustUs/aboutUs";
import PC from "./../componentsOfMaster/PCurriC/PC";
import Products from "./../componentsOfMaster/Products/products";
import Price from "./../componentsOfMaster/price/Price";
import COfArrow from "./../componentsOfMaster/COfArrow/cOfArrow";
import Faq from "./../componentsOfMaster/FAQ/faq";
import Footer from "./../componentsOfMaster/footer/footer";
import ModalCompra from "../componentsOfMaster/BDCompra/ModalCompra/ModalCompra";
import { ScrollProvider } from "../componentsOfMaster/context/scrollContext";

const Home: React.FC = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center relative">
      <ScrollProvider>
        <VideoComponent></VideoComponent>
        <ModalCompra />
        <div className={styles.space}></div>
        <PriceInTheMidle></PriceInTheMidle>
        <div className={styles.space}></div>
        <AboutUs></AboutUs>
        <PC></PC>
        <COfArrow></COfArrow>
        <Products></Products>
        <Price></Price>

        <br />
        <div className={styles.space}></div>
        <Faq></Faq>
        <Footer></Footer>
      </ScrollProvider>
    </div>
  );
};

export default Home;
