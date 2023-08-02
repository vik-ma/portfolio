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
    <>
      <title>{project?.name}</title>
      <Modal>
        <div className="md:flex md:flex-row md:justify-between">
          <div className="text-4xl md:text-5xl font-extrabold">
            <h1 className="w-fit pb-1 md:pb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400">
              {project?.name}
            </h1>
          </div>
        </div>
        <ProjectPage project={project} />
      </Modal>
    </>
  );
}
