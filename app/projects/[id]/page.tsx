import { ProjectsInfo } from "@/app/ProjectsInfo";
import { ProjectsInfoProps } from "@/typings";
import { ProjectPage } from "@/app/components";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackArrow } from "@/app/icons";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Project({ params }: PageProps) {
  const { id } = await params;

  const projects: ProjectsInfoProps = ProjectsInfo;
  const project = projects[id];

  // Display projects/not-found.tsx if Project ID is not found
  if (!project) return notFound();

  return (
    <>
      <title>{project?.name}</title>
      <div className="flex justify-center items-center min-[871px]:h-screen py-6">
        <div className="m-auto">
          <Link href="/#projects">
            <button className="single-page-back-button mb-4 py-2 px-4 rounded-xl font-bold text-xl text-stone-100 hover:bg-stone-700">
              <span className="inline-block align-middle">
                <BackArrow />
              </span>
              <span className="inline-block align-middle ml-2.5">
                Back To Projects
              </span>
            </button>
          </Link>
          <div className="px-4 py-3 pt-3 min-[871px]:py-4 rounded-xl project-page-container">
            <div className="text-4xl md:text-5xl font-extrabold">
              <h1 className="w-fit pb-1 md:pb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400">
                {project?.name}
              </h1>
            </div>
            <ProjectPage project={project} />
          </div>
        </div>
      </div>
    </>
  );
}

// Function to statically generate all Project pages
export async function generateStaticParams() {
  const projects: ProjectsInfoProps = ProjectsInfo;

  return Object.keys(projects).map((project: string) => ({
    id: project,
  }));
}
