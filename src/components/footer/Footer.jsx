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
      title: "Home",
      route: "/",
    },
    {
      title: "Industries",
      route: "/industries",
    },
    {
      title: "Pricing",
      route: "/pricing",
    },
    {
      title: "Contact Us",
      route: "/contact-us",
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
    route: "https://www.facebook.com/wappr",
  },
  {
    icon: <InstagramIcon />,
    route: "https://www.instagram.com/wappr",
  },
  {
    icon: <LinkedInIcon />,
    route: "https://www.linkedin.com/wappr",
  },
  {
    icon: <XIcon />,
    route: "https://www.x.com/wappr",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white relative">
      <article className="container mx-auto px-8 md:px-4 pt-[60px] pb-7 md:pb-[42px] md:pt-[100px] mt-[56px]">
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
                className="text-[#374151] text-sm font-geist font-medium transition-all duration-300 hover:text-black"
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
                className="text-[#37415180] text-sm font-geist font-medium transition-all duration-300 hover:text-[#374151]"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Link end */}
        {/* copyright */}
        <div className="flex flex-col sm:flex-row md:justify-center md:items-center gap-4 md:gap-10">
          <p className="text-xs md:text-sm text-[#37415180] font-medium font-geist">
            © 2024 wappr. All rights reserved.
          </p>
          <div className="flex items-center gap-3 social-links">
            {socialLinks.map((link, i) => (
              <Link href={link.route} key={i}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </article>
        <div className="absolute top-0 left-0 w-full block md:hidden">
          <svg
            width="375"
            height="1"
            viewBox="0 0 375 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="375" height="1" fill="url(#paint0_linear_68_2295)" />
            <defs>
              <linearGradient
                id="paint0_linear_68_2295"
                x1="-4.52112e-05"
                y1="0.500009"
                x2="375"
                y2="0.500009"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1" stopColor="#E3E3E3" />
                <stop offset="1" stopColor="#F3F3F3" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
    </footer>
  );
};

export default Footer;
