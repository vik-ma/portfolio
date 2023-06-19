import { ProjectProps } from "@/typings";

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div>
      <h1 className="text-6xl font-extrabold text-white">{project?.name}</h1>
      <br />
      <p className="text-white">{project?.fullDescription}</p>
    </div>
  );
}
