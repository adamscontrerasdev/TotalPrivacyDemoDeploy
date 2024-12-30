"use client";
import React from "react";
import GetVideo from "./getvideo";
import PairButtons from "./BDCompra/PairButtons";

const VideoComponent = () => {
  return (
    <div
      className={`w-screen h-auto `}
      style={{
        background:
          "radial-gradient(circle at center, #203adf30 10%, black 70%)",
      }}
    >
      <div className={`w-full h-full py-20 gap-3 flex flex-col items-center `}>
        <h2
          className={`text-center text-4xl text-white`}
          style={{
            WebkitTextSizeAdjust: "100%",
            fontFamily: "Instrument Sans, sans-serif",
            boxSizing: "border-box",
            color: "#fff",
            textAlign: "center",
            letterSpacing: "0",
            textTransform: "none",
            WebkitTextFillColor: "transparent",
            backgroundImage:
              "linear-gradient(rgba(177, 177, 177, 0.55), #fff 0%, rgba(235, 235, 235, 0.88) 58%, rgba(0, 0, 0, 0))",
            backgroundClip: "text",
            fontSize: "2.3em",
            paddingBottom: "10px",
            fontWeight: "500",
            lineHeight: "1",
            maxWidth: "1400px",
          }}
        >
          MASTER <br /> TOTAL PRIVACY{" "}
        </h2>
        <div className={` text-center w-3/4 lg:w-1/2 text-xl`}>
          <p>
            En el curso Privacidad Total recuperarás tu privacidad a través de
            un reinicio digital que marcará un antes y un después en tu vida,
            sin necesidad de conocimientos previos{" "}
          </p>
        </div>
        {/*aca va el video*/}
        <GetVideo></GetVideo>
        <PairButtons></PairButtons>
      </div>
    </div>
  );
};

export default VideoComponent;
