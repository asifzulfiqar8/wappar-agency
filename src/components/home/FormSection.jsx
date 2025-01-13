"use client";

import { FormPhoneIcon, SettingIcon } from "@/assets/icons";
import Image from "next/image";
import dynamic from "next/dynamic";
const HomeForm = dynamic(() => import("@/components/home/HomeForm"));

const cardsData = [
  {
    title: "Phone & Email Support:",
    Icon: FormPhoneIcon,
    description:
      "Our team is available 7 days a week to provide personal support via phone and email. Whether you have questions, need updates, or want to discuss new features, we're here to help.",
  },
  {
    title: "Ongoing App Maintenance:",
    Icon: SettingIcon,
    description:
      "We don’t just build your app; we support it every step of the way. Our team is ready to handle updates, bug fixes, and enhancements as your business grows.",
  },
];

const FormSection = () => {
  return (
    <section className="w-full bg-[#191919] rounded-t-[24px] md:rounded-t-[60px]">
      <div className="container mx-auto pt-[70px] md:pt-[88px] pb-[70px] md:pb-[181px] px-4">
        <h2 className="font-extrabold text-[36px] md:text-[64px] font-dmsans text-center text-white max-w-[1000px] mx-auto">
          Here for You, 7 Days a Week – Real Support, Real People
        </h2>
        <div className="py-8 md:py-[180px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <h6 className="text-[36px] md:text-[64px] font-extrabold font-dmsans text-white text-center leading-none">
          Get your App built in 7 days!
        </h6>
        <p className="mb-[90px] text-center mt-4 font-medium md:font-normal text-base md:text-2xl font-geist text-[#777E90]">
          Enjoy $0 upfront cost !
        </p>
        <div className="relative">
          <div className="absolute top-[-95px] left-1/2 transform -translate-x-1/2 w-full hidden md:block z-0">
            <Image
              src="/assets/images/vector.png"
              width={1455}
              height={200}
              alt="vector"
            ></Image>
          </div>
          <HomeForm />
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, Icon, description }) => {
  return (
    <div className="border border-[#F8F8F820] bg-[#242424] rounded-[30px] py-[40px] px-4 md:px-[32px] flex flex-col items-center gap-4 md:gap-8">
      <Icon className="text-white" />
      <h6 className="text-white text-2xl md:text-[28px] font-semibold font-geist">
        {title}
      </h6>
      <p className="text-sm text-[#8B949E] font-geist text-center">
        {description}
      </p>
    </div>
  );
};

export default FormSection;
