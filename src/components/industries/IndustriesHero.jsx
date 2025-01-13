import Image from "next/image";

const IndustriesHero = () => {
  return (
    <article className="px-4 w-full">
      <section className="bg-[#191919] rounded-[20px]">
        <section className="container px-4 mx-auto pt-[47px] md:pt-[67px]">
          <h1 className="text-white text-center text-[38px] md:text-[85px] font-bold md:font-extrabold font-dmsans max-w-[900px] mx-auto leading-none">
            No Matter Your Industry, We’ve Got You Covered
          </h1>
          <p className="mt-4 md:mt-6 text-[#8B949E] text-base font-medium font-geist text-center max-w-[639px] mx-auto">
            From retail to real estate, Wappr builds apps that enhance customer
            experiences, streamline operations, and drive growth for businesses
            of all kinds.
          </p>
          <Image
            src="/assets/images/industries/industry-hero.png"
            width={993}
            height={993}
            className="w-full mt-0 lg:mt-[-3rem] xl:mt-[-7rem]"
            alt={`image`}
          ></Image>
        </section>
      </section>
    </article>
  );
};

export default IndustriesHero;
