export default function ProjectsSection() {
  return (
    <div className="py-2 md:py-3">
      <div className="flex flex-wrap justify-center projects-container md:gap-x-2 md:gap-y-1 mx-auto">
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-x-10 gap-y-10 font-mono text-md text-amber-50">
          <div className="p-2 project-box" id="project-pps">Col 1</div>
          <div className="p-2 project-box" id="project-pathfinding">Col 2</div>
          <div className="p-2 project-box" id="project-wfc">Col 1</div>
          <div className="p-2 project-box" id="project-ocr">Col 2</div>
          <div className="p-2 project-box" id="project-file-opener">Col 1</div>
          <div className="p-2 project-box" id="project-link-opener">Col 2</div>
        </div>
      </div>
    </div>
  );
}
