import Image from "next/image";
import LanguagesSection from "./components/LanguagesSection";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-2 md:px-5">
      <header className="py-7">
        <HeroSection />
      </header>
      <section className="mt-20 py-7" id="languages">
        <LanguagesSection />
      </section>
      {/* <div className="text-center">
        <h2 className="pb-4 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
          Projects
        </h2>
      </div> */}
      {/* <div className="text-center">
        <h2 className="pb-4 text-4xl md:text-6xl font-extrabold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-100 to-neutral-700 bg-clip-text text-transparent">
          Projects
        </h2>
      </div> */}
      {/* <div className="text-center">
        <h2 className="pb-4 text-4xl md:text-6xl font-extrabold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-600 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
          Projects
        </h2>
      </div> */}
      <section className="py-7" id="projects">
        <ProjectsSection />
      </section>
    </main>
  );
}
