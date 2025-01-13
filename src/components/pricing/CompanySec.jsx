import React from "react";
import BrandsSection from "../home/BrandsSection";

const CompanySec = () => {
  return (
    <section className="bg-[#F9FAFB] pt-[64px] pb[64px] md:pt-[120px] md:pb-[104px]">
      <section className="container px-4 mx-auto">
        <h6 className="text-[36px] md:text-[48px] font-extrabold font-dmsans text-[#23262F] text-center">
          You’ll be in good company
        </h6>
      </section>
      <div className="mt-8 md:mt-75px">
        <BrandsSection />
      </div>
    </section>
  );
};

export default CompanySec;
