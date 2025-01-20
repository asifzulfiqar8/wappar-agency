"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IndustriesTabsSec = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].label);
  return (
    <section className="w-full">
      <section className="container px-4 mx-auto pt-[60px] md:pt-[112px] pb-[60px]">
        <h6 className="text-[48px] font-bold md:font-semibold text-[#23262F] text-center max-w-[980px] mx-auto leading-none font-dmsans">
          Tailored Mobile Solutions for Every Industry
        </h6>
        <p className="mt-4 text-sm lg:text-2xl font-geist text-[#777E90] text-center max-w-[907px] mx-auto">
          Boost sales, enhance customer experiences, and streamline operations
          with a Wappr-built app designed specifically for your business needs.
        </p>
        <div className="mt-8 md:mt-[60px]">
          <Tabs
            tabsData={tabsData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabsContent tabsData={tabsData} activeTab={activeTab} />
        </div>
      </section>
    </section>
  );
};

export default IndustriesTabsSec;

const Tabs = ({ tabsData, activeTab, setActiveTab }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <div className="relative block md:hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex justify-between items-center px-4 py-2 border-2 border-[#E6E8EC] rounded-xl text-sm text-[#23262F] font-medium font-poppins focus:outline-none"
        >
          {activeTab}{" "}
          <svg
            className={`transform transition-transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="15"
              stroke="#E6E8EC"
              strokeWidth="2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.2071 13.7929C19.8166 13.4024 19.1834 13.4024 18.7929 13.7929L16 16.5858L13.2071 13.7929C12.8166 13.4024 12.1834 13.4024 11.7929 13.7929C11.4024 14.1834 11.4024 14.8166 11.7929 15.2071L15.2929 18.7071C15.6834 19.0976 16.3166 19.0976 16.7071 18.7071L20.2071 15.2071C20.5976 14.8166 20.5976 14.1834 20.2071 13.7929Z"
              fill="#777E91"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg z-10">
            {tabsData.map((tab, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setActiveTab(tab.label);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium ${
                    activeTab === tab.label ? "text-primary" : "text-gray-700"
                  } hover:bg-gray-100`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <section className="hidden md:flex flex-wrap justify-center items-center gap-8">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.label)}
            className={`${
              activeTab === tab.label
                ? "text-primary border-b border-primary"
                : "text-[#6B7280] border-b border-transparent"
            } text-sm font-medium font-geist px-3 py-4`}
          >
            {tab.label}
          </button>
        ))}
      </section>
    </>
  );
};

const TabsContent = ({ tabsData, activeTab }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [activeTab]);

  return tabsData.map(
    (tab, i) =>
      tab.label === activeTab && (
        <section
          key={i}
          ref={contentRef}
          className="mt-8 md:mt-[60px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[10rem] xl:gap-[16rem]"
        >
          <div>
            <Image
              src={tab.content.image}
              width={576}
              height={576}
              className="w-full"
              alt={`image${i}`}
            ></Image>
            <p className="mt-4 text-xs md:text-base font-medium font-geist text-[#777E90]">
              <span className="font-semibold">Tailored for: </span>
              {tab.content.imageDescription}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-10">
            {tab.content.heading.includes("</span>") ? (
              <h5
                className="text-[48px] md:text-[56px] font-bold font-dmsans text-[#23262F] leading-none max-w-[483px]"
                dangerouslySetInnerHTML={{ __html: tab.content.heading }}
              ></h5>
            ) : (
              <h5 className="text-[48px] md:text-[56px] font-bold font-dmsans text-[#23262F] leading-none max-w-[483px]">
                {tab.content.heading}:
              </h5>
            )}
            <div className="flex flex-col gap-8 lg:gap-12">
              {tab.content.headingsDescriptons.map((list, i) => (
                <List list={list} key={i} />
              ))}
            </div>
          </div>
        </section>
      )
  );
};

const List = ({ list }) => {
  return (
    <div>
      <h6 className="text-lg font-semibold text-[#23262F] font-geist">
        {list.heading}
      </h6>
      <p className="mt-3 text-base text-[#777E90]">{list.description}</p>
    </div>
  );
};
