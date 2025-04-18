import {
  NextJSLogo,
  ReactLogo,
  TailwindLogo,
  TypeScriptLogo,
  GitHubLogo,
} from "../icons";

// The content that appears inside the /about page
export const AboutPage = () => {
  return (
    <div className="text-stone-200 text-left">
      <h1 className="w-fit text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-400">
        About
      </h1>
      <p className="max-sm:mt-1 p-0.5 pt-0 md:p-1">
        This website was designed by me,{" "}
        <strong className="text-stone-100">Viktor Magnusson</strong>, and made
        using <strong className="text-stone-100">React</strong>,{" "}
        <strong className="text-stone-100">TypeScript</strong>,{" "}
        <strong className="text-stone-100">Next.js 13</strong> and{" "}
        <strong className="text-stone-100">Tailwind CSS</strong>. The new{" "}
        <strong className="text-stone-100">Parallel Routing</strong> feature
        introduced in <strong className="text-stone-100">Next.js 13.3</strong>{" "}
        is used to render the different pages on the site in modals, instead of
        sending the user to a brand new page!
      </p>
      <div className="flex justify-center gap-x-4 sm:gap-x-6 mt-4 sm:mt-2.5 overflow-hidden">
        <div
          id="logo-1"
          className="max-w-[50px] sm:max-w-[64px] w-full about-logo-anim-1"
        >
          <ReactLogo />
        </div>
        <div
          id="logo-2"
          className="max-w-[50px] sm:max-w-[64px] w-full about-logo-anim-2"
        >
          <TypeScriptLogo />
        </div>
        <div
          id="logo-3"
          className="max-w-[50px] sm:max-w-[64px] w-full about-logo-anim-3"
        >
          <NextJSLogo />
        </div>
        <div
          id="logo-4"
          className="max-w-[50px] sm:max-w-[64px] w-full about-logo-anim-4"
        >
          <TailwindLogo />
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-1">
        <a
          href={"https://github.com/vik-ma/portfolio"}
          target="_blank"
          className="flex w-fit items-center whitespace-nowrap py-1 pl-1.5 pr-2 font-bold rounded-lg cursor-pointer border-2 border-blue-500 text-stone-50 bg-blue-500/10 hover:text-white hover:bg-blue-500/40 transition ease-out duration-200"
        >
          <span>
            <GitHubLogo />
          </span>
          <span className="ml-1.5 text-sm sm:text-base">GitHub Repository</span>
        </a>
      </div>
      <h2 className="w-fit mt-3.5 sm:mt-1 text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-400">
        Credits
      </h2>
      <ul className="max-sm:mt-0.5 p-0.5 md:p-1 text-sm text-stone-300">
        <li className="max-sm:mb-1 mb-0.5">
          Icons for programming tools and languages from{" "}
          <a
            className="font-semibold text-blue-400 hover:underline"
            href="https://devicon.dev/"
            target="_blank"
          >
            Devicon
          </a>
        </li>
        <li className="max-sm:mb-1 mb-0.5">
          Modified GBA startup CSS animation originally made by{" "}
          <a
            className="font-semibold text-blue-400 hover:underline"
            href="https://codepen.io/rvervuurt/pen/bdZQrE"
            target="_blank"
          >
            rvervuurt
          </a>
        </li>
        <li>
          Shadow gradients from{" "}
          <a
            className="font-semibold text-blue-400 hover:underline"
            href="https://alvarotrigo.com/shadow-gradients/"
            target="_blank"
          >
            alvarotrigo
          </a>
        </li>
      </ul>
    </div>
  );
}
