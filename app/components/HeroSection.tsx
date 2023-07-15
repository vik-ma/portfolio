import Link from "next/link";
import HeaderAnimation from "./HeaderAnimation";

export default function HeroSection() {
  return (
    <div className="relative header-wrapper">
      <HeaderAnimation />
      {/* <div className="mt-20 rounded-3xl bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 p-1.5 p-1.5"> */}
        <div className="hero-container h-[200px] mx-1 text-center py-2 md:py-3 font-sans text-sm text-zinc-100">
          <Link className="text-3xl" href={"/#languages"}>View Languages</Link>
          <br />
          <Link className="text-3xl" href={"/#projects"}>View Projects</Link>
        </div>
      {/* </div> */}
    </div>
  );
}
