import { CheckIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";

const list = [
  "Full app design and build",
  "Publishing to Google Play & App Store",
  "7 days a week phone and email support",
  "Ongoing maintenance and updates",
];

const PaymentSection = () => {
  return (
    <section className="bg-white w-full">
      <section className="container mx-auto px-4 pt-[60px] md:pt-[80px] pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[5rem] xl:gap-[10rem]">
          <div className="relative">
            <h6 className="text-[38px] font-bold md:font-extrabold font-dmsans text-[#23262F] max-w-[480px] leading-tight block lg:hidden">
              Affordable, Transparent Pricing – No Surprises
            </h6>
            <Image
              className="w-full mt-8 lg:mt-0"
              src="/assets/images/payment-pic.png"
              width={576}
              height={576}
              alt="payment-pic"
            ></Image>
            <p className="mt-4 text-sm md:text-base font-medium font-geist text-[#777E90] px-0 lg:px-4">
              Pay monthly with zero upfront costs. Get a professional,
              custom-built app for your business without breaking the bank
            </p>
            <Image
              className="absolute bottom-[15%] left-[-10%] rounded-lg shadow-imageShadow hidden lg:block"
              src="/assets/images/payment-leftside.png"
              width={172}
              height={178}
              alt="payment-pic"
            ></Image>
            <Image
              className="absolute top-[5%] right-[-8%] rounded-lg shadow-imageShadow hidden lg:block"
              src="/assets/images/payment-rightside.png"
              width={172}
              height={178}
              alt="payment-pic"
            ></Image>
          </div>
          <div className="flex flex-col justify-center">
            <h6 className="text-[38px] font-bold md:font-extrabold font-dmsans text-[#23262F] max-w-[480px] leading-tight hidden lg:block">
              Affordable, Transparent Pricing – No Surprises
            </h6>
            <div className="lg:mt-[47px] flex flex-col gap-3 md:gap-5">
              {list.map((text, i) => (
                <List text={text} key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PaymentSection;

const List = ({ text }) => {
  return (
    <div className="flex items-center gap-3 md:gap-[18px]">
      <div className="bg-[#E1EAFF] size-[48px] grid place-items-center rounded-xl">
        <CheckIcon />
      </div>
      <p className="text-base font-medium font-geist text-[#777E90]">{text}</p>
    </div>
  );
};
