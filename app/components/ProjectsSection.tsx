

export default function ProjectsSection() {

  return (
    <div className="py-2 md:py-3 md:mt-1 rounded-2xl projects-section-box">
      <div className="flex flex-wrap justify-center projects-container md:gap-x-2 md:gap-y-1 mx-auto">
        <div className="grid grid-cols-1 w-full md:grid-cols-2 py-4 px-7 gap-x-8 gap-y-10 font-sans text-md text-amber-50">
          <div className="p-2 project-box" id="project-pps">
            <div className="project-box-content">Col 1</div>
          </div>
          <div className="p-2 project-box" id="project-pathfinding">
            <div className="project-box-content">Col 2</div>
          </div>
          <div className="p-2 project-box" id="project-wfc">
            <div className="project-box-content">Col 1</div>
          </div>
          <div className="p-2 project-box" id="project-ocr">
            <div className="project-box-content">Col 2</div>
          </div>
          <div className="p-2 project-box" id="project-file-opener">
            <div className="project-box-content">Col 1</div>
          </div>
          <div className="p-2 project-box" id="project-link-opener">
            <div className="project-box-content">Col 2</div>
          </div>
        </div>
      </div>

    </div>
  );
}
