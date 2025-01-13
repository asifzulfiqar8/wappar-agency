import dynamic from "next/dynamic";
const PricingHero = dynamic(() => import("@/components/pricing/PricingHero"));
const CompanySec = dynamic(() => import("@/components/pricing/CompanySec"));

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <CompanySec />
    </>
  );
};

export default Pricing;
