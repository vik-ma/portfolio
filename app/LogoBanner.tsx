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
    <div className="mx-auto">
      <div className="grid grid-cols-7 gap-4">
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <PythonLogo />
          </div>
          <p className="text-center font-bold py-1">Python</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <ReactLogo />
          </div>
          <p className="text-center font-bold py-1">React</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <JavaScriptLogo />
          </div>
          <p className="text-center font-bold py-1">JavaScript</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <TypeScriptLogo />
          </div>
          <p className="text-center font-bold py-1">TypeScript</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <HTMLLogo />
          </div>
          <p className="text-center font-bold py-1">HTML</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <CSSLogo />
          </div>
          <p className="text-center font-bold py-1">CSS</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <TailwindLogo />
          </div>
          <p className="text-center font-bold py-1 whitespace-nowrap">
            Tailwind CSS
          </p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <DjangoLogo />
          </div>
          <p className="text-center font-bold py-1">Django</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <NextJSLogo />
          </div>
          <p className="text-center font-bold py-1">Next.js</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <PostgresLogo />
          </div>
          <p className="text-center font-bold py-1">PostgreSQL</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <GraphQLLogo />
          </div>
          <p className="text-center font-bold py-1">GraphQL</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <DockerLogo />
          </div>
          <p className="text-center font-bold py-1">Docker</p>
        </div>
        <div className="items-center justify-center p-3">
          <div className="logo-container">
            <GitLogo />
          </div>
          <p className="text-center font-bold py-1">Git</p>
        </div>
      </div>
    </div>
  );
}
