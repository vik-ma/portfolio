import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";

type PageProps = {
  params: {
    id: string;
  };
};

export default function Project({ params: { id } }: PageProps) {
  const projects: ProjectsInfoProps = ProjectsInfo;
  const project = projects[id];

  return (
    <div className="justify-center items-center text-center">
      <h1 className="text-6xl font-extrabold text-white">{project?.name}</h1>
      <br />
      <p className="text-white">NOT Modal</p>
    </div>
  );
}
