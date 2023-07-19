import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import ProjectPage from "@/app/components/ProjectPage";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackArrow from "@/app/icons/BackArrow";

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
          <button className="single-page-back-button mb-5 py-2 px-4 rounded-xl font-bold text-xl text-stone-100 hover:bg-stone-700">
            <span className="inline-block align-middle">
              <BackArrow />
            </span>
            <span className="inline-block align-middle ml-2.5">Back To Projects</span>
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
