"use client";
import { useRef, useState } from "react";

export default function HeaderAnimation() {
  const headerTextRef = useRef<HTMLSpanElement>(null);
  const [disableAnimation, setDisableAnimation] = useState<boolean>(false);

  const toggleAnimCheckbox = () => {
    if (!disableAnimation) {
      headerTextRef.current?.classList.remove("header-shadow-anim");
      headerTextRef.current?.classList.add("header-shadow-static");
    } else {
      headerTextRef.current?.classList.remove("header-shadow-static");
      headerTextRef.current?.classList.add("header-shadow-anim");
    }
    setDisableAnimation(!disableAnimation);
  };

  return (
    <div
      className="flex flex-col group pt-14 pb-10 cursor-pointer"
      onClick={() => toggleAnimCheckbox()}
    >
      <div>
        <h1 className="text-7xl font-extrabold">
          <span
            ref={headerTextRef}
            className="header-shadow header-shadow-anim text-white select-none"
          >
            Header Headertwoo
          </span>
        </h1>
      </div>
      <div className="mt-12 relative">
        <label className="inline-flex items-center absolute right-5 opacity-0 group-hover:opacity-80 transition duration-300 ease-out -z-[1]">
          <input
            type="checkbox"
            className="h-4 w-4 accent-neutral-100 text-gray-900"
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
