"use client";
import React, { useState, useEffect, useRef, use } from "react";
import { notFound } from "next/navigation";
import data from "./../../../public/data/products.json";
import { CardOFProduct, StaticIsland } from "../Components";

const ContentList = ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = use(params);
  const items = data[type as "ebooks" | "cursos"];
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeCircle, setActiveCircle] = useState<string>(
    items ? items[0]?.key || "" : "",
  );
  const [scrolling, setScrolling] = useState(false); // Bloquear scroll continuo
  const lastTouchY = useRef<number | null>(null); // Guardar la posición del touch

  if (!items) {
    notFound();
  }

  const setRef = (itemKey: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[itemKey] = el;
  };

  const handleScroll = (direction?: "up" | "down") => {
    if (scrolling) return;

    const currentScroll = window.scrollY;
    const closestSectionIndex = Math.round(currentScroll / window.innerHeight);

    let targetIndex = closestSectionIndex;
    if (direction) {
      targetIndex =
        direction === "down"
          ? closestSectionIndex + 1
          : closestSectionIndex - 1;
    }

    const targetKey = items[targetIndex]?.key;
    const targetSection = sectionRefs.current[targetKey];

    if (targetSection) {
      setScrolling(true);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
      setActiveCircle(targetKey || "");
      window.history.replaceState(null, "", `#${targetKey}`);
      setTimeout(() => setScrolling(false), 800); // Aumenta el tiempo si el trackpad sigue siendo problemático
    }
  };

  let lastScrollDirection: "up" | "down" | null = null;

  const handleWheel = (event: WheelEvent) => {
    if (scrolling) {
      event.preventDefault();
      return;
    }

    const SCROLL_THRESHOLD = 50;
    const direction = event.deltaY > 0 ? "down" : "up";

    if (
      Math.abs(event.deltaY) > SCROLL_THRESHOLD &&
      direction !== lastScrollDirection
    ) {
      lastScrollDirection = direction;
      handleScroll(direction);
    }

    event.preventDefault();
  };

  const handleTouchStart = (event: TouchEvent) => {
    lastTouchY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (scrolling || lastTouchY.current === null) {
      event.preventDefault();
      return;
    }

    const currentTouchY = event.touches[0].clientY;
    const direction = currentTouchY < lastTouchY.current ? "down" : "up";
    handleScroll(direction);

    lastTouchY.current = currentTouchY;
    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [items, scrolling]);

  useEffect(() => {
    const updateActiveCircleWithHash = () => {
      const currentHash = window.location.hash.slice(1);
      if (currentHash && currentHash !== activeCircle) {
        setActiveCircle(currentHash);
        const targetSection = sectionRefs.current[currentHash];
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("hashchange", updateActiveCircleWithHash);

    return () => {
      window.removeEventListener("hashchange", updateActiveCircleWithHash);
    };
  }, [activeCircle]);

  return (
    <div>
      <div
        className="left-0 w-full min-h-[100vh] top-0 flex flex-col justify-center items-center"
        style={{
          background:
            "radial-gradient(circle at center, rgba(32, 58, 223, 0.2) 10%, rgba(0, 0, 0, 0.85) 50%, black 100%)",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="section w-screen h-screen flex flex-col items-center justify-center"
            id={item.key}
            ref={setRef(item.key)}
          >
            <CardOFProduct
              title={item.title}
              price={item.price}
              currency={item.currency}
              Bg={item.Bg}
              description={item.description}
              before={item.before}
              order={item.order}
              video={"video" in item ? item.video : undefined}
            />
          </div>
        ))}
      </div>
      <StaticIsland items={items} activeCircle={activeCircle}></StaticIsland>
    </div>
  );
};

export default ContentList;
