import { ProjectProps } from "@/typings";
import ImageSlider from "./ImageSlider";
import GitHubLogo from "../icons/GitHubLogo";
import LiveSite from "../icons/LiveSite";

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div className="px-0.5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col min-[871px]:flex-row min-[871px]:space-x-6 justify-between mb-2">
          <div className="flex flex-col justify-between">
            <div className="mb-0.5 text-stone-200">
              {project?.fullDescription}
              <br />
            </div>
            <div>
              <p className="mb-0.5 min-[871px]:mb-1 font-semibold text-sm text-stone-100 max-[870px]:text-center min-[871px]:truncate">
                More information about the project can be found on GitHub!
              </p>
              <div className="flex justify-center min-[871px]:justify-normal mt-0.5 min-[871px]:-ml-0.5 mb-3.5 min-[871px]:mb-0">
                <a
                  href={project?.githubLink}
                  target="_blank"
                  className="flex w-fit whitespace-nowrap mr-1.5 py-1 pl-1.5 pr-2 font-bold rounded-lg cursor-pointer border-2 border-lime-300 text-stone-50 bg-lime-400/10 hover:text-white hover:bg-lime-400/40 transition ease-in-out duration-200"
                >
                  <span>
                    <GitHubLogo />
                  </span>
                  <span className="ml-1.5">GitHub Repository</span>
                </a>
                {project?.liveSiteLink !== "" && (
                  <a
                    href={project?.liveSiteLink}
                    target="_blank"
                    className="flex w-fit whitespace-nowrap py-1 pl-1.5 pr-2 font-bold rounded-lg cursor-pointer border-2 border-red-500 text-stone-50 bg-red-500/10 hover:text-white hover:bg-red-500/40 transition ease-in-out duration-200"
                  >
                    <span>
                      <LiveSite />
                    </span>
                    <span className="ml-1.5">Live Site</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          <ImageSlider
            name={project?.name}
            previewImgSrcList={project?.previewImgSrcList}
            previewImgMainWidth={project?.previewImgMainWidth}
            previewImgMainHeight={project?.previewImgMainHeight}
            previewImgBase64DataList={project?.previewImgBase64DataList}
            previewImgMenuWidthList={project?.previewImgMenuWidthList}
            previewImgMenuHeightList={project?.previewImgMenuHeightList}
            fullSizeImgMaxWidth={project?.fullSizeImgMaxWidth}
          />
        </div>
        <div className="flex flex-wrap max-[870px]:justify-center -ml-0.5 text-stone-200">
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
