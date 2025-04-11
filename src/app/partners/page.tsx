import React from "react";
import Home from "./Sections/Home";
import BgOfBg from "./Sections/BgOfBg";
import Modulos from "./Sections/Modulos";
import Planes from "./Sections/Planes";
import BulletsPoints from "./Sections/BulletsPoints";
import Faq from "./Sections/Faq";
import Footer from "./Sections/footer/footer";

const page = () => {
  return (
    <div className="pt-5 md:pt-10">
      <BgOfBg />
      <Home />
      <BulletsPoints />
      <Modulos />
      <Planes />
      <Faq />
      <Footer partners />
    </div>
  );
};

export default page;
