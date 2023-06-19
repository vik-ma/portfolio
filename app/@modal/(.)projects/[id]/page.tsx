import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import Modal from "@/app/components/Modal";

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
      <h1 className="text-6xl font-extrabold text-white">{project?.name}</h1>
      <br />
      <p className="text-white">Modal</p>
    </Modal>
  );
}
