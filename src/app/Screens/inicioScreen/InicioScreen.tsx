import {
  BtcComponente,
  CtaMasterPrivacy,
  FirstMosaicoComponents,
  Footer,
  WelcomeImg,
} from "@/app/Components";
import React from "react";

export const InicioScreen = () => {
  return (
    <div>
      <WelcomeImg />
      <FirstMosaicoComponents />
      <BtcComponente />
      <CtaMasterPrivacy />
      <Footer />
    </div>
  );
};
