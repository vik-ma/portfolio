"use client";
import { useRef } from "react";

export default function HeaderAnimation() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const toggleAnimCheckbox = (checked: boolean) => {
    if (checked) {
      headerRef.current?.classList.remove("header-shadow-anim");
    } else {
      headerRef.current?.classList.add("header-shadow-anim");
    }
  };
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-7xl font-extrabold">
          <span ref={headerRef} className="header-shadow-anim text-white">
            Header Headertwoo
          </span>
        </h1>
      </div>
      <div className="mt-12 relative">
        <label className="inline-flex items-center absolute right-5 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 accent-neutral-100 text-gray-900"
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
