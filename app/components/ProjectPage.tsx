import { ProjectProps } from "@/typings";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div className="px-0.5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between mb-7">
          <div>{project?.fullDescription}</div>
          <ImageSlider
            name={project?.name}
            previewImgSrcList={project?.previewImgSrcList}
            previewImgMainWidthList={project?.previewImgMainWidthList}
            previewImgMainHeightList={project?.previewImgMainHeightList}
            previewImgBase64DataList={project?.previewImgBase64DataList}
            previewImgMenuWidthList={project?.previewImgMenuWidthList}
            previewImgMenuHeightList={project?.previewImgMenuHeightList}
          />
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
