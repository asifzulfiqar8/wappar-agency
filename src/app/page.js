"use client";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/home/Hero"));
const TransformSec = dynamic(() => import("@/components/home/TransformSec"));
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"));
const FormSection = dynamic(() => import("@/components/home/FormSection"));
const BrandsSection = dynamic(() => import("@/components/home/BrandsSection"));
const PaymentSection = dynamic(() =>
  import("@/components/home/PaymentSection")
);
const BusinessSec = dynamic(() => import("@/components/home/BusinessSec"));
const BusinessSecForMobile = dynamic(() =>
  import("@/components/home/BusinessSecForMobile")
);

const Home = () => {
  return (
    <>
      <Hero />
      <BrandsSection />
      <HowItWorks />
      <TransformSec />
      <BusinessSecForMobile />
      <BusinessSec />
      <FormSection />
      <PaymentSection />
    </>
  );
};

export default Home;
