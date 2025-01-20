import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";

const ViewPricing = () => {
  return (
    <section
      className="w-full rounded-t-[24px] md:rounded-t-[60px]"
      style={{
        background:
          "radial-gradient(45.34% 45.34% at 50.83% -0.05%, #18181B 0%, #191919 100%)",
      }}
    >
      <section className="container mx-auto px-4 pt-[74px] pb-[47px] md:py-[115px]">
        <div className="relative">
          <div className="absolute top-[-70px] md:top-[-95px] left-1/2 transform -translate-x-1/2 w-full z-0">
            <Image
              src="/assets/images/vector.png"
              width={1455}
              height={200}
              alt="vector"
              className="w-full h-[200px] object-cover md:object-contain"
            ></Image>
          </div>
          <h3 className="text-[56px] text-white font-extrabold font-dmsans text-center max-w-[560px] mx-auto leading-[67px]">
            No Matter Your Industry,
          </h3>
          <p className="mt-4 text-base md:text-lg text-[#8B949E] font-geist text-center max-w-[724px] mx-auto">
            Wappr delivers a custom app that meets your business needs. Schedule
            your free consultation today, and let’s bring your business to the
            mobile world!
          </p>
          <div className="justify-center hidden md:flex">
            <Link href="/pricing" className="mt-8 w-full sm:w-auto">
              <Button
                text="View pricing"
                weight="font-medium"
                height="h-[66px]"
              />
            </Link>
          </div>
          <div className="flex justify-center md:hidden">
            <Link href="/contact-us" className="mt-8 w-full sm:w-auto">
              <Button
                text="Send message"
                weight="font-medium"
                height="h-[48px]"
              />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ViewPricing;
