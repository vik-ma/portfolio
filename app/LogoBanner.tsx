import PythonLogo from "./icons/PythonLogo";
import ReactLogo from "./icons/React";
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
    <div className="flex w-full items-center justify-between">
      <div>
        <PythonLogo />
        <p className="text-center font-bold">Python</p>
      </div>
      <div>
        <ReactLogo />
        <p className="text-center font-bold">React</p>
      </div>
      <div>
        <JavaScriptLogo />
        <p className="text-center font-bold">JavaScript</p>
      </div>
      <div>
        <TypeScriptLogo />
        <p className="text-center font-bold">TypeScript</p>
      </div>
      <div>
        <HTMLLogo />
        <p className="text-center font-bold">HTML</p>
      </div>
      <div>
        <CSSLogo />
        <p className="text-center font-bold">CSS</p>
      </div>
      <div>
        <DjangoLogo />
        <p className="text-center font-bold">Django</p>
      </div>
      <div>
        <NextJSLogo />
        <p className="text-center font-bold">Next.js</p>
      </div>
      <div>
        <PostgresLogo />
        <p className="text-center font-bold">PostgreSQL</p>
      </div>
      <div>
        <GraphQLLogo />
        <p className="text-center font-bold">GraphQL</p>
      </div>
      <div>
        <TailwindLogo />
        <p className="text-center font-bold">Tailwind CSS</p>
      </div>
      <div>
        <DockerLogo />
        <p className="text-center font-bold">Docker</p>
      </div>
      <div>
        <GitLogo />
        <p className="text-center font-bold">Git</p>
      </div>
    </div>
  );
}
