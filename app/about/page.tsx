import Link from "next/link";

export default function About() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <Link href="/">
          <button className="mb-5 py-2.5 px-4 rounded-xl font-bold text-lg text-zinc-100 bg-neutral-800 hover:bg-neutral-700">
            Back To Homepage
          </button>
        </Link>
        <div className="px-4 py-3 md:py-4 rounded-xl max-md:text-center project-page-container">
          <h1
            className={`pb-0.5 md:pb-2 text-3xl md:text-5xl font-extrabold text-neutral-100`}
          >
            About
          </h1>
        </div>
      </div>
    </div>
  );
}
