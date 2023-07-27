import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-neutral-100 font-extrabold text-2xl md:text-6xl pb-3 md:pb-5">
        404 - Page Does Not Exist!
      </h1>
      <Link href="/">
        <button className="not-found-page-back-button py-1.5 px-3.5 md:py-2.5 md:px-4 rounded-xl font-bold text-base md:text-xl text-zinc-100 bg-neutral-800 hover:bg-stone-700 border-2 border-neutral-100">
          Back To Homepage
        </button>
      </Link>
    </div>
  );
}
