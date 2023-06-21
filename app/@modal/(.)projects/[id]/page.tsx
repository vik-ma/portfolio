import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import Modal from "@/app/components/Modal";
import ProjectPage from "@/app/components/ProjectPage";
import CloseButton from "@/app/icons/CloseButton";

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
      <div className="flex flex-row justify-between">
        <h1
          className={`pb-2 text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent ${project?.cssGradient}`}
        >
          {project?.name}
        </h1>
        {/* <div className="flex items-baseline -mt-1 -mr-1">
          <div className="p-1.5 rounded-lg hover:bg-neutral-700">
            <CloseButton />
          </div>
        </div> */}
      </div>
      <ProjectPage project={project} />
    </Modal>
  );
}
