import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import Link from "next/link";

export default function ProjectsSection() {
  const projects: ProjectsInfoProps = ProjectsInfo;
  return (
    <div className="py-2 md:py-3 md:mt-1 rounded-2xl projects-section-box">
      <div className="flex flex-wrap justify-center projects-container md:gap-x-2 md:gap-y-1 mx-auto">
        <div className="grid grid-cols-1 w-full md:grid-cols-2 py-4 px-6 gap-x-6 gap-y-10 font-sans text-md text-amber-50">
          {Object.entries(projects).map(([key, value]) => (
            <Link key={key} href={`/projects/${key}`}>
              <div className="p-2 h-full project-box" id={value.cssId}>
                <div className="flex flex-col justify-between px-1 h-full project-box-content">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">
                      {value.name}
                    </h3>
                    <p className="project-short-desc">
                      {value.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap mb-0 -ml-1 text-stone-200">
                    {value.techStack.map((lang: string) => (
                      <div
                        key={`${key}-${lang}`}
                        className="mr-1.5 mt-1 px-1.5 pb-0.5 font-semibold rounded-md border border-neutral-600"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
