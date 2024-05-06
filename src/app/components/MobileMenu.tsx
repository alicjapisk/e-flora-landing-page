"use client";
import React, { useEffect, useState } from "react";
import "../style.css";

function MobileMenu() {
  const links = [
    "Dlaczego my",
    "Produkty",
    "Jak działamy",
    "FAQ",
    "Panel analiz",
    "Panel typów"
  ];

  return (
    <div>
      {links.map((value: string) => (
        <div className="flex flex-col  items-start py-2 text-lg" key={value}>
          <button
            key={value}
            className="py-1 px-3 text-[#EFF5FF] link link-underline link-underline-black no-underline"
          >
            {value}
          </button>
        </div>
      ))}
      <div className="flex flex-col items-start text-[#F9F02D] text-lg px-3">
        <button className="py-2 link link-underline link-underline-black no-underline">
          Zaloguj się
        </button>
        <button className="py-2 link link-underline link-underline-black no-underline">
          Załóż konto
        </button>
        <button className="text-[#EFF5FF] py-2">
          <p>UKR</p>
          <p>ANG</p>
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
