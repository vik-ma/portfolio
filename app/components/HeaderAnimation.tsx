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
        className="flex justify-center header-shadow header-shadow-anim"
        ref={headerTextRef}
      ></div>
      <div>
        <h1 className="text-7xl font-extrabold">
          <span className="select-none">
            {/* Header Headertwoo */}
            <span className="header-text-container flex flex-row justify-center w-full">
              <span className="flex flex-col">
                <span className="flex flex-row justify-center text-[120px] ">
                  <span className="letter letter-f-1">F</span>
                  <span className="letter letter-f-2">I</span>
                  <span className="letter letter-f-3">R</span>
                  <span className="letter letter-f-4">S</span>
                  <span className="letter letter-f-5">T</span>
                  <span className="letter letter-f-6">T</span>
                </span>
                <span className="flex flex-row justify-center text-[90px]">
                  <span className="letter letter-l-1">L</span>
                  <span className="letter letter-l-2">A</span>
                  <span className="letter letter-l-3">S</span>
                  <span className="letter letter-l-4">T</span>
                  <span className="letter letter-l-5">L</span>
                  <span className="letter letter-l-6">A</span>
                  <span className="letter letter-l-7">S</span>
                  <span className="letter letter-l-8">T</span>
                  <span className="letter letter-l-9">T</span>
                </span>
              </span>
            </span>
          </span>
        </h1>
      </div>
      <div className="mt-[260px] relative">
        <span className="font-semibold italic text-neutral-100 opacity-50 select-none md:hidden">
          Click to disable animation
        </span>
        <label
          className="inline-flex items-center absolute right-20 opacity-0 group-hover:opacity-80 transition duration-300 ease-out -z-[1]"
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
