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
        <div className="flex flex-wrap items-center justify-center p-3">
          <PythonLogo />
          <p className="text-center font-bold py-1">Python</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <ReactLogo />
          <p className="text-center font-bold py-1">React</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <JavaScriptLogo />
          <p className="text-center font-bold py-1">JavaScript</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <TypeScriptLogo />
          <p className="text-center font-bold py-1">TypeScript</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <HTMLLogo />
          <p className="text-center font-bold py-1">HTML</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <CSSLogo />
          <p className="text-center font-bold py-1">CSS</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3 whitespace-nowrap">
          <TailwindLogo />
          <p className="text-center font-bold py-1">Tailwind CSS</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <DjangoLogo />
          <p className="text-center font-bold py-1">Django</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <NextJSLogo />
          <p className="text-center font-bold py-1">Next.js</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <PostgresLogo />
          <p className="text-center font-bold py-1">PostgreSQL</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <GraphQLLogo />
          <p className="text-center font-bold py-1">GraphQL</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <DockerLogo />
          <p className="text-center font-bold py-1">Docker</p>
        </div>
        <div className="flex flex-wrap items-center justify-center p-3">
          <GitLogo />
          <p className="text-center font-bold py-1">Git</p>
        </div>
      </div>
    </div>
  );
}
