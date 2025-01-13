import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect } from "react";
const mobileImg = "/assets/images/home/mobile.png";
const mobileHandImg = "/assets/images/home/mobile-in-hand.png";

gsap.registerPlugin(ScrollTrigger);

const TransformSec = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky",
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Add GSAP animation: scale and opacity
    timeline.fromTo(
      ".mobile-hand",
      {
        // scale: 1.1,
        opacity: 0,
      },
      {
        // scale: 1,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="w-full bg-[#191919] hidden xl:block">
      <section className="container mx-auto px-4 pt-[110px]">
        <h6 className="text-[32px] md:text-[48px] font-extrabold md:font-semibold text-white text-center max-w-[995px] mx-auto leading-none font-dmsans">
          Transforming Ideas into Digital Experiences.
        </h6>
        <p className="my-4 text-sm lg:text-2xl font-geist text-[#777E90] text-center max-w-[631px] mx-auto">
          See how we’ve helped businesses thrive through design.
        </p>
        <section className="mt-[108px] grid grid-cols-3 gap-10 xl:gap-28 place-items-center relative">
          {/* images section scrolling */}
          <div>
            <Image src={mobileImg} width={300} height={500} alt="image" />
          </div>
          <div className="sticky top-0 h-screen">
            {/* middle image */}
            <div className="relative w-[810px] h-full">
              <Image
                className="mobile-hand absolute top-0 left-[20%] w-full h-screen"
                src={mobileHandImg}
                width={810}
                height={749}
                alt="image"
              />
            </div>
          </div>
          <div>
            <Image src={mobileImg} width={300} height={500} alt="image" />
          </div>
          <div className="pb-[110px]">
            <Image src={mobileImg} width={300} height={500} alt="image" />
          </div>
          <div className="pb-[110px]"></div>
          <div className="pb-[110px]">
            <Image src={mobileImg} width={300} height={500} alt="image" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default TransformSec;
