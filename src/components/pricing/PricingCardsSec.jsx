"use client";

import { CheckedIcon } from "@/assets/icons";
import Button from "../Button";
import Image from "next/image";
import { useState } from "react";

const features = [
  "Android/IOS Apps",
  "Unlimited push notifications",
  "Managed & maintained for you",
  "Published on Apple store",
  "Published on Play store",
  "Dedicated account manager",
];

const featuresTwo = [
  "MacOS application (published on Mac Store)",
  "Windows application (Published on Windows store)",
  "Linux application",
];

const monthlyPrice = ["97", "67"];
const yearlyPrice = ["970", "670"];

const PricingCardsSec = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <section>
      <div className="mt-4 mb-8 flex md:hidden items-center bg-[#1C64F233] border border-[#0000001A] rounded-full max-w-[400px] mx-auto">
        {["monthly", "yearly"].map((tab, i) => (
          <button
            className={`rounded-full py-[9px] px-6 capitalize text-white text-sm font-medium font-geist flex-1 ${
              activeTab === tab ? "opacity-100" : "opacity-50"
            }`}
            key={i}
            onClick={() => setActiveTab(tab)}
            style={{
              background:
                activeTab === tab
                  ? "linear-gradient(180deg, #3772FF 0%, rgba(55, 114, 255, 0.2) 100%)"
                  : "transparent",
              border:
                activeTab === tab
                  ? "1px solid #3772ff"
                  : "1px solid transparent",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8 lg:mt-[57px] justify-items-center">
        <PricingCard
          price={activeTab === "monthly" ? monthlyPrice : yearlyPrice}
        />
      </div>
    </section>
  );
};

export default PricingCardsSec;

const PricingCard = ({ price, activeTab }) => {
  return (
    <>
      {/* Card one */}
      <div className="rounded-xl p-px bg-gradient-to-b from-[#ffffff6e] to-[#191919] to-[90%] max-w-[460px] w-full h-max">
        <div className="pricing_card bg-[#313131] p-4 md:p-8 rounded-xl w-full max-w-[460px] lg:ml-auto h-max">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-[15px] p-px bg-gradient-to-b from-[#bbcfff] to-[#bbcfff33] to-[90%]">
              <h6 className="cost bg-[#3768DD] text-center py-1 px-3 rounded-full text-white text-sm font-geist h-[29px]">
                $0 up-front cost
              </h6>
            </div>
            <p className="text-white text-center text-2xl font-semibold font-dmsans ">
              Business plan
            </p>
            <h6 className="text-[72px] font-semibold font-geist text-[#5959594A] price leading-none">
              ${price[0]}{" "}
              <span className="text-[36px]">
                /{activeTab === "monthly" ? "mo" : "yr"}
              </span>
            </h6>
            <p className="text-base font-geist text-[#8B949E]">
              7 day money back guarantee
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {features.map((list, i) => (
              <List key={i} list={list} />
            ))}
            <div className="flex items-center justify-center gap-12">
              <Image
                src="/assets/images/pricing/andriod.png"
                width={38}
                height={40}
                alt="andriod"
              />
              <Image
                src="/assets/images/pricing/app.png"
                width={38}
                height={40}
                alt="app"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              {["Done for you service", "Built in 7 days"].map((list, i) => (
                <List key={i} list={list} />
              ))}
            </div>
            <Button
              text="Get started"
              width="w-full"
              bg="bg-white text-[#000]"
              weight="font-medium"
              radius="rounded-lg"
              border="border border-transparent"
            />
          </div>
        </div>
      </div>
      {/* Card two */}
      <div className="rounded-xl p-px bg-gradient-to-b from-[#ffffff6e] to-[#191919] to-[90%] max-w-[460px] w-full h-max">
        <div className="pricing_card bg-[#313131] p-4 md:p-8 rounded-xl w-full max-w-[460px] lg:mr-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-[15px] p-px bg-gradient-to-b from-[#bbcfff] to-[#bbcfff33] to-[90%]">
              <h6 className="cost bg-[#3768DD] text-center py-1 px-3 rounded-full text-white text-sm font-geist">
                $0 up-front cost
              </h6>
            </div>
            <p className="text-white text-center text-2xl font-semibold font-dmsans ">
              Business plan
            </p>
            <h6 className="text-[72px] font-semibold font-geist text-[#5959594A] price leading-none">
              ${price[1]}{" "}
              <span className="text-[36px]">
                /{activeTab === "yearly" ? "mo" : "yr"}
              </span>
            </h6>
            <p className="text-base font-geist text-[#8B949E]">
              7 day money back guarantee
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {featuresTwo.map((list, i) => (
              <List key={i} list={list} />
            ))}
            <div className="flex items-center justify-between md:justify-center gap-5 md:gap-12">
              <Image
                src="/assets/images/pricing/andriod.png"
                width={38}
                height={40}
                alt="andriod"
              />
              <Image
                src="/assets/images/pricing/windows.png"
                width={38}
                height={40}
                alt="windows"
              />
              <Image
                src="/assets/images/pricing/linux.png"
                width={38}
                height={40}
                alt="linux"
              />
              <Image
                src="/assets/images/pricing/app.png"
                width={38}
                height={40}
                alt="app"
              />
            </div>
            <div className="pt-4 border-t border-[#F8F8F817] border-dashed">
              <h6 className="text-white text-base font-medium font-geist">
                Includes everything in Business plan.
              </h6>
              <div className="mt-4 flex flex-col gap-4">
                {[
                  "Android/IOS Apps",
                  "Unlimited push notifications",
                  "Managed & maintained for you",
                ].map((list, i) => (
                  <List key={i} list={list} i={i} />
                ))}
              </div>
            </div>
            <Button
              text="Get started"
              width="w-full"
              bg="bg-white text-[#000]"
              weight="font-medium"
              radius="rounded-lg"
              border="border border-transparent"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ list, i }) => {
  return (
    <div
      className={`flex items-center gap-[10px] ${
        i == 0 ? "opacity-70" : i == 1 ? "opacity-40" : i === 2 && "opacity-15"
      }`}
    >
      <div className="size-[16px] mb-[2px] sm:mb-[6px]">
        <CheckedIcon />
      </div>
      <p className={`text-base font-medium text-[#FFFFFF90]`}>{list}</p>
    </div>
  );
};
