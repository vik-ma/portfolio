import LanguagesSection from "./components/LanguagesSection";
import ProjectsSection from "./components/ProjectsSection";
import HeroSection from "./components/HeroSection";
import HeaderAnimation from "./components/HeaderAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-1 md:pt-7 pb-6">
      <div className="relative header-wrapper flex flex-row justify-center pb-4 md:pb-7">
        <HeaderAnimation />
      </div>
      <header className="pb-10 md:pb-12">
        <HeroSection />
      </header>
      <section className="pt-1 sm:pt-1.5 pb-10 md:pb-12" id="languages">
        <LanguagesSection />
      </section>
      <section className="pt-1 sm:pt-1.5" id="projects">
        <ProjectsSection />
      </section>
    </main>
  );
}
