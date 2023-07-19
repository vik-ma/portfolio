import Link from "next/link";
import BackArrow from "../icons/BackArrow";

export default function About() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <Link href="/">
          <button className="single-page-back-button mb-5 py-2.5 px-4 rounded-xl font-bold text-xl text-stone-100 hover:bg-stone-700">
            <span className="inline-block align-middle">
              <BackArrow />
            </span>
            <span className="inline-block align-middle ml-2.5">
              Back To Homepage
            </span>
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
