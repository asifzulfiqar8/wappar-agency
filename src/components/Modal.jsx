import { CancelIcon } from "@/assets/icons";
import React, { useEffect } from "react";
import { pauseLenis, resumeLenis } from "./LenisScrollWrapper";

const Modal = ({ children, onClose, width, bg }) => {
  useEffect(() => {
    pauseLenis();

    return () => {
      resumeLenis();
    };
  }, []);
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D10C9] bg-opacity-50 overflow-y-scroll scroll-0 w-screen h-screen py-10">
      <section className="grid place-items-center h-full">
        <section
          className={`relative ${
            width ? width : "w-[311px] sm:w-[544px] md:w-[700px]"
          }`}
        >
          <div
            className="absolute top-[-30px] right-[-40px] cursor-pointer"
            onClick={() => {
              onClose();
              resumeLenis();
            }}
          >
            <CancelIcon />
          </div>
          <div className={`shadow-2xl shadow-[#0F0F0F1A] border border-[#F8F8F8] rounded-2xl p-5 w-full ${bg ? bg : 'bg-[#FCFCFD]'}`}>
            {children}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Modal;
