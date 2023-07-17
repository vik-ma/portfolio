import Link from "next/link";
import HeaderAnimation from "./HeaderAnimation";

export default function HeroSection() {
  return (
    <div className="relative header-wrapper flex flex-row justify-center">
      <div className="flex flex-col justify-center">
        <HeaderAnimation />
        <div className="rounded-3xl mt-20 rounded-3xl bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 p-1.5">
          <div className="hero-container h-[200px] text-center py-2 md:py-3 font-sans text-sm text-zinc-100">
            <div className="hero-inner-container flex flex-col justify-between p-2 h-full">
              <div></div>
              <div className="flex flex-row justify-evenly">
                <Link className="font-bold text-3xl" href={"/#languages"}>
                  View Languages
                </Link>
                <Link className="font-bold text-3xl" href={"/#projects"}>
                  View Projects
                </Link>
                <Link className="font-bold text-3xl" href={"/about"}>
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
