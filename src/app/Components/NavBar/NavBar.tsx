"use client";
import React from "react";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./NavBar.module.css";
import { useEffect, useState, useRef } from "react";
import { CursoOfTheNavBar, EBooksOfTheNavBar } from "./../../Elements/index";
import { useIsMobile } from "@/app/Elements/hooks";

export const NavBar = () => {
  const [isHover, setIsHover] = useState(false);
  const [whoIsHover, setWhoIsHover] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isContentHover, setIsContentHover] = useState(false);
  const [isLinkHover, setIsLinkHover] = useState(false);
  const isMobile = useIsMobile();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (who: string) => {
    if (isMobile) return;
    setIsLinkHover(true);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setIsHover(true);
    setWhoIsHover(who);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsLinkHover(false);
    if (!isContentHover && !isLinkHover) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setIsHover(false);
        setWhoIsHover("");
      }, 500);
    }
  };

  const handleContentMouseEnter = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setIsContentHover(true);
    setIsHover(true);
  };

  const handleContentMouseLeave = () => {
    setIsContentHover(false);
    setIsHover(false);
    setWhoIsHover("");
  };

  const handleClick = (who: string) => {
    if (!isMobile) return;
    if (whoIsHover === who) {
      setIsHover(false);
      setIsVisible(true);
      setIsLinkHover(false);
      setTimeout(() => {
        setWhoIsHover("");
      }, 500);
    } else {
      setIsLinkHover(true);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      setIsHover(true);
      setWhoIsHover(who);
      setIsVisible(true);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`bg-black bg-opacity-60 backdrop-blur-3xl backdrop-brightness-75 ${
        isHover ? (isMobile ? "h-[100%]" : "h-36") : "h-12"
      } w-full text-text flex flex-col items-center justify-between overflow-hidden fixed top-0 left-0 z-[9999] transition-all duration-500`}
    >
      {/* Top bar */}
      <div
        className={`w-full h-12 absolute top-0 left-0 flex items-center px-10 ${
          isMobile ? "justify-end" : "justify-between"
        }`}
      >
        {!isMobile && (
          <Link href={"/"}>
            <h1 className={`${styles.title} text-xs`}>TOTAL PRIVACY</h1>
          </Link>
        )}
        <FaMagnifyingGlass className="cursor-pointer" />
      </div>

      {/* Links */}
      <div className="flex flex-row items-center justify-around w-60 font-medium h-12">
        <Link
          href={"/cursos"}
          onMouseEnter={() => handleMouseEnter("Cursos")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("Cursos")}
          className="text-md relative px-2"
        >
          Cursos
          <div
            className={`${
              whoIsHover === "Cursos" ? "w-full" : "w-0"
            } h-[1px] bg-foreground bottom-0 left-0 absolute transition-all duration-200 shadow-[0_0_10px_theme(colors.foreground),0_0_20px_theme(colors.foreground)] `}
          ></div>
        </Link>

        <Link
          href={"/ebooks"}
          onMouseEnter={() => handleMouseEnter("E-books")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("E-books")}
          className="text-md relative px-2"
        >
          E-Books
          <div
            className={`${
              whoIsHover === "E-books" ? "w-full" : "w-0"
            } h-[1px] bg-foreground bottom-0 right-0 absolute transition-all duration-200 shadow-[0_0_10px_theme(colors.foreground),0_0_20px_theme(colors.foreground)]`}
          ></div>
        </Link>
      </div>

      {/* Hover content */}
      <div
        className={`flex flex-row items-center justify-around w-full ${
          isMobile ? "h-full" : "h-24"
        } font-medium absolute top-12`}
      >
        {isVisible && whoIsHover === "Cursos" && (
          <div
            onMouseEnter={handleContentMouseEnter}
            onMouseLeave={handleContentMouseLeave}
            className={`w-full transition-all duration-500 ${
              isHover ? "duration-500" : "duration-500"
            } ease-in-out absolute top-0 flex justify-center items-center bg-transparent ${
              isHover ? "h-full opacity-100" : "h-0"
            }`}
          >
            <CursoOfTheNavBar isVisible={isHover} duration={500} />
          </div>
        )}
        {isVisible && whoIsHover === "E-books" && (
          <div
            onMouseEnter={handleContentMouseEnter}
            onMouseLeave={handleContentMouseLeave}
            className={`w-full transition-all duration-500 ${
              isHover ? "duration-500" : "duration-500"
            } ease-in-out absolute top-0 flex justify-center items-center bg-transparent ${
              isHover ? "h-full opacity-100" : "h-0"
            }`}
          >
            <EBooksOfTheNavBar isVisible={isHover} duration={500} />
          </div>
        )}
      </div>
    </div>
  );
};
