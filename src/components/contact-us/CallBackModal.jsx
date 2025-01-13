"use client";

import React from "react";
import Input from "../Input";
import Button from "../Button";

const CallBackModal = ({onClose}) => {
  return (
    <article className="">
      <section className="container mx-auto px-[10px] lg:px-[80px] py-[20px] lg:py-[40px] space-y-5">
        <h1 className="text-[26px] font-[700] text-[#23262F] text-center">
          Let Us Call You Back
        </h1>
        <p className="text-[14px] font-[400] text-[#6B7280] text-center font-geist">
          Share your name and phone number, and we’ll reach out shortly.
        </p>
        {/* <section className="space-y-4"> */}
        <Input
          label="Name"
          placeholder="Enter name"
          type="text"
          border="border-[1px] border-[#676E7629]"
          labelText="text-[#23262F] text-base mb-1"
          textColor="text-[#23262F]"
        />
        <Input
          label="Email"
          placeholder="Enter email"
          type="email"
          border="border-[1px] border-[#676E7629]"
          labelText="text-[#23262F] text-base mb-1"
          textColor="text-[#23262F]"
        />
        {/* </section> */}
      </section>
      <div className="flex flex-col lg:flex-row justify-end gap-4 ">
        <Button text="Cancel" bg="bg-none border-[#00000050] font-normal" onClick={onClose} />
        <Button text="Submit" />
      </div>
    </article>
  );
};

export default CallBackModal;
