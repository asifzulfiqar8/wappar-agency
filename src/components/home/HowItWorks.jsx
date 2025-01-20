import { AppIcon, PublishIcon, TimerIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#FCFCFD] py-7 md:py-[110px]">
      <section className="container px-5 md:px-4 mx-auto">
        <h6 className="text-[32px] lg:text-[48px] font-extrabold text-[#23262F] text-center max-w-[825px] mx-auto leading-none font-dmsans">
          How It Works:{" "}
          <span className="hidden lg:inline ">
            A done for you service
          </span>
          <span className="inline  lg:hidden"> Building Made Simple</span>
        </h6>
        <p className="my-4 text-sm lg:text-2xl font-geist text-[#777E90] text-center  mx-auto">
          A Simple, Quick, and Fully Managed App-Building Process
        </p>
        <div className="mt-6 md:mt-[60px] relative">
          {/* first */}
          <div className="flex items-start lg:items-center lg:justify-center gap-5 lg:gap-[50px] relative z-10">
            <div className="basis-[47%] hidden lg:flex justify-end">
              {/* <Image
                src="/assets/images/home/service-1.png"
                width={180}
                height={180}
                alt="service-image"
                style={{
                  filter: "drop-shadow(0px 0px 64px rgba(15, 15, 15, 0.15))",
                }}
              /> */}
              <TimerIcon />
            </div>
            <div className="basis-[6%] flex justify-center">
              <div className="size-[50px] lg:size-[60px] rounded-full grid place-items-center bg-primary text-white text-2xl font-semibold font-geist">
                1
              </div>
            </div>
            <div className="lg:basis-[47%] space-y-[12px]">
              <h6 className="text-2xl lg:text-[32px] font-extrabold font-dmsans text-[#23262F]">
                30-Minute Meeting
              </h6>
              <p className="text-sm leading-[24px] font-geist text-[#777E90] max-w-[575px]">
                We start with a quick 30-minute consultation to understand your
                business, goals, and vision for the app. We’ll cover everything
                from design preferences to the features you need.
              </p>
            </div>
          </div>
          {/* second  */}
          <div className="flex items-start lg:items-center lg:justify-center gap-5 lg:gap-[50px] my-[50px] lg:my-[40px] relative z-10">
            <div className="basis-[47%] hidden lg:block space-y-[12px]">
              <h6 className="text-2xl lg:text-[32px] font-extrabold font-dmsans text-[#23262F] text-right">
                7-Day App Build
              </h6>
              <p className="text-sm leading-[24px] font-geist text-[#777E90] pl-5 text-right ">
                Sit back and relax while our expert team builds your app within
                7 days. We handle all the design, development, and integration
                to ensure a seamless experience.
              </p>
            </div>
            <div className="basis-[6%] flex justify-center">
              <div className="size-[50px] lg:size-[60px] rounded-full grid place-items-center bg-primary text-white text-2xl font-semibold font-geist">
                2
              </div>
            </div>
            <div className="lg:basis-[47%]">
              {/* <Image
                className="hidden lg:block"
                src="/assets/images/home/service-2.png"
                width={202}
                height={200}
                alt="service-image"
                style={{
                  filter: "drop-shadow(0px 0px 64px rgba(15, 15, 15, 0.15))",
                }}
              /> */}
              <div className="hidden lg:block">
                <AppIcon />
              </div>
              <h6 className="text-2xl lg:text-[32px] font-extrabold font-dmsans text-[#23262F] block lg:hidden">
                7-Day App Build
              </h6>
              <p className="text-sm leading-[24px] font-geist text-[#777E90] mt-3 block lg:hidden">
                Sit back and relax while our expert team builds your app within
                7 days. We handle all the design, development, and integration
                to ensure a seamless experience.
              </p>
            </div>
          </div>
          {/* third */}
          <div className="flex items-start lg:items-center lg:justify-center gap-5 lg:gap-[50px] relative z-10">
            <div className="basis-[47%] hidden lg:flex justify-end">
              {/* <Image
                src="/assets/images/home/service-3.png"
                width={202}
                height={200}
                alt="service-image"
                style={{
                  filter: "drop-shadow(0px 0px 64px rgba(15, 15, 15, 0.15))",
                }}
              /> */}
              <PublishIcon />
            </div>
            <div className="basis-[6%] flex justify-center">
              <div className="size-[50px] lg:size-[60px] rounded-full grid place-items-center bg-primary text-white text-2xl font-semibold font-geist">
                3
              </div>
            </div>
            <div className="lg:basis-[47%] space-y-[12px]">
              <h6 className="text-2xl lg:text-[32px] font-extrabold font-dmsans text-[#23262F]">
                Review & Publish
              </h6>
              <p className="text-sm leading-[24px] font-geist text-[#777E90] max-w-[575px]">
                You get to review the final product. Once you’re happy, we’ll
                publish your app on Google Play and the App Store – all taken
                care of by our team.
              </p>
            </div>
          </div>
          {/* border linear */}
          <div className="absolute top-0 lg:top-[19%] left-[25px] sm:left-[25px] lg:left-1/2 z-0 flex flex-col gap-2">
            <svg
              className="hidden lg:block"
              width="2"
              height="600"
              viewBox="0 0 2 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="4.37114e-08"
                x2="0.999993"
                y2="600"
                stroke="#1C64F2"
                strokeWidth="2"
                strokeDasharray="10 10"
              />
            </svg>
            <svg
              className="block lg:hidden"
              width="2"
              height="200"
              viewBox="0 0 2 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="4.37114e-08"
                x2="0.999993"
                y2="200"
                stroke="#1C64F2"
                strokeWidth="2"
                strokeDasharray="10 10"
              />
            </svg>
            <svg
            className="block lg:hidden"
              width="2"
              height="140"
              viewBox="0 0 2 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="4.37114e-08"
                x2="0.999993"
                y2="170"
                stroke="#1C64F2"
                strokeWidth="2"
                strokeDasharray="10 10"
              />
            </svg>
            <svg
              width="2"
              height="150"
              viewBox="0 0 2 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="4.37114e-08"
                x2="0.999993"
                y2="170"
                stroke="url(#paint0_linear_24_86)"
                strokeWidth="2"
                strokeDasharray="10 10"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_24_86"
                  x1="-0.5"
                  y1="-2.18557e-08"
                  x2="-0.500007"
                  y2="170"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3772FF" />
                  <stop offset="1" stopColor="#3772FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
