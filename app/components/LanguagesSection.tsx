import PythonLogo from "../icons/PythonLogo";
import ReactLogo from "../icons/ReactLogo";
import JavaScriptLogo from "../icons/JavaScriptLogo";
import TypeScriptLogo from "../icons/TypeScriptLogo";
import HTMLLogo from "../icons/HTMLLogo";
import CSSLogo from "../icons/CSSLogo";
import DjangoLogo from "../icons/DjangoLogo";
import NextJSLogo from "../icons/NextJSLogo";
import PostgresLogo from "../icons/PostgresLogo";
import GraphQLLogo from "../icons/GraphQLLogo";
import TailwindLogo from "../icons/TailwindLogo";
import DockerLogo from "../icons/DockerLogo";
import GitLogo from "../icons/GitLogo";

export default function LanguagesSection() {
  return (
    <div className="text-center">
      <h2 className="pb-1 sm:pb-1.5 md:pb-2.5 min-[871px]:pb-4 text-3xl sm:text-4xl md:text-5xl min-[871px]:text-7xl font-extrabold bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 bg-clip-text text-transparent">
        Languages and Tools
      </h2>
      <div className="rounded-3xl bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 p-1.5">
        <div className="py-2 md:py-3 font-sans text-sm text-zinc-100 lang-list-container">
          <div className="flex flex-wrap justify-center md:gap-x-2 md:gap-y-1 mx-auto">
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <PythonLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                Python
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <ReactLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                React
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <JavaScriptLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                JavaScript
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <TypeScriptLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                TypeScript
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <HTMLLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                HTML
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <CSSLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                CSS
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <TailwindLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                Tailwind
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <DjangoLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                Django
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <NextJSLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                Next.js
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <PostgresLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                PostgreSQL
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <GraphQLLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                GraphQL
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <DockerLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                Docker
              </p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <GitLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                Git
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
