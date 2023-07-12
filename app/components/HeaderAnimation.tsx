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
      className="flex flex-col group  pb-10 cursor-pointer"
      onClick={() => toggleAnimCheckbox()}
    >
      <div className="">
        <h1 className="text-7xl font-extrabold ">
          <span
            ref={headerTextRef}
            className="header-shadow header-shadow-anim text-white select-none "
          >
            {/* Header Headertwoo */}
            <span className="header-text-container">
              <span className="letter G">G</span>
              <span className="letter A">A</span>
              <span className="letter M">M</span>
              <span className="letter E">E</span>
              <span className="letter B">B</span>
              <span className="letter O">O</span>
              <span className="letter Y">Y</span>
            </span>
          </span>
        </h1>
      </div>
      <div className="mt-12 relative">
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
