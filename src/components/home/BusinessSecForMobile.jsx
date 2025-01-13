"use client";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import BusinessCarousel from "./BusinessCarousel";

const BusinessSecForMobile = () => {
  return (
    <section className="w-full block lg:hidden">
      <section className="container px-4 mx-auto py-[64px]">
        <h6 className="text-[48px] font-extrabold md:font-semibold text-[#23262F] leading-none font-dmsans">
          Why Your Business Needs a Wappr-Built App
        </h6>
        <p className="my-4 text-sm lg:text-2xl font-geist text-[#777E90]">
          Boost sales, enhance customer experiences, and streamline operations
          with a Wappr-built app designed specifically for your business needs.
        </p>
        <div className="flex justify-center">
          <Link href="/pricing" className="w-full">
            <Button text="View packages" weight="font-medium" />
          </Link>
        </div>
        <div className="mt-[48px]">
          <BusinessCarousel />
        </div>
      </section>
    </section>
  );
};

export default BusinessSecForMobile;
