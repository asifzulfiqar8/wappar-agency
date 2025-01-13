"use client";
import React, { useRef, useState } from "react";
import Button from "../Button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useGSAP(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "35% 30%",
          end: "90% 70%",
          scrub: 2,
        },
      });

      tl.to(headingRef.current, {
        y: -300,
        scale: 0,
        height: 50,
        opacity: 0,
        duration: 5,
      });

      tl.to(
        videoContainerRef.current,
        {
          y: -150,
          duration: 5,
        },
        "<"
      );
      // Play video when scrolled into view
      ScrollTrigger.create({
        trigger: videoContainerRef.current,
        start: "top 55%",
        end: "bottom 60%",
        onEnter: () => {
          if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
          }
        },
        onLeave: () => {
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        },
        onEnterBack: () => {
          if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
          }
        },
        onLeaveBack: () => {
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        },
      });
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "35% 30%",
          end: "90% 70%",
          scrub: 2,
        },
      });

      tl.to(headingRef.current, {
        y: -50,
        scale: 0.5,
        duration: 3,
      });

      tl.to(
        videoContainerRef.current,
        {
          y: -100,
          duration: 3,
        },
        "<"
      );
    }
  }, []);

  return (
    <article className="px-4 relative w-full" ref={containerRef}>
      <section className="bg-[#000] w-full rounded-[20px]">
        <section className="w-full relative z-[1] hero md:h-screen overflow-hidden">
          <div className="container mx-auto px-4 pt-5 md:pt-20">
            {/* header text start */}
            <div ref={headingRef}>
              <button className="max-w-[415px] mx-auto p-1 border rounded-full hero_heading flex items-center gap-1 text-sm font-geist text-white">
                <span className="bg-[#FFFFFF14] py-[2px] px-2 rounded-full">
                  0 upfront cost
                </span>
                Starting at $97 / month{" "}
                <span className="hidden sm:block"> -No upfront cost</span>
                <ArrowIcon />
              </button>
              <h1 className="mt-4 md:mt-6 max-w-[920px] mx-auto text-[38px] md:text-[85px] font-extrabold font-dmsans text-white text-center leading-none">
                App built in 7 days for $97 a month!
              </h1>
              <p className="mt-4 md:mt-6 text-base font-medium font-geist text-[#8B949E] text-center">
                Completely risk free with a 7 day money back guarantee
              </p>
              <div className="mt-4 md:mt-6 text-center">
                <Link href="/pricing">
                  <Button text="View pricing" height="h-[39px]" />
                </Link>
              </div>
            </div>
            {/* header text end */}
            {/* video */}
            <div
              className="relative mt-[54px] mb-[-5rem] md:mb-0"
              ref={videoContainerRef}
            >
              <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-full hidden md:block">
                <Image
                  src="/assets/images/vector.png"
                  width={1455}
                  height={200}
                  alt="vector"
                ></Image>
              </div>
              <div className="p-3 rounded-2xl border border-[#F8F8F82B] max-w-[1040px] 2xl:max-w-full 2xl:w-full relative mx-auto">
                <video
                  ref={videoRef}
                  src="/assets/video/video.mp4"
                  muted
                  className="w-full h-auto rounded-lg"
                ></video>
                <button
                  onClick={togglePlayPause}
                  className="absolute bottom-4 md:bottom-12 right-4 md:right-8 bg-[#494952] hover:bg-[#ffffff22] transition text-white size-8 md:size-16 flex items-center justify-center rounded-full shadow-lg"
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <rect x="6" y="5" width="4" height="14" />
                      <rect x="14" y="5" width="4" height="14" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <div
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[calc(100vw-9%)] md:w-[calc(100vw-3%)] h-full z-0 rounded-[20px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1b1b1b 100%)",
        }}
      ></div> */}
    </article>
  );
};

export default Hero;

const ArrowIcon = () => {
  return (
    <svg
      className="ml-1"
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.46973 1.5L6.46973 6.5L1.46973 11.5"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};
