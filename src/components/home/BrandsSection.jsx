"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "/assets/images/hero/associated-press.png",
  "/assets/images/hero/cbs.png",
  "/assets/images/hero/daily-news.png",
  "/assets/images/hero/image.png",
  "/assets/images/hero/nbc.png",
];

const BrandsSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    const totalImages = [...images, ...images, ...images, ...images];

    const totalWidth = marquee.scrollWidth;

    const animation = gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -totalWidth / 2,
        duration: 150,
        ease: "none",
        repeat: -1,
      }
    );

    return () => animation.kill();
  }, []);

  return (
    <section className="w-full overflow-hidden py-[30px] md:py-[70px] relative">
       <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-[15rem] bg-gradient-to-r from-[#ffffff96] to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-[15rem] bg-gradient-to-l from-[#ffffff96] to-transparent z-10"></div>
      </div>
      <div
        ref={marqueeRef}
        className="flex w-max gap-[30px] md:gap-[62px] items-center"
      >
        {[...images, ...images, ...images, ...images].map((image, i) => (
          <Image
            key={i}
            className="w-full h-[20px] sm:h-[30px] md:h-[50px] object-contain"
            src={image}
            width={150}
            height={50}
            alt={`brand-${i}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
