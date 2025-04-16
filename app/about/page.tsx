import Link from "next/link";
import { BackArrow } from "../icons";
import AboutPage from "../components/AboutPage";

export default function About() {
  return (
    <>
      <title>About</title>
      <div className="flex justify-center items-center h-screen py-6">
        <div className="m-auto">
          <Link href="/">
            <button className="single-page-back-button mb-4 py-2.5 px-4 rounded-xl font-bold text-xl text-stone-100 hover:bg-stone-700">
              <span className="inline-block align-middle">
                <BackArrow />
              </span>
              <span className="inline-block align-middle ml-2.5">
                Back To Homepage
              </span>
            </button>
          </Link>
          <div className="px-4 py-3 md:py-4 rounded-xl max-md:text-center project-page-container">
            <AboutPage />
          </div>
        </div>
      </div>
    </>
  );
}
