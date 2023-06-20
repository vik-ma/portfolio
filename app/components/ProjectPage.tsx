import { ProjectProps } from "@/typings";

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div className="px-0.5">
      <div className="flex flex-col justify-between">
        <div className="mb-7">
          <p className="text-white">{project?.fullDescription}</p>
        </div>
        <div className="flex flex-wrap -ml-0.5 text-stone-200">
          {project?.techStack.map((lang: string) => (
            <div
              key={`${project?.name}-${lang}`}
              className="mr-1.5 mt-1 px-1 py-0.5 md:px-1.5 md:py-0 font-semibold text-xs md:text-sm rounded-md border border-neutral-600"
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
