"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "../style.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMdFlower } from "react-icons/io";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [shouldHideMenu, setShouldHideMenu] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);

    if (!isMenuVisible) {
      setShouldHideMenu(false);
    } else {
      setTimeout(() => setShouldHideMenu(true), 500);
    }
  };

  const linksLeft = [
    { label: "", id: "main" },
    { label: "Produkty", id: "appPros" },
    { label: "O nas", id: "aboutUs" },
    { label: "Pakiety", id: "packages" },
    { label: "Jak działamy", id: "howWeWork" },
    { label: "FAQ", id: "faq" },
    { label: "Kontakt", id: "contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md border-b border-[#366340] bg-no-repeat bg-cover font-gabarito bg-[#4d7455]">
      <div className="container mx-auto py-2">
        <div
          className={`flex ${
            isMenuVisible ? "justify-end" : "justify-between"
          }`}
        >
          <div className="hidden xl:flex items-center">
            <div className="pr-2">
              <button className="flex items-center gap-5">
                <IoMdFlower size={40} color="#F9F02D" />
                <span className="font-bold text-2xl text-[#F9F02D]">
                  E-Flora
                </span>
              </button>
            </div>
            {linksLeft.map(
              ({ label, id }, index) =>
                index !== 0 && (
                  <button
                    key={id}
                    className="px-2 text-[#EFF5FF] link link-underline link-underline-black no-underline"
                  >
                    {label}
                  </button>
                )
            )}
            <Link
              href="../career"
              className="px-2 text-[#EFF5FF] link link-underline link-underline-black no-underline"
            >
              Kariera
            </Link>
          </div>
          <div className="hidden xl:flex flex-row justify-center gap-4 items-center">
            <div>
              <button className="border border-[#F9F02D] py-2 rounded-lg px-6 text-[#F9F02D]">
                Logowanie / Rejestracja
              </button>
            </div>
          </div>
          {/* show mobile menu  */}
          <div
            className={`xl:hidden flex items-center pl-1 ${
              isMenuVisible && "hidden"
            }`}
          >
            <a href="#" className="flex items-center">
              <button className="flex items-center gap-5">
                <IoMdFlower size={40} color="#F9F02D" />
                <span className="font-bold text-2xl text-[#F9F02D]">
                  E-Flora
                </span>
              </button>
            </a>
          </div>
          <div className="xl:hidden flex items-center pr-1 justify-end">
            <button className="mobile-menu-button" onClick={handleMenuToggle}>
              {isMenuVisible ? (
                <RxCross2 size={24} color="#EFF5FF" />
              ) : (
                <RxHamburgerMenu size={24} color="#EFF5FF" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`xl:hidden pt-2 ${
            isMenuVisible ? "mobileMenu-open" : "mobileMenu-close"
          } ${shouldHideMenu && "hidden"}`}
        >
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
