import React from "react";
import dynamic from "next/dynamic";
const ContactHero = dynamic(() =>
  import("@/components/contact-us/ContactHero")
);
const SpeakSection = dynamic(() =>
  import("@/components/contact-us/SpeakSection")
);
const BusinessSection = dynamic(() =>
  import("@/components/contact-us/BusinessSection")
);

const Contact = () => {
  return (
    <>
      <ContactHero />
      <SpeakSection />
      <BusinessSection />
    </>
  );
};

export default Contact;
