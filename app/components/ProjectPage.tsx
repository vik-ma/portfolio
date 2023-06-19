import { ProjectProps } from "@/typings";

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div>
      <p className="text-white">{project?.fullDescription}</p>
    </div>
  );
}
