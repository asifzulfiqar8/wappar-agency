import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
const PricingCardsSec = dynamic(() =>
  import("@/components/pricing/PricingCardsSec")
);

const PricingHero = () => {
  return (
    <article className="px-4 w-full overflow-hidden">
      <section className="bg-[#0D0D0D] rounded-2xl md:rounded-[20px] w-full relative">
        <section className="container px-4 mx-auto pt-[47px] pb-[47px] md:pt-[56px] md:pb-[77px] relative z-10">
          <h1 className="text-white text-center text-[38px] md:text-[85px] font-bold md:font-extrabold font-dmsans max-w-[900px] mx-auto leading-none">
            Designed for business teams like yours
          </h1>
          <p className="mt-4 md:mt-6 text-[#8B949E] text-base font-medium font-geist text-center max-w-[639px] mx-auto">
            At Wappr, we design and build apps that merge innovation and
            technology to create lasting value and drive growth.
          </p>
          <PricingCardsSec />
        </section>
        <section className="absolute bottom-0 left-0 right-0 w-full hidden lg:block z-0">
          <Image
            src="/assets/images/pricing-hero.png"
            width={1551}
            height={450}
            className="w-full mt-0 lg:mt-[-3rem] xl:mt-[-7rem]"
            alt={`image`}
          ></Image>
        </section>
      </section>
    </article>
  );
};

export default PricingHero;
