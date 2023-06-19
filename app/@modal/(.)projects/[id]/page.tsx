import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import Modal from "@/app/components/Modal";
import ProjectPage from "@/app/components/ProjectPage";

type PageProps = {
  params: {
    id: string;
  };
};

export default function ProjectModal({ params: { id } }: PageProps) {
  const projects: ProjectsInfoProps = ProjectsInfo;
  const project = projects[id];

  return (
    <Modal>
      <h1
        className={`pb-2 text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent ${project?.cssGradient}`}
      >
        {project?.name}
      </h1>
      <br />
      <ProjectPage project={project} />
    </Modal>
  );
}
