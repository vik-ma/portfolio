import Link from "next/link";
import GitHubLogo from "../icons/GitHubLogo";
import InfoIcon from "../icons/InfoIcon";
import CodeIcon from "../icons/CodeIcon";
import ProjectIcon from "../icons/ProjectIcon";

// Hero section on the Home page
export default function HeroSection() {
  return (
    <div className="mt-0 min-[491px]:mt-0.5 sm:mt-1.5 md:mt-2 min-[871px]:mt-6 rounded-3xl bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 p-1.5">
      <div className="hero-container text-center p-1">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-around gap-y-5 h-full py-3 md:py-3.5 px-3 sm:px-5 font-semibold text-xl md:text-2xl">
            <p className="text-stone-50">
              I&apos;m{" "}
              <span className="font-extrabold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
                Viktor Magnusson
              </span>
              ,<br /> a software developer based in Sweden.
            </p>
            <p className="text-base font-medium text-[#cccac8]">
              <strong className="text-stone-100">
                Welcome to my portfolio!
              </strong>{" "}
              I design and develop{" "}
              <strong className="text-stone-100">websites</strong>,{" "}
              <strong className="text-stone-100">back end servers</strong>,{" "}
              <strong className="text-stone-100">databases</strong> and{" "}
              <strong className="text-stone-100">desktop applications</strong>.
              Down below you&apos;ll find a compilation of my completed projects
              and the technologies I used to develop them.{" "}
              <strong className="text-stone-100">
                Click on the projects to visit or learn more about them!
              </strong>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-y-2 gap-x-2 md:gap-x-4 min-[871px]:gap-x-6 text-stone-100">
              <div className="flex flex-row justify-center gap-x-2 min-[491px]:gap-x-3 sm:gap-x-2 md:gap-x-4 min-[871px]:gap-x-6">
                <Link
                  className="flex w-[140px] sm:w-fit justify-center whitespace-nowrap py-1 pl-1.5 pr-2 text-base font-bold rounded-[10px] cursor-pointer border-2 border-stone-500 text-stone-100 bg-stone-600/20 hover:text-white hover:bg-stone-400/30 transition ease-out duration-200"
                  href={"/#languages"}
                >
                  <span>
                    <CodeIcon />
                  </span>
                  <span className="ml-1.5">Skills</span>
                </Link>
                <Link
                  className="flex w-[140px] sm:w-fit justify-center whitespace-nowrap py-1 pl-1.5 pr-2 text-base font-bold rounded-[10px] cursor-pointer border-2 border-stone-500 text-stone-100 bg-stone-600/20 hover:text-white hover:bg-stone-400/30 transition ease-out duration-200"
                  href={"/#projects"}
                >
                  <span>
                    <ProjectIcon />
                  </span>
                  <span className="ml-1.5">Projects</span>
                </Link>
              </div>
              <div className="flex flex-row justify-center gap-x-2 min-[491px]:gap-x-3 sm:gap-x-2 md:gap-x-4 min-[871px]:gap-x-6">
                <Link
                  className="flex w-[140px] sm:w-fit justify-center whitespace-nowrap py-1 pl-1.5 pr-2 text-base font-bold rounded-[10px] cursor-pointer border-2 border-stone-500 text-stone-100 bg-stone-600/20 hover:text-white hover:bg-stone-400/30 transition ease-out duration-200"
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
                  className="flex w-[140px] sm:w-fit justify-center whitespace-nowrap py-1 pl-1.5 pr-2 text-base font-bold rounded-[10px] cursor-pointer border-2 border-stone-500 text-stone-100 bg-stone-600/20 hover:text-white hover:bg-stone-400/30 transition ease-out duration-200"
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
