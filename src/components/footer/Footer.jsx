"use client";
import {
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  Logo,
  PhoneIcon,
  ScheduleIcon,
  XIcon,
} from "@/assets/icons";
import Link from "next/link";
import FooterCards from "./FooterCards";

const cards = [
  {
    title: "Schedule a call",
    icon: <ScheduleIcon />,
  },
  {
    title: "Request a callback",
    icon: <PhoneIcon />,
  },
  {
    title: "Chat with us",
    icon: <ChatIcon />,
  },
];

const footerLinks = {
  mainLinks: [
    {
      title: "Features",
      route: "/features",
    },
    {
      title: "About Us",
      route: "/industries",
    },
    {
      title: "Careers",
      route: "/careers",
    },
    {
      title: "Blog",
      route: "/blog",
    },
  ],
  policyLinks: [
    {
      title: "Privacy Policy",
      route: "/privacy-policy",
    },
    {
      title: "Terms of Conditions",
      route: "/terms-of-conditions",
    },
  ],
};

const socialLinks = [
  {
    icon: <FacebookIcon />,
    route: "https://www.facebook.com/",
  },
  {
    icon: <InstagramIcon />,
    route: "https://www.instagram.com/",
  },
  {
    icon: <LinkedInIcon />,
    route: "https://www.linkedin.com/",
  },
  {
    icon: <XIcon />,
    route: "https://www.x.com/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <article className="container mx-auto px-4 pt-[60px] pb-7 md:pb-[42px] md:pt-[100px]">
        <div className="flex md:justify-center relative">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-lg md:text-[24px] font-poppins bg-white relative z-10 px-0 md:px-5"
          >
            <Logo />
            wappr.
          </Link>
          <div
            className="absolute inset-0 w-full h-[1px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"
            style={{
              background:
                "radial-gradient(50% 72000.02% at 50% 50%, #E3E3E3 10%, rgba(243, 243, 243, 0) 75%)",
            }}
          ></div>
        </div>
        <h6 className="my-[40px] hidden lg:block text-[38px] font-extrabold font-dmsans text-[#23262F] text-center">
          Need Help? Contact Us Below.
        </h6>
        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 lg:mt-0">
          {cards.map((card, i) => (
            <FooterCards card={card} key={i} />
          ))}
        </div>
        {/* Link start */}
        <div className="mt-[32px] md:mt-[56px] mb-[40px] w-full max-w-[650px] mx-auto flex md:items-center gap-5 md:gap-[40px] justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
            {footerLinks.mainLinks.map((link, i) => (
              <Link
                href={link.route}
                key={i}
                className="text-[#374151] text-sm font-geist font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
            {footerLinks.policyLinks.map((link, i) => (
              <Link
                href={link.route}
                key={i}
                className="text-[#37415180] text-sm font-geist font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Link end */}
        {/* copyright */}
        <div className="flex flex-col sm:flex-row max-w-[400px] mx-auto items-center gap-4 md:gap-10">
          <p className="text-xs md:text-sm text-[#37415180] font-medium font-geist">
            © 2024 wappr. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <Link href={link.route} key={i}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
