"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdFlower } from "react-icons/io";
// import "../style.css";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const links = [
    { label: "", id: "main" },
    { label: "Dlaczego my", id: "appPros" },
    { label: "Pakiety", id: "packages" },
    { label: "Panel analiz", id: "analysisPanel" },
    { label: "Jak działamy", id: "howWeWork" },
    { label: "Panel typów", id: "" }
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md border-b border-[#366340] bg-[#4d7455] font-jakarta">
      <div className="container mx-auto md:px-2 px-5 py-6">
        <div className="flex justify-between">
          <div className="hidden lg:flex items-center space-x-1">
            <div className="pr-5">
              <button className="flex items-center gap-5">
                <IoMdFlower size={40} color="#F9F02D" />
                <span className="font-bold text-2xl text-[#F9F02D]">
                  E-Flora
                </span>
              </button>
            </div>
            {links.map(
              ({ label, id }, index) =>
                index !== 0 && (
                  <button
                    key={id}
                    className="py-1 px-3 text-[#EFF5FF] link link-underline link-underline-black no-underline"
                  >
                    {label}
                  </button>
                )
            )}
          </div>
          <div className="hidden lg:flex flex-row justify-center text-[#F9F02D] gap-8 pl-8">
            <button>Zaloguj się</button>
            <button className="border border-[#F9F02D] rounded-lg px-10">
              Załóż konto
            </button>
            {/* show side menu */}
            <button className="mobile-menu-button">
              <RxHamburgerMenu size={32} color="#EFF5FF" />
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button className="mobile-menu-button" onClick={handleMenuToggle}>
              <RxHamburgerMenu size={32} color="#EFF5FF" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
