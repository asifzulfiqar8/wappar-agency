"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "/assets/images/hero/associated-press.png",
  "/assets/images/hero/cbs.png",
  "/assets/images/hero/daily-news.png",
  "/assets/images/hero/image.png",
];

const BrandsSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Duplicate images to create a seamless loop
    const totalImages = [...images, ...images, ...images, ...images];

    // Set up GSAP animation
    const animation = gsap.to(marquee, {
      x: "-100%",
      duration: 150,
      ease: "none",
      repeat: -1,
    });

    return () => animation.kill();
  }, []);

  return (
    <section className="w-full overflow-hidden py-[30px] md:py-[70px]">
      <div
        ref={marqueeRef}
        className="flex w-max gap-6 md:gap-10 items-center"
        style={{ display: "flex" }}
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
