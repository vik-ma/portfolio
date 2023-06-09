import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const projects: ProjectsInfoProps = ProjectsInfo;
  return (
    <>
      <div className="text-center flex justify-center">
        <h2 className="pb-4 text-4xl w-fit md:text-6xl font-extrabold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-stone-500 via-neutral-50 to-stone-500 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>
      <div className="py-2 md:py-3 md:mt-1 rounded-2xl projects-section-box">
        <div className="flex flex-wrap justify-center projects-container md:gap-x-2 md:gap-y-1 mx-auto">
          <div className="grid grid-cols-1 w-full min-[870px]:grid-cols-2 py-3 md:py-4 px-5 md:px-7 gap-x-8 gap-y-7 md:gap-y-10 font-sans text-md text-amber-50">
            {Object.entries(projects).map(([key, value]) => (
              <Link key={key} href={`/projects/${key}`}>
                <div className="p-2 h-full project-box">
                  <div className="flex flex-col justify-between px-1 h-full project-box-content">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100">
                        {value.name}
                      </h3>
                      <div className="flex flex-row justify-between mt-1 mb-2">
                        <p className="project-short-desc max-w-[50%]">
                          {value.shortDescription}
                        </p>
                        <div className="mt-1 thumbnail-container">
                          <Image
                            src={value.thumbnailImgSrc}
                            alt={`${value.name} Preview Image`}
                            width={160}
                            height={100}
                            placeholder="blur"
                            blurDataURL={value.thumbnailBase64Data}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -ml-1 text-stone-200">
                      {value.techStack.map((lang: string) => (
                        <div
                          key={`${key}-${lang}`}
                          className="mr-1.5 mt-1 px-1 pb-0.5 md:px-1.5 font-semibold text-xs md:text-sm rounded-md border border-neutral-600"
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
    </>
  );
}
