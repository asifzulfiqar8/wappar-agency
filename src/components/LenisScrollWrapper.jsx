"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

let lenis;

const LenisScrollWrapper = ({ children }) => {
  useEffect(() => {
    lenis = new Lenis({
      smooth: true,
      smoothTouch: true,
      direction: "vertical",
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return <div>{children}</div>;
};

export const pauseLenis = () => lenis?.stop();
export const resumeLenis = () => lenis?.start();
export default LenisScrollWrapper;
