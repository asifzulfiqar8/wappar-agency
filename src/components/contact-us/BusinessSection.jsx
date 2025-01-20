"use client";
import React from "react";
import Input from "../Input";
import { MessageIcon } from "@/assets/icons";
import Button from "../Button";

const BusinessSection = () => {
  return (
    <article className="bg-[#F9FAFB] ">
      <section className="md:container mx-auto px-4 py-[64px] md:py-[120px]">
        <div className="flex justify-center">
          <div className="space-y-[16px] max-w-[672px] text-center">
            <h3 className="text-[#23262F] font-extrabold text-[36px] md:text-[48px] leading-none font-dmsans">
              Ready to bring your business to the mobile world?
            </h3>
            <p className="text-[#6B7280] text-xl font-geist">
              Let’s make it happen. Book your free 30-minute consultation now!
            </p>
            <div className="flex flex-col lg:flex-row gap-4 items-end justify-center w-full mt-8">
              <div className="lg:w-fit w-full">
                <Input
                  placeholder="Enter your email"
                  border="border-[#D1D5DB] border-[1px]"
                  background="white"
                  textColor="text-[#6B7280] placeholder:text-sm text-sm"
                  icon={<MessageIcon />}
                  height="h-[48px] md:h-[52px]"
                />
              </div>
              <Button
                text="Book now"
                height="h-[48px] md:h-[52px]"
                width="w-full lg:w-fit"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BusinessSection;
