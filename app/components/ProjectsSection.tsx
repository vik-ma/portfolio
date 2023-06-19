import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import Link from "next/link";

export default function ProjectsSection() {
  const projects: ProjectsInfoProps = ProjectsInfo;
  return (
    <div className="py-2 md:py-3 md:mt-1 rounded-2xl projects-section-box">
      <div className="flex flex-wrap justify-center projects-container md:gap-x-2 md:gap-y-1 mx-auto">
        <div className="grid grid-cols-1 w-full md:grid-cols-2 py-4 px-7 gap-x-8 gap-y-10 font-sans text-md text-amber-50">
          {Object.entries(projects).map(([key, value]) => (
            <Link key={key} href={`/projects/${key}`}>
              <div className="p-2 project-box" id={value.cssId}>
                <div className="project-box-content">
                  <h3 className="text-xl font-bold text-zinc-100">
                    {value.name}
                  </h3>
                  <p className="text-gray-300">{value.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
