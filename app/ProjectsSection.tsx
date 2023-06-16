export default function ProjectsSection() {
  return (
    <div className="py-2 md:py-3 bg-neutral-700 border-white border-2">
      <div className="flex flex-wrap justify-center projects-container md:gap-x-2 md:gap-y-1 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-md text-amber-50">
          <div className="p-2 bg-neutral-900">Col 1</div>
          <div className="p-2 bg-neutral-900">Col 2</div>
          <div className="p-2 bg-neutral-900">Col 1</div>
          <div className="p-2 bg-neutral-900">Col 2</div>
        </div>
      </div>
    </div>
  );
}
