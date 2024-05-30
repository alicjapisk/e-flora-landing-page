import Image from "next/image";
import Flolwers from "../../../public/assets/Flowers.webp";
import Nutrient from "../../../public/assets/Nutrient.webp";

export default function Products() {
  const props = [
    {
      index: 1,
      header: "Rośliny i kwiaty",
      text: "Oferujemy szeroki wybór różnorodnych roślin i kwiatów, idealnych do ozdobienia Twojego ogrodu, balkonu czy wnętrza domu. Nasza oferta obejmuje zarówno popularne gatunki, jak i rzadsze odmiany, aby zaspokoić różnorodne gusta naszych klientów.",
      icon: <Image src={Flolwers} alt="flowers" />
    },
    {
      index: 2,
      header: "Odżywki roślinne",
      text: "Dostarczamy wysokiej jakości odżywki roślinne, które zapewniają niezbędne składniki odżywcze dla Twoich roślin, wspomagając ich zdrowy wzrost, kwitnienie i owocowanie. Nasze produkty są starannie dobrane, aby zapewnić optymalne warunki dla uprawy roślin.",
      icon: <Image src={Flolwers} alt="flowers" />
    },
    {
      index: 3,
      header: "Ziemie i podłoża",
      text: "Oferujemy różnorodne rodzaje ziemi i podłoży, dostosowane do różnych potrzeb roślin. Nasze produkty są odpowiednio zbilansowane pod względem składu mineralnego i struktury, aby zapewnić optymalne warunki dla rozwoju korzeni i zdrowego wzrostu roślin.",
      icon: <Image src={Flolwers} alt="flowers" />
    },
    {
      index: 4,
      header: "Akcesoria ogrodnicze",
      text: "W naszym sklepie znajdziesz także szeroki wybór akcesoriów ogrodniczych, takich jak doniczki, narzędzia ogrodnicze, nawadnianie automatyczne oraz inne produkty wspomagające uprawę roślin. Dzięki nim łatwiej będzie Ci zadbać o swoje rośliny i stworzyć piękny ogród czy balkon.",
      icon: <Image src={Flolwers} alt="flowers" />
    }
  ];
  return (
    <div id="appPros" className="pt-10 bg-white pb-8">
      <div className="container mx-auto md:px-5">
        <div className="pb-8 px-10">
          <p className="lg:text-5xl text-2xl font-normal text-center">
            Co oferujemy?
          </p>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-10">
          {props.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:w-[285px] w-full md:px-0 px-5 "
            >
              {value.icon}
              <p className="text-2xl font-semibold text-center pt-[40px] text-[#090F18]">
                {value.header}
              </p>
              <p className="text-center pt-[12px] text-[#090F18]">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
