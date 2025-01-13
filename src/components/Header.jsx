"use client";

import { CrossIcon, HamburgerIcon, Logo } from "@/assets/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Login from "./auth/Login";

const pages = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Industries",
    route: "/industries",
  },
  {
    title: "Features",
    route: "/features",
  },
  {
    title: "Contact us",
    route: "/contact-us",
  },
];

const Header = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const menuOpenHandler = () => setIsMenuOpen(!menuOpen);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const authModalOpenHandler = () => setAuthModalOpen(true);
  const authModalCloseHandler = () => setAuthModalOpen(false);

  useEffect(() => {
    if (menuOpen || authModalOpen) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "scroll";
    }
  }, [menuOpen, authModalOpen]);
  return (
    <header className="w-full bg-white">
      <article className="container mx-auto px-4">
        <section className="h-[80px] flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-lg md:text-[24px] font-poppins lg:min-w-[250px]"
          >
            <Logo />
            wappr.
          </Link>
          {/* Navigation links */}
          <div
            className={`fixed lg:contents top-[80px] left-0 right-0 bottom-0 bg-white/30 backdrop-blur-[2px] transition-opacity duration-500 z-[99] ${
              menuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible lg:opacity-100 lg:visible"
            }`}
          >
            <div
              className={`fixed lg:contents bg-white top-0 right-0 w-full px-4 pt-6 pb-4 rounded-b-[24px] ${
                menuOpen ? "h-auto" : "h-0 lg:h-auto"
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {pages.map((page, i) => (
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href={page.route}
                    key={i}
                    className="text-xl lg:text-sm font-semibold lg:font-medium text-[#777E90] font-geist"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col-reverse lg:flex-row items-center gap-4 mt-8 lg:mt-0">
                <Link href="/pricing" className="w-full text-center lg:w-auto">
                  <Button
                    onClick={() => setIsMenuOpen(false)}
                    text="View pricing"
                    bg="bg-transparent text-primary"
                  />
                </Link>
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    authModalOpenHandler();
                  }}
                  text="Login"
                  width="w-full sm:w-[110px]"
                />
              </div>
            </div>
          </div>
          {/* Hambarger */}
          <div
            className="block lg:hidden cursor-pointer"
            onClick={menuOpenHandler}
          >
            {menuOpen ? <CrossIcon /> : <HamburgerIcon />}
          </div>
        </section>
      </article>
      {authModalOpen && (
        <Modal onClose={authModalCloseHandler}>
          <Login />
        </Modal>
      )}
    </header>
  );
};

export default Header;
