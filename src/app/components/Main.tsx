"use client";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Main() {
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
    <div
      id="main"
      className={` md:rounded-b-[60px] rounded-b-0 relative bg-no-repeat bg-center `}
    >
      <div className="container mx-auto md:px-5">
        <div className="flex lg:flex-row flex-col items-center">
          <div className="flex flex-col items-center md:items-start px-5 md:px-0 justify-center">
            <div className="flex flex-col text-black lg:text-[80px] text-[36px] font-normal pb-5 md:pt-20 pt-10 lg:w-[835px]">
              <p>
                Kwiatowa Oaza: Ożywiaj życie
                <span className="text-[#366340]"> kwiatową magią </span>
                każdego dnia
              </p>
            </div>
            <div className="">
              <p className="font-normal md:text-base text-[15px] text-black md:py-7 md:w-[488px]">
                Kwiatowa Oaza to więcej niż zwykły sklep z kwiatami. To miejsce,
                w którym kwiaty stają się historią, emocją i inspiracją. Nasza
                misja to przekształcanie codzienności w niezapomniane chwile za
                pomocą naturalnego piękna kwiatów.
              </p>
            </div>
            <div className="flex flex-row gap-5 md:text-lg text-base md:pt-0 pt-5">
              <button className="bg-[#366340] md:px-10 px-4 py-1.5 rounded-md">
                Załóż konto teraz
              </button>
              <button className="border md:border-[#366340] border-white md:px-10 px-4 py-1.5 md:text-[#366340] text-white rounded-md">
                Pobierz aplikację
              </button>
            </div>
          </div>
          <div className="bg-no-repeat lg:absolute lg:right-0 lg:w-1/2 w-full pt-[100px] lg:pt-10 bg-contain bg-center">
            <div className="flex flex-row text-white lg:gap-0 gap-2 lg:px-0 px-3 ">
              <div className="flex lg:flex-row lg:text-left text-center flex-col lg:gap-2 gap-0 items-center lg:h-24 h-32 lg:w-[230px] bg-white bg-opacity-10 rounded-[20px] border border-white border-opacity-10 backdrop-blur-[5px] px-2 lg:mt-[400px] mt-0 justify-center lg:mb-20">
                <span
                  className="block lg:text-6xl md:text-4xl text-2xl"
                  x-data="{ number: 0 }"
                  x-init="() => { setInterval(() => { number = (number === 250) ? 250 : number + 1 }, 10) }"
                  x-text="number"
                ></span>
                <p className="text-xs">
                  różnorodnych roślin, 100% pewności w ich jakości
                </p>
              </div>
              <div className="flex lg:flex-row flex-col lg:text-left text-center lg:gap-2 gap-0 items-center lg:h-24 h-32 lg:w-[220px] bg-white bg-opacity-10 rounded-[20px] border border-white border-opacity-10 backdrop-blur-[5px] px-2 lg:mt-16 mt-0 justify-center">
                <span
                  className="block lg:text-[48px] text-2xl"
                  x-data="{ number: 0 }"
                  x-init="() => { setInterval(() => { number = (number === 24) ? 24 : number + 1 }, 50) }"
                  x-text="number"
                ></span>
                <p className="text-xs">
                  godziny od zamówienia już w Twoim ogrodzie
                </p>
              </div>
              <div className="text-center">
                <div className="flex flex-col lg:gap-2 h-32 lg:w-[200px] justify-center bg-white bg-opacity-10 rounded-[20px] border border-white border-opacity-10 backdrop-blur-[5px] px-2 lg:mt-96 mt-0">
                  <span
                    className="block lg:text-[48px] text-2xl"
                    x-data="{ number: 0 }"
                    x-init="() => { setInterval(() => { number = (number === 7) ? 7 : number + 1 }, 5) }"
                    x-text="number"
                  ></span>
                  <p className="text-xs">
                    dni na spokojne zakupy! Zapewniamy łatwe zwroty w przypadku
                    niezadowolenia
                  </p>
                </div>
                {isLGScreen && (
                  <a href="#" className="text-white underline">
                    Zobacz wszystkie rośliny
                  </a>
                )}
              </div>
            </div>
            {!isLGScreen && (
              <a
                href="#"
                className="text-white underline flex items-center justify-center py-3"
              >
                Zobacz wszystkie rośliny
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
