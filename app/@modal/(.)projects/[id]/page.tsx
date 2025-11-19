import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import { Modal, ProjectPage } from "@/app/components";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectModal({ params }: PageProps) {
  const { id } = await params;

  const projects: ProjectsInfoProps = ProjectsInfo;
  const project = projects[id];

  // Display projects/not-found.tsx if Project ID is not found
  if (!project) return notFound();

  // Display the Project page inside of a Modal instead of sending the user to a new page
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
