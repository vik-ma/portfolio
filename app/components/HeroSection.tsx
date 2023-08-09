import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="rounded-3xl mt-1.5 min-[491px]:mt-3 sm:mt-5 md:mt-6 min-[871px]:mt-10 rounded-3xl bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 p-1.5">
      <div className="hero-container h-[200px] text-center p-2 md:p-3 font-sans">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-around h-full px-5 font-semibold text-stone-100 text-2xl">
            <p className="text-4xl font-bold">Welcome</p>
            <p className="">
              I&apos;m{" "}
              <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
                Viktor Magnusson
              </span>
              , a full-stack developer from Sweden.
            </p>
          </div>
          {/* <div className="flex flex-row justify-evenly text-stone-100">
            <Link
              className="font-bold text-xl md:text-3xl"
              href={"/#languages"}
            >
              View Languages
            </Link>
            <Link className="font-bold text-xl md:text-3xl" href={"/#projects"}>
              View Projects
            </Link>
            <Link className="font-bold text-xl md:text-3xl" href={"/about"}>
              About
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
