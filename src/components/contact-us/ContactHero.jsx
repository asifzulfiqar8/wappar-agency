"use client";

import React from "react";
import Input from "../Input";
import Button from "../Button";
import Image from "next/image";
import Textarea from "../Textarea";

const ContactHero = () => {
  return (
    <article className="w-full px-4 pb-5 md:pb-0">
      <section className="bg-black rounded-[20px] w-full relative">
        <div className="absolute bottom-[-130px] left-1/2 transform -translate-x-1/2 w-full hidden md:block">
          <Image
            src="/assets/images/vector.png"
            width={1455}
            height={200}
            alt="vector"
          />
        </div>
        <div className="md:container mx-auto px-4 py-12 md:py-20">
          <section className="grid xl:grid-cols-2 grid-cols-1 gap-4 justify-between">
            <div className="space-y-[16px] md:space-y-[24px] max-w-[611px]">
              <h1 className="font-dmsans text-[38px] md:text-[76px] font-[700] md:font-[800] leading-[38px] md:leading-[68.4px] text-white text-center md:text-left">
                We're Here to Help - Let's Talk About Your App!
              </h1>
              <p className="text-[#8B949E] font-geist text-[17.16px] leading-[24.02px] font-[500] text-center md:text-left max-w-[611px]">
                Got questions or ready to start your app journey? Our team is
                available 7 days a week to provide expert advice and support
                tailored to your business needs.
              </p>
            </div>
            <div className="rounded-[20px] p-px bg-gradient-to-b from-[#f8f8f86e] to-[#191919] to-[90%]">
              <form className="space-y-4 bg-[#0C0C0C] backdrop-blur-lg px-[22.36px] py-[28px] rounded-[21px] w-full">
                <Input label="Name" placeholder="Enter name" type="text" />
                <Input label="Email" placeholder="Enter mail" type="email" />
                <Input
                  label="Phone Number"
                  placeholder="Enter phone number"
                  type="number"
                />
                <Input
                  label="Company Name"
                  placeholder="Enter business name"
                  type="text"
                />
                <Input
                  label="Website"
                  placeholder="Enter website"
                  type="text"
                />
                <Textarea label="Message" placeholder="Enter message" />
                <div className="space-y-4">
                  <p className="text-[#8B949E] text-xs md:text-base">
                    By submitting this form you agree to our terms and
                    conditions and our Privacy Policy, which explains how we may
                    collect, use and disclose your personal information,
                    including to third parties.
                  </p>
                  <Button
                    text="Send message"
                    width="w-full"
                    height="h-[48px]"
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
};

export default ContactHero;
