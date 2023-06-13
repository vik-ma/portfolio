import Image from "next/image";
import LogoBanner from "./LogoBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-10">
      <div className="">
        <h1 className="text-6xl font-extrabold">
          <span className="header-shadow-anim">Header</span>
        </h1>
      </div>
      <div className="z-10 font-mono text-sm lg:flex">
        <LogoBanner />
      </div>
    </main>
  );
}
