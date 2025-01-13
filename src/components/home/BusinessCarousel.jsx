import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { businessData } from "./data";

const BusinessCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {businessData.map((data, i) => (
          <SwiperSlide key={i}>
            <Slide data={data} i={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* arrows */}
      <div className="absolute bottom-[-2rem] left-0 z-10 flex items-center gap-8">
        <button className="custom-prev" aria-label="Previous Slide">
          <LeftIcon />
        </button>
        <button className="custom-next rotate-180" aria-label="Next Slide">
          <RightIcon />
        </button>
      </div>
    </div>
  );
};

export default BusinessCarousel;

const Slide = ({ data, i }) => {
  return (
    <div>
      <Image
        src={data.image}
        width={311}
        height={224}
        className="w-full"
        alt={`image${i}`}
      />
      <div className="flex flex-col gap-6 mt-[48px]">
        <h6 className="text-[32px] text-[#23262F] font-bold font-geist">
          0{i + 1}.
        </h6>
        <div className="h-[2px] w-full bg-[#E6E8EC]"></div>
        <div>
          <h5 className="text-base font-medium font-geist text-[#23262F]">
            {data.title}
          </h5>
          <p className="text-sm font-geist text-[#777E90] mt-4">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const LeftIcon = () => {
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.90906 0.265207C4.50324 -0.109399 3.87058 -0.0840962 3.49597 0.321722L0.265201 3.82168C-0.0883963 4.20474 -0.0884 4.79518 0.265194 5.17824L3.49597 8.67828C3.87057 9.08411 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639813 4.90906 0.265207Z"
        fill="#23262F"
      />
    </svg>
  );
};

const RightIcon = () => {
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.90906 0.265207C4.50324 -0.109399 3.87058 -0.0840962 3.49597 0.321722L0.265201 3.82168C-0.0883963 4.20474 -0.0884 4.79518 0.265194 5.17824L3.49597 8.67828C3.87057 9.08411 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639813 4.90906 0.265207Z"
        fill="#23262F"
      />
    </svg>
  );
};
