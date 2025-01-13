import dynamic from "next/dynamic";
import { tabsData } from "./data";
const IndustriesHero = dynamic(() =>
  import("@/components/industries/IndustriesHero")
);
const BrandsSection = dynamic(() => import("@/components/home/BrandsSection"));
const IndustriesTabsSec = dynamic(() =>
  import("@/components/industries/IndustriesTabsSec")
);
const ViewPricing = dynamic(() =>
  import("@/components/industries/ViewPricing")
);

const Industries = () => {
  return (
    <>
      <IndustriesHero />
      <BrandsSection />
      <IndustriesTabsSec tabsData={tabsData} />
      <ViewPricing />
    </>
  );
};

export default Industries;
