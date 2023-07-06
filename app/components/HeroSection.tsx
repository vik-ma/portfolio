import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative text-center">
      <h1 className="text-7xl font-extrabold">
        <span className="header-shadow-anim">Header</span>
      </h1>
      {/* <div className="GB">
        <span id="G" className="letter G">
          G
        </span>
        <span id="A" className="letter A">
          A
        </span>
        <span id="M" className="letter M">
          M
        </span>
        <span id="E" className="letter E">
          E
        </span>
        <span id="B" className="letter B">
          B
        </span>
        <span id="O" className="letter O">
          O
        </span>
        <span id="Y" className="letter Y">
          Y
        </span>
      </div> */}
      <div className="mt-[200px] rounded-3xl bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 p-1.5 p-1.5">
        <div className="py-2 md:py-3 font-sans text-sm text-zinc-100 langs-section-box w-[850px] h-[200px]">
          <Link href={"/#projects"}>Go To Projects</Link>
        </div>
      </div>
    </div>
  );
}
