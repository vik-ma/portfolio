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

  return <ProjectPage project={project} />;
}
