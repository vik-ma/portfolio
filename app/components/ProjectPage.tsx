import { ProjectProps } from "@/typings";
import Image from "next/image";

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div className="px-0.5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between mb-7">
          <div>{project?.fullDescription}</div>
          <div className="flex">
            {project?.previewImgSrcList.map(
              (imageSrc: string, index: number) => (
                <Image
                  className="max-w-[50px] md:max-w-none"
                  key={index + 1}
                  src={imageSrc}
                  alt={`${project?.name} Preview Image ${index + 1}`}
                  width={60}
                  height={37}
                />
              )
            )}
          </div>
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
