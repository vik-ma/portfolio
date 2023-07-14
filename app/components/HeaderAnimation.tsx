"use client";
import { useRef, useState } from "react";

export default function HeaderAnimation() {
  const headerTextRef = useRef<HTMLDivElement>(null);
  const headerCheckRef = useRef<HTMLLabelElement>(null);
  const [disableAnimation, setDisableAnimation] = useState<boolean>(false);

  const toggleAnimCheckbox = () => {
    if (!disableAnimation) {
      headerTextRef.current?.classList.remove("header-shadow-anim");
      headerTextRef.current?.classList.add("header-shadow-static");
    } else {
      headerTextRef.current?.classList.remove("header-shadow-static");
      headerTextRef.current?.classList.add("header-shadow-anim");
    }

    headerCheckRef.current?.classList.add("animate-enlargement");
    setTimeout(() => {
      headerCheckRef.current?.classList.remove("animate-enlargement");
    }, 250);

    setDisableAnimation(!disableAnimation);
  };

  return (
    <div
      className="flex flex-col group cursor-pointer pt-14 pb-10"
      onClick={() => toggleAnimCheckbox()}
    >
      <div
        className="flex justify-center header-shadow header-shadow-anim header-shadow-anim-start"
        ref={headerTextRef}
      ></div>
      <div>
        <h1 className="text-[75px] font-extrabold select-none">
          <span className="header-text-container flex flex-row justify-center w-full">
            {/* <span className="flex flex-row justify-center">
              <span className="letter letter-f-1">V</span>
              <span className="letter letter-f-2">I</span>
              <span className="letter letter-f-3">K</span>
              <span className="letter letter-f-4">T</span>
              <span className="letter letter-f-5">O</span>
              <span className="letter letter-f-6">R</span>
            </span>
            <span className="flex flex-row justify-center ml-7">
              <span className="letter letter-l-1">M</span>
              <span className="letter letter-l-2">A</span>
              <span className="letter letter-l-3">G</span>
              <span className="letter letter-l-4">N</span>
              <span className="letter letter-l-5">U</span>
              <span className="letter letter-l-6">S</span>
              <span className="letter letter-l-7">S</span>
              <span className="letter letter-l-8">O</span>
              <span className="letter letter-l-9">N</span>
            </span> */}
            <span className="flex flex-row justify-center">
              <span className="letter letter-f-12">V</span>
              <span className="letter letter-f-22">I</span>
              <span className="letter letter-f-32">K</span>
              <span className="letter letter-f-42">T</span>
              <span className="letter letter-f-52">O</span>
              <span className="letter letter-f-62">R</span>
            </span>
            <span className="flex flex-row justify-center ml-7">
              <span className="letter letter-l-12">M</span>
              <span className="letter letter-l-22">A</span>
              <span className="letter letter-l-32">G</span>
              <span className="letter letter-l-42">N</span>
              <span className="letter letter-l-52">U</span>
              <span className="letter letter-l-62">S</span>
              <span className="letter letter-l-72">S</span>
              <span className="letter letter-l-82">O</span>
              <span className="letter letter-l-92">N</span>
            </span>
          </span>
        </h1>
      </div>
      {/* <div className="mt-10">
        <h1 className="text-[75px] font-extrabold select-none">
          <span className="header-text-container flex flex-row justify-center w-full mt-20">
            <span className="flex flex-row justify-center">
              <span className="letter letter-f-12">V</span>
              <span className="letter letter-f-22">I</span>
              <span className="letter letter-f-32">K</span>
              <span className="letter letter-f-42">T</span>
              <span className="letter letter-f-52">O</span>
              <span className="letter letter-f-62">R</span>
            </span>
            <span className="flex flex-row justify-center ml-7">
              <span className="letter letter-l-12">M</span>
              <span className="letter letter-l-22">A</span>
              <span className="letter letter-l-32">G</span>
              <span className="letter letter-l-42">N</span>
              <span className="letter letter-l-52">U</span>
              <span className="letter letter-l-62">S</span>
              <span className="letter letter-l-72">S</span>
              <span className="letter letter-l-82">O</span>
              <span className="letter letter-l-92">N</span>
            </span>
          </span>
        </h1>
      </div> */}
      <div className="mt-[85px] relative">
        <span className="font-semibold italic text-neutral-100 opacity-50 select-none md:hidden">
          Click to disable animation
        </span>
        <label
          className="inline-flex items-center absolute right-5 opacity-0 group-hover:opacity-80 transition duration-300 ease-out -z-[1]"
          ref={headerCheckRef}
        >
          <input
            type="checkbox"
            className="h-4 w-4 accent-neutral-100"
            checked={disableAnimation}
            readOnly={true}
          />
          <span className="text-neutral-100 font-semibold ml-1.5">
            Disable Animation
          </span>
        </label>
      </div>
    </div>
  );
}
