"use client";
import Link from "next/link";
import React from "react";
import { IoWalletOutline, IoLogoBitcoin } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useScroll } from "../../context/scrollContext";

const ModalCompra = () => {
  const { isScrollDisabled, setScrollDisabled } = useScroll();
  const items = ["Bitcoin", "Tarjeta"];
  return (
    <div
      className="fixed w-screen h-screen  flex justify-center items-center z-[999999999] top-0 left-0 transition-all duration-300"
      style={{
        pointerEvents: isScrollDisabled ? "all" : "none",
        opacity: isScrollDisabled ? 1 : 0,
        backdropFilter: "blur(10px)",
        background: "rgba(0,0,0,0.5)",
      }}
      onClick={() => setScrollDisabled(false)}
    >
      <div
        className="w-[80%] md:w-96 py-11 rounded-xl flex flex-col items-center justify-center gap-5 relative overflow-hidden transition-all duration-300"
        style={{
          background: "#111c",
          backdropFilter: "blur(10px)",
          scale: isScrollDisabled ? 1 : 0,
        }}
      >
        <div
          className=" w-[12px] h-[12px] bg-red-500 rounded-full flex items-center justify-center absolute top-2 right-2 cursor-pointer"
          onClick={() => setScrollDisabled(false)}
        >
          <RxCross2 className="fill-white text-white" />
        </div>
        <h2 className="text-xl text-white">Debe escoger un metodo de pago</h2>
        <div className="w-full flex justify-center gap-5">
          {items.map((item) => (
            <Link
              href="#"
              key={item}
              className="px-5 py-3 bg-primary rounded-full md:hover:bg-[#10229c] transition-all duration-200 flex items-center gap-2 text-white"
            >
              {item}{" "}
              {item === "Bitcoin" ? (
                <IoLogoBitcoin className="text-white fill-white" />
              ) : (
                <IoWalletOutline className="text-white fill-white" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalCompra;
