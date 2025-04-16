import {
  PythonLogo,
  ReactLogo,
  JavaScriptLogo,
  TypeScriptLogo,
  HTMLLogo,
  CSSLogo,
  DjangoLogo,
  NextJSLogo,
  PostgresLogo,
  TailwindLogo,
  DockerLogo,
  GitLogo,
  CSharpLogo,
  DotNetLogo,
} from "../icons/";

// Languages and Tools section on the Home page
export const LanguagesSection = () => {
  return (
    <div className="text-center">
      <h2 className="pb-1 sm:pb-1.5 md:pb-2.5 min-[871px]:pb-4 text-3xl sm:text-4xl md:text-5xl min-[871px]:text-7xl font-extrabold bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 bg-clip-text text-transparent">
        Languages and Tools
      </h2>
      <div className="rounded-3xl bg-gradient-to-l from-blue-500 via-pink-600 to-yellow-400 p-1.5">
        <div className="py-2 md:py-3 text-sm text-stone-100 lang-list-container">
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
                <CSharpLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">C#</p>
            </div>
            <div className="text-center items-center p-3 logo-wrapper">
              <div className="logo-container m-auto">
                <DotNetLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                .NET
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
                <GitLogo />
              </div>
              <p className="font-semibold py-1 text-xs md:text-sm mt-0.5">
                Git
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
                Tailwind CSS
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
          </div>
        </div>
      </div>
    </div>
  );
}
