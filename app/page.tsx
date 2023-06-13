import Image from "next/image";
import LogoBanner from "./LogoBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-2 md:px-5">
      <div className="">
        <h1 className="text-6xl font-extrabold">
          <span className="header-shadow-anim">Header</span>
        </h1>
      </div>
      <div className="font-mono text-sm">
        <LogoBanner />
      </div>
    </main>
  );
}
