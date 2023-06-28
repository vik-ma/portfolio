import { ProjectProps } from "@/typings";
import ImageSlider from "./ImageSlider";

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div className="max-md:text-center px-0.5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between mb-7">
          <div className="mb-2 md:mb-none">{project?.fullDescription}</div>
          <ImageSlider
            name={project?.name}
            previewImgSrcList={project?.previewImgSrcList}
            previewImgMainWidth={project?.previewImgMainWidth}
            previewImgMainHeight={project?.previewImgMainHeight}
            previewImgBase64DataList={project?.previewImgBase64DataList}
            previewImgMenuWidthList={project?.previewImgMenuWidthList}
            previewImgMenuHeightList={project?.previewImgMenuHeightList}
          />
        </div>
        <div className="flex flex-wrap max-md:justify-center -ml-0.5 text-stone-200">
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
