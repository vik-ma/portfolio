"use client";
import { useRef } from "react";

export default function HeaderAnimation() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const toggleAnimCheckbox = (checked: boolean) => {
    if (checked) {
      headerRef.current?.classList.remove("header-shadow-anim");
      headerRef.current?.classList.add("header-shadow-static");
    } else {
      headerRef.current?.classList.remove("header-shadow-static");
      headerRef.current?.classList.add("header-shadow-anim");
    }
  };
  return (
    <div className="flex flex-col group">
      <div>
        <h1 className="text-7xl font-extrabold">
          <span
            ref={headerRef}
            className="header-shadow header-shadow-anim text-white"
          >
            Header Headertwoo
          </span>
        </h1>
      </div>
      <div className="group mt-12 relative">
        <label className="inline-flex items-center absolute right-5 cursor-pointer opacity-0 group-hover:opacity-80 transition duration-200 ease-out">
          <input
            type="checkbox"
            className="h-4 w-4 accent-neutral-100 text-gray-900 "
            onChange={(event) => toggleAnimCheckbox(event.target.checked)}
          />
          <span className="text-neutral-100 font-semibold ml-1.5">
            Disable Animation
          </span>
        </label>
      </div>
    </div>
  );
}
