import Image from "next/image";
import Main from "./components/Main";
import HeroBg from "../../public/assets/HeroBg.png";

export default function Home() {
  return (
    <main>
      <div
        style={{ backgroundImage: `url(${HeroBg.src})` }}
        className="bg-no-repeat bg-center bg-cover"
      >
        <Main />
      </div>
    </main>
  );
}
