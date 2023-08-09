import Link from "next/link";
import GitHubLogo from "../icons/GitHubLogo";

export default function HeroSection() {
  return (
    <div className="rounded-3xl mt-1.5 min-[491px]:mt-3 sm:mt-5 md:mt-6 min-[871px]:mt-10 rounded-3xl bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 p-1.5">
      <div className="hero-container h-[200px] text-center p-1">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-around h-full px-5 font-semibold text-stone-100 text-xl">
            <p className="text-4xl font-bold">Welcome</p>
            <p className="">
              I&apos;m{" "}
              <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
                Viktor Magnusson
              </span>
              , a full-stack developer based in Sweden.
            </p>
            <div className="flex flex-row justify-evenly text-stone-100">
              <Link
                className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 text-base font-bold rounded-lg cursor-pointer border-2 border-stone-500 text-stone-50 bg-stone-500/10 hover:text-white hover:bg-stone-500/40 transition ease-out duration-200"
                href={"/#languages"}
              >
                View Languages
              </Link>
              <Link
                className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 text-base font-bold rounded-lg cursor-pointer border-2 border-stone-500 text-stone-50 bg-stone-500/10 hover:text-white hover:bg-stone-500/40 transition ease-out duration-200"
                href={"/#projects"}
              >
                View Projects
              </Link>
              <Link
                className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 text-base font-bold rounded-lg cursor-pointer border-2 border-stone-500 text-stone-50 bg-stone-500/10 hover:text-white hover:bg-stone-500/40 transition ease-out duration-200"
                href={"/about"}
              >
                About
              </Link>
              <a
                href="https://github.com/vik-ma"
                target="_blank"
                className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 text-base font-bold rounded-lg cursor-pointer border-2 border-stone-500 text-stone-50 bg-stone-500/10 hover:text-white hover:bg-stone-500/40 transition ease-out duration-200"
              >
                <span>
                  <GitHubLogo />
                </span>
                <span className="ml-1.5">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
