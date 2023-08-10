import Link from "next/link";
import GitHubLogo from "../icons/GitHubLogo";
import InfoIcon from "../icons/InfoIcon";
import CodeIcon from "../icons/CodeIcon";
import ProjectIcon from "../icons/ProjectIcon";

export default function HeroSection() {
  return (
    <div className="rounded-3xl mt-1.5 min-[491px]:mt-3 sm:mt-5 md:mt-6 min-[871px]:mt-10 rounded-3xl bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 p-1.5">
      <div className="hero-container h-[240px] text-center p-1">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-around h-full py-1 px-5 font-semibold text-2xl">
            <p className="text-stone-50">
              I&apos;m{" "}
              <span className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
                Viktor Magnusson
              </span>
              ,<br /> a full-stack developer based in Sweden.
            </p>
            <p className="text-base font-medium text-[#cccac8]">
              Welcome to my portfolio! Down below you&apos;ll find a compilation
              of my programming projects and the technologies I used to develop
              them. Click on the projects to learn more about them!
            </p>
            <div className="flex flex-row justify-center gap-x-3 text-stone-100">
              <div className="flex flex-row gap-x-3">
                <Link
                  className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 text-base font-bold rounded-[10px] cursor-pointer border-2 border-stone-500 text-stone-100 bg-stone-600/20 hover:text-white hover:bg-stone-400/30 transition ease-out duration-200"
                  href={"/#languages"}
                >
                  <span>
                    <CodeIcon />
                  </span>
                  <span className="ml-1.5">Skills</span>
                </Link>
                <Link
                  className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 text-base font-bold rounded-[10px] cursor-pointer border-2 border-stone-500 text-stone-100 bg-stone-600/20 hover:text-white hover:bg-stone-400/30 transition ease-out duration-200"
                  href={"/#projects"}
                >
                  <span>
                    <ProjectIcon />
                  </span>
                  <span className="ml-1.5">Projects</span>
                </Link>
              </div>
              <div className="flex flex-row gap-x-3">
                <Link
                  className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 text-base font-bold rounded-[10px] cursor-pointer border-2 border-stone-500 text-stone-100 bg-stone-600/20 hover:text-white hover:bg-stone-400/30 transition ease-out duration-200"
                  href={"/about"}
                >
                  <span>
                    <InfoIcon />
                  </span>
                  <span className="ml-1.5">About Site</span>
                </Link>
                <a
                  href="https://github.com/vik-ma"
                  target="_blank"
                  className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 text-base font-bold rounded-[10px] cursor-pointer border-2 border-stone-500 text-stone-100 bg-stone-600/20 hover:text-white hover:bg-stone-400/30 transition ease-out duration-200"
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
    </div>
  );
}
