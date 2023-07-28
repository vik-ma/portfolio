import LanguagesSection from "./components/LanguagesSection";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/HeroSection";
import HeaderAnimation from "./components/HeaderAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-7 px-2 md:px-5">
      <div className="relative header-wrapper flex flex-row justify-center">
        <div className="flex flex-col justify-center">
          <HeaderAnimation />
        </div>
      </div>
      <header className="pb-6 md:pb-10">
        <HeroSection />
      </header>
      <section className="pt-1 sm:pt-1.5 pb-6 md:pb-10" id="languages">
        <LanguagesSection />
      </section>
      <section className="pt-1 sm:pt-1.5" id="projects">
        <ProjectsSection />
      </section>
    </main>
  );
}
