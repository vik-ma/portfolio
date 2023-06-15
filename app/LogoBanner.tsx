import PythonLogo from "./icons/PythonLogo";
import ReactLogo from "./icons/ReactLogo";
import JavaScriptLogo from "./icons/JavaScriptLogo";
import TypeScriptLogo from "./icons/TypeScriptLogo";
import HTMLLogo from "./icons/HTMLLogo";
import CSSLogo from "./icons/CSSLogo";
import DjangoLogo from "./icons/DjangoLogo";
import NextJSLogo from "./icons/NextJSLogo";
import PostgresLogo from "./icons/PostgresLogo";
import GraphQLLogo from "./icons/GraphQLLogo";
import TailwindLogo from "./icons/TailwindLogo";
import DockerLogo from "./icons/DockerLogo";
import GitLogo from "./icons/GitLogo";

export default function LogoBanner() {
  return (
    <div className="w-screen py-2 langs-container">
      <div className="flex flex-wrap justify-center lang-list-container mx-auto">
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <PythonLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">Python</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <ReactLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">React</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container items-center">
            <JavaScriptLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">JavaScript</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <TypeScriptLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">TypeScript</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <HTMLLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">HTML</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <CSSLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">CSS</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <TailwindLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">
            Tailwind
          </p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <DjangoLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">Django</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <NextJSLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">Next.js</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <PostgresLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">PostgreSQL</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <GraphQLLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">GraphQL</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <DockerLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">Docker</p>
        </div>
        <div className="text-center items-center p-3 logo-wrapper">
          <div className="logo-container">
            <GitLogo />
          </div>
          <p className="font-bold py-1 text-xs md:text-sm">Git</p>
        </div>
      </div>
    </div>
  );
}
