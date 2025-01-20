"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { businessData } from "./data";
import Link from "next/link";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const BusinessSec = () => {
  const imageWrapperRefs = useRef([]);
  const progressBarRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".business-section");
    const images = [
      "/assets/images/home/image-1.png",
      "/assets/images/home/image-2.png",
      "/assets/images/home/image-3.png",
      "/assets/images/home/image-4.png",
    ];

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => handleImageTransition(index, images, true),
        onEnterBack: () => handleImageTransition(index, images, false),
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const handleImageTransition = (index, images, isEntering) => {
    setActiveSection(index);

    const currentImage = imageWrapperRefs.current[index];
    const previousImage = imageWrapperRefs.current[index - 1];

    // If scrolling forward, fade in the current image and fade out the previous one
    if (isEntering) {
      if (previousImage) {
        gsap.to(previousImage, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      if (currentImage) {
        gsap.fromTo(
          currentImage,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    }
    // If scrolling backward, fade in the current image and fade out the next one
    else {
      const nextImage = imageWrapperRefs.current[index + 1];

      if (nextImage) {
        gsap.to(nextImage, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      if (currentImage) {
        gsap.fromTo(
          currentImage,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    }
  };

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        height: `${((activeSection + 1) / businessData.length) * 100}%`,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [activeSection]);

  return (
    <section className="w-full hidden lg:block">
      <section className="container mx-auto px-4 pt-[80px] pb-[70px]">
        <h6 className="text-[48px] font-extrabold text-[#23262F] text-center max-w-[1020px] mx-auto leading-none font-dmsans">
          Why Your Business Needs a Wappr-Built App
        </h6>
        <p className="my-4 text-sm lg:text-2xl font-geist text-[#777E90] text-center max-w-[800px] mx-auto">
          Unlock growth, streamline operations, and enhance customer engagement
          with a tailor-made Wappr solution.
        </p>
        <div className="flex justify-center">
          <Link href="/pricing">
            <Button text="View packages" weight="font-medium" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row mt-[40px]">
          {/* Left Sticky Section */}
          <div className="md:w-1/2 sticky top-0 h-[80vh] flex items-center justify-center gap-8">
            {/* Progress Bar */}
            <div className="relative w-1 h-[80px] my-auto bg-[#E6E8EC] rounded-full rotate-180">
              <div
                ref={progressBarRef}
                className="absolute bottom-0 w-full bg-primary rounded-full"
              ></div>
            </div>
            {/* Images */}
            <div className="relative w-full h-auto flex items-center justify-center">
              {businessData.map((_, index) => (
                <Image
                  key={index}
                  ref={(el) => (imageWrapperRefs.current[index] = el)}
                  src={`/assets/images/home/image-${index + 1}.png`}
                  alt={`Business Section ${index + 1}`}
                  width={544}
                  height={402}
                  className="absolute object-cover w-full opacity-0" // Initially hidden
                />
              ))}
            </div>
          </div>

          {/* Right Scrollable Content */}
          <div className="md:w-1/2">
            {businessData.map((data, i) => (
              <div
                className="business-section h-[80vh] flex items-center justify-center p-8"
                key={i}
              >
                <div className="flex flex-col gap-6 max-w-[418px]">
                  <h6 className="text-[32px] xl:text-[36px] text-[#23262F] font-bold font-geist">
                    0{i + 1}.
                  </h6>
                  <div className="h-[2px] max-w-[256px] w-full bg-[#E6E8EC]"></div>
                  <div>
                    <h5 className="text-base xl:text-lg font-medium font-geist text-[#23262F]">
                      {data.title}
                    </h5>
                    <p className="text-sm xl:text-base font-geist text-[#777E90] mt-4">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BusinessSec;
