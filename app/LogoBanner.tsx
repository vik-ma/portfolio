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
    <div className="mx-auto">
      <div className="grid grid-cols-7 gap-4">
        <div>
          <PythonLogo />
          <p className="text-center font-bold py-1">Python</p>
        </div>
        <div>
          <ReactLogo />
          <p className="text-center font-bold py-1">React</p>
        </div>
        <div>
          <JavaScriptLogo />
          <p className="text-center font-bold py-1">JavaScript</p>
        </div>
        <div>
          <TypeScriptLogo />
          <p className="text-center font-bold py-1">TypeScript</p>
        </div>
        <div>
          <HTMLLogo />
          <p className="text-center font-bold py-1">HTML</p>
        </div>
        <div>
          <CSSLogo />
          <p className="text-center font-bold py-1">CSS</p>
        </div>
        <div>
          <TailwindLogo />
          <p className="text-center font-bold py-1">Tailwind CSS</p>
        </div>
        <div>
          <DjangoLogo />
          <p className="text-center font-bold py-1">Django</p>
        </div>
        <div>
          <NextJSLogo />
          <p className="text-center font-bold py-1">Next.js</p>
        </div>
        <div>
          <PostgresLogo />
          <p className="text-center font-bold py-1">PostgreSQL</p>
        </div>
        <div>
          <GraphQLLogo />
          <p className="text-center font-bold py-1">GraphQL</p>
        </div>
        <div>
          <DockerLogo />
          <p className="text-center font-bold py-1">Docker</p>
        </div>
        <div>
          <GitLogo />
          <p className="text-center font-bold py-1">Git</p>
        </div>
      </div>
    </div>
  );
}
