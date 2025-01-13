"use client";

import React, { useState } from "react";
import Button from "../Button";
import {
  MailIcon,
  CallIcon,
  RightArrowIcon,
  SupportIcon,
} from "@/assets/icons";
import Modal from "../Modal";
import CallBackModal from "./CallBackModal";
const SpeakSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCallModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <article className="md:container mx-auto px-4 py-12 md:py-[112px]">
      <section>
        <h3 className="text-[#23262F] font-dmsans text-center font-[700] md:font-[800] text-3xl md:text-5xl">
          Prefer to Speak Directly? <br /> We're Just a Click or
          <br className="block md:hidden" /> Email Away!
        </h3>
        <section className="flex lg:flex-row gap-[64px] lg:gap-0 flex-col justify-center lg:justify-between my-[32px] md:mt-[60px]">
          {/* Email Section */}
          <div className="flex flex-col items-center lg:max-w-[384px] px-5 space-y-[16px]">
            <MailIcon />
            <h3 className="text-[20px] font-[700] text-[#111928] font-geist">
              Email us:
            </h3>
            <p className="text-[#6B7280] text-base font-[400] text-center font-geist">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <Button
              text="h1@wapper.io"
              bg="bg-none border-none text-primary"
              weight="font-[700]"
            />
          </div>

          {/* Call Section */}
          <div className="flex flex-col items-center lg:max-w-[384px] px-5 space-y-[16px]">
            <CallIcon />
            <h3 className="text-[20px] font-[700] text-[#111928] font-geist">
              Call us:
            </h3>
            <p className="text-[#6B7280] text-base font-[400] text-center font-geist">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>
            <Button
              text="Request a Callback"
              bg="bg-none text-primary"
              weight="font-[500]"
              radius="rounded-[8px]"
              endIcon={<RightArrowIcon />}
              width="w-fit"
              onClick={handleCallModalOpen}
            />
          </div>

          {/* Live Support Section */}
          <div className="flex flex-col items-center lg:max-w-[384px] px-5 space-y-[16px]">
            <SupportIcon />
            <h3 className="text-[20px] font-[700] text-[#111928] font-geist">
              Live Support
            </h3>
            <p className="text-[#6B7280] text-base font-[400] text-center font-geist">
              Start a live chat for instant support from our team. We're ready
              to help!
            </p>
            <Button
              text="Chat with us"
              bg="bg-none text-primary"
              weight="font-[500]"
              radius="rounded-[8px]"
              endIcon={<RightArrowIcon />}
              width="w-fit"
            />
          </div>
          {isModalOpen && (
            <Modal onClose={handleCallModalOpen}>
              <CallBackModal onClose={handleCallModalOpen} />
            </Modal>
          )}
        </section>
      </section>
    </article>
  );
};

export default SpeakSection;
