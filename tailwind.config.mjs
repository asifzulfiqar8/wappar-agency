/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          bgWhite: "var(--bg-white)",
          blackDark: "var(--bg-black-dark)",
          grad: "linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 88.89%)",
        },
        primary: "var(--primary)",
      },
      fontFamily: {
        poppins: "var(--poppins)",
        dmsans: "var(--dm-sans)",
        geist: "var(--giest)",
      },
      boxShadow: {
        imageShadow: "0px 14px 22px 0px #00000008",
      },
    },
  },
  plugins: [],
};
