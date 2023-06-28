import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import ProjectPage from "@/app/components/ProjectPage";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default function Project({ params: { id } }: PageProps) {
  const projects: ProjectsInfoProps = ProjectsInfo;
  const project = projects[id];

  if (!project) return notFound();

  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <Link href="/#projects">
          <button className="mb-5 py-2.5 px-4 rounded-xl font-bold text-lg text-zinc-100 bg-neutral-800 hover:bg-neutral-700">
            Back To Projects
          </button>
        </Link>
        <div className="px-4 py-3 md:py-4 rounded-xl max-md:text-center project-page-container">
          <h1
            className={`pb-0.5 md:pb-2 text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent ${project?.cssGradient}`}
          >
            {project?.name}
          </h1>
          <ProjectPage project={project} />
        </div>
      </div>
    </div>
  );
}
