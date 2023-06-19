import { ProjectProps } from "@/typings";

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div>
      <p className="text-white">{project?.fullDescription}</p>
      <p className="text-white">{project?.techStack.join(" ")}</p>
    </div>
  );
}
