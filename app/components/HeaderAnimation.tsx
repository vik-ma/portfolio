export default function HeaderAnimation() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-7xl font-extrabold">
          <span className="header-shadow-anim">Header Headertwoo</span>
        </h1>
      </div>
      <div className="mt-12 relative">
        <label className="absolute right-5 text-neutral-100 font-semibold">
          <input type="checkbox" className="accent-neutral-800 mr-1.5" />
          Disable Animation
        </label>
      </div>
    </div>
  );
}
