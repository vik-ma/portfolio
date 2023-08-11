import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const projects: ProjectsInfoProps = ProjectsInfo;
  return (
    <>
      <div className="text-center flex justify-center">
        <h2 className="pb-1.5 sm:pb-2 md:pb-3 min-[871px]:pb-4 text-3xl sm:text-4xl md:text-5xl min-[871px]:text-7xl font-extrabold bg-gradient-to-br from-stone-100 via-stone-200 to-stone-500 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>
      <div className="py-2 md:py-3 md:mt-0.5 rounded-2xl projects-section-box">
        <div className="flex flex-wrap justify-center projects-container md:gap-x-2 md:gap-y-1 mx-auto">
          <div className="grid grid-cols-1 w-full min-[871px]:grid-cols-2 py-3 md:py-4 px-5 md:px-7 gap-x-8 gap-y-7 md:gap-y-9 text-md text-amber-50">
            {Object.entries(projects).map(([key, value]) => (
              <Link key={key} href={`/projects/${key}`}>
                <div className="p-2 h-full project-box">
                  <div className="flex flex-col justify-between px-1 h-full project-box-content">
                    <div className="mb-0.5">
                      <h3 className="text-xl font-bold text-stone-200">
                        {value.name}
                      </h3>
                      <div className="">
                        <div className="ml-2.5 sm:ml-3 max-h-full float-right">
                          <div className="mt-1 min-[491px]:mt-2 thumbnail-container">
                            <Image
                              className="max-[490px]:max-w-[140px]"
                              src={value.thumbnailImgSrc}
                              alt={`${value.name} Preview Image`}
                              width={168}
                              height={100}
                              placeholder="blur"
                              blurDataURL={value.thumbnailBase64Data}
                            />
                          </div>
                        </div>
                        <p className="project-short-desc font-sans">
                          {value.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap -ml-1 text-stone-200 font-sans">
                      {value.techStack.map((lang: string) => (
                        <div
                          key={`${key}-${lang}`}
                          className="mr-1.5 mt-1 px-1 pb-0.5 md:px-1.5 font-semibold project-tech-stack-text text-xs md:text-sm rounded-md border border-neutral-600"
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
