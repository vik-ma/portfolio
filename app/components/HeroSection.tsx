import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="rounded-3xl mt-1.5 min-[491px]:mt-3 sm:mt-5 md:mt-6 min-[871px]:mt-10 rounded-3xl bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 p-1.5">
      <div className="hero-container h-[200px] text-center py-2 md:py-3 font-sans text-sm text-zinc-100">
        <div className="flex flex-col justify-between p-2 h-full">
          <div className="flex justify-center mt-10">
            <div className="">
              <div className="favicon-bg"></div>
            </div>
            <div className="favicon-text text-3xl absolute font-extrabold -mt-[2px] ml-[1px] asda">
              V
            </div>
          </div>
          <div className="flex flex-row justify-evenly">
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
          </div>
        </div>
      </div>
    </div>
  );
}
