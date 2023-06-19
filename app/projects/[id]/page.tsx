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
    <div className="flex h-screen justify-center items-center">
      <div className="px-4 md:px-5 py-3 md:py-4 rounded-xl project-modal-wrapper">
        <h1
          className="text-3xl md:text-5xl font-extrabold text-zinc-100"
          // id={`${project?.cssId}-heading`}
        >
          {project?.name}
        </h1>
        <br />
        <ProjectPage project={project} />
      </div>
    </div>
  );
}
