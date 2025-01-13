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
  const imageWrapperRef = useRef(null);
  const [image, setImage] = useState("/assets/images/home/image-1.png");
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
        onEnter: () => {
          setImage(images[index]);
          setActiveSection(index);
        },
        onEnterBack: () => {
          setImage(images[index]);
          setActiveSection(index);
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  useEffect(() => {
    if (imageWrapperRef.current) {
      gsap.fromTo(
        imageWrapperRef.current,
        { opacity: 0.6 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, [image]);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        height: `${((activeSection + 1) / businessData.length) * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [activeSection]);

  return (
    <section className="w-full hidden lg:block">
      <section className="container mx-auto px-4 pt-[80px] pb-[70px]">
        <h6 className="text-[48px] font-extrabold md:font-semibold text-[#23262F] text-center max-w-[1020px] mx-auto leading-none font-dmsans">
          Why Your Business Needs a Wappr-Built App
        </h6>
        <p className="my-4 text-sm lg:text-2xl font-geist text-[#777E90] text-center max-w-[800px] mx-auto">
          Boost sales, enhance customer experiences, and streamline operations
          with a Wappr-built app designed specifically for your business needs.
        </p>
        <div className="flex justify-center">
          <Link href="/pricing">
            <Button text="View packages" weight="font-medium" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row mt-[40px]">
          <div className="md:w-1/2 sticky top-0 h-screen flex items-center justify-center gap-8">
            {/* progress bar */}
            <div className="relative w-1 h-[80px] my-auto bg-[#E6E8EC] rounded-full rotate-180">
              <div
                ref={progressBarRef}
                className="absolute bottom-0 w-full bg-primary rounded-full"
              ></div>
            </div>
            <div
              ref={imageWrapperRef}
              className="relative w-full h-auto flex items-center justify-center"
              style={{ opacity: 1 }}
            >
              <Image
                src={image}
                alt="Business Section"
                width={544}
                height={402}
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* Right Scrollable Content */}
          <div className="md:w-1/2">
            {businessData.map((data, i) => (
              <div
                className="business-section h-screen flex items-center justify-center p-8"
                key={i}
              >
                <div className="flex flex-col gap-6 max-w-[418px]">
                  <h6 className="text-[32px] text-[#23262F] font-bold font-geist">
                    0{i + 1}.
                  </h6>
                  <div className="h-[2px] max-w-[256px] w-full bg-[#E6E8EC]"></div>
                  <div>
                    <h5 className="text-base font-medium font-geist text-[#23262F]">
                      {data.title}
                    </h5>
                    <p className="text-sm font-geist text-[#777E90] mt-4">
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
