"use client";
import Main from "./components/Main";
import HeroBg from "../../public/assets/HeroBg3.webp";
import HeroBgMobile from "../../public/assets/HeroBgMobile.webp";

import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [isLGScreen, setIsLGScreen] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsLGScreen(window.innerWidth >= 1135);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${isLGScreen ? HeroBg.src : HeroBgMobile.src})`
        }}
        className="bg-no-repeat bg-cover min-h-[100vh] "
      >
        <Main />
      </div>
    </main>
  );
}
