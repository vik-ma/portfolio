import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import ProjectPage from "@/app/components/ProjectPage";

type PageProps = {
  params: {
    id: string;
  };
};

export default function Project({ params: { id } }: PageProps) {
  const projects: ProjectsInfoProps = ProjectsInfo;
  const project = projects[id];

  return (
    <div>
      <h1 className="text-6xl font-extrabold text-white">{project?.name}</h1>
      <ProjectPage project={project} />
    </div>
  );
}
