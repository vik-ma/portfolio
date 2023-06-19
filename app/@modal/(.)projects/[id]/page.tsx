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
        className="text-3xl md:text-5xl font-extrabold text-zinc-100"
        // id={`${project?.cssId}-heading`}
      >
        {project?.name}
      </h1>
      <br />
      <ProjectPage project={project} />
    </Modal>
  );
}
