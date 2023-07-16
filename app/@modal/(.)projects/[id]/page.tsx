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
      <div className="max-md:text-center md:flex md:flex-row md:justify-between">
        <h1
          className={`pb-0.5 md:pb-2 text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent ${project?.cssGradient}`}
        >
          {project?.name}
        </h1>
      </div>
      <ProjectPage project={project} />
    </Modal>
  );
}
