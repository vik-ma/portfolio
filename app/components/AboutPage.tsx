export default function AboutPage() {
  return (
    <div className="text-stone-200 text-left">
      <h1 className="w-fit text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-400">
        About
      </h1>
      <p className="p-0.5 pt-0 md:p-1">
        This website was designed by me and made using{" "}
        <strong className="text-stone-100">React</strong>,{" "}
        <strong className="text-stone-100">TypeScript</strong>,{" "}
        <strong className="text-stone-100">Next.js 13</strong> and{" "}
        <strong className="text-stone-100">TailwindCSS</strong>.
      </p>
      <h2 className="w-fit mt-2 text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-400">
        Credits
      </h2>
      <ul className="p-0.5 md:p-1 text-sm text-stone-300">
        <li className="max-sm:mb-1.5">
          Icons for programming tools and languages from{" "}
          <a
            className="font-semibold text-blue-400 hover:underline"
            href="https://devicon.dev/"
            target="_blank"
          >
            Devicon
          </a>
        </li>
        <li className="max-sm:mb-1.5">
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
          >alvarotrigo</a>
        </li>
      </ul>
    </div>
  );
}
