import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-neutral-100 font-extrabold text-2xl md:text-6xl pb-5">
        404 - Page Does Not Exist!
      </h1>
      <Link href="/">
        <button className="mb-5 py-2.5 px-4 rounded-xl font-bold text-md md:text-lg text-zinc-100 bg-neutral-800 hover:bg-neutral-700 border-2 border-neutral-100">
          Back To Homepage
        </button>
      </Link>
    </div>
  );
}
