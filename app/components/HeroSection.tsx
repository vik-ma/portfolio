import Link from "next/link";
import HeaderAnimation from "./HeaderAnimation";

export default function HeroSection() {
  return (
    <div className="relative">
      <HeaderAnimation />
      <div className="mt-[200px] rounded-3xl bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 p-1.5 p-1.5">
        <div className="py-2 md:py-3 font-sans text-sm text-zinc-100 langs-section-box w-[850px] h-[200px]">
          <Link href={"/#languages"}>Go To Languages</Link>
          <br />
          <Link href={"/#projects"}>Go To Projects</Link>
        </div>
      </div>
    </div>
  );
}
