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
      className="flex flex-col mx-auto group cursor-pointer pt-10 pb-7"
      onClick={() => toggleAnimCheckbox()}
    >
      <div
        className="flex justify-center header-shadow header-shadow-anim header-shadow-anim-start"
        ref={headerTextRef}
      ></div>
      <div>
        <h1 className="header-text font-extrabold select-none">
          <span className="header-text-container flex flex-row justify-center w-full">
            <span className="flex flex-row justify-center">
              <span className="letter letter-f-1">V</span>
              <span className="letter letter-f-2">I</span>
              <span className="letter letter-f-3">K</span>
              <span className="letter letter-f-4">T</span>
              <span className="letter letter-f-5">O</span>
              <span className="letter letter-f-6">R</span>
            </span>
            <span className="flex flex-row justify-center ml-3.5 sm:ml-4 md:ml-7">
              <span className="letter letter-l-1">M</span>
              <span className="letter letter-l-2">A</span>
              <span className="letter letter-l-3">G</span>
              <span className="letter letter-l-4">N</span>
              <span className="letter letter-l-5">U</span>
              <span className="letter letter-l-6">S</span>
              <span className="letter letter-l-7">S</span>
              <span className="letter letter-l-8">O</span>
              <span className="letter letter-l-9">N</span>
            </span>
          </span>
        </h1>
      </div>
      <div className="mt-2 sm:mt-2.5 md:mt-3.5 relative">
        <span className="ml-1.5 header-disable-anim-text-start text-xs sm:text-sm font-semibold italic absolute left-1 sm:left-2 md:left-4 text-neutral-100 select-none md:hidden">
          Click to disable animation
        </span>
        <label
          className="inline-flex items-center absolute right-1.5 sm:right-3 md:right-5 opacity-0 group-hover:opacity-80 transition duration-300 ease-out -z-[1]"
          ref={headerCheckRef}
        >
          <input
            type="checkbox"
            className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 accent-neutral-100"
            checked={disableAnimation}
            readOnly={true}
          />
          <span className="text-xs sm:text-sm md:text-base text-neutral-100 font-semibold ml-1 md:ml-1.5">
            Disable Animation
          </span>
        </label>
      </div>
    </div>
  );
}
