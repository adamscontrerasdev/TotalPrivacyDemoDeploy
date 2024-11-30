import {
  BtcComponente,
  FinalComponent,
  FirstMosaicoComponents,
  WelcomeImg,
} from "@/app/Components";
import React from "react";

export const InicioScreen = () => {
  return (
    <div>
      <WelcomeImg />
      <FirstMosaicoComponents />
      <BtcComponente />
      <FinalComponent />
    </div>
  );
};
