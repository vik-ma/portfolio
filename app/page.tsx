import Image from "next/image";
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
import GitHubLogo from "./icons/GitHubLogo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-6xl font-extrabold">
          <span className="header-shadow-anim">Header</span>
        </h1>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <PythonLogo />
        <ReactLogo />
        <JavaScriptLogo />
        <TypeScriptLogo />
        <HTMLLogo />
        <CSSLogo />
        <DjangoLogo />
        <NextJSLogo />
        <PostgresLogo />
        <GraphQLLogo />
        <TailwindLogo />
        <DockerLogo />
        <GitLogo />
        <GitHubLogo />
      </div>
    </main>
  );
}
