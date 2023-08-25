import { redirect } from "next/navigation";
export default async function Projects() {
  // Redirect /projects root to #projects section on Home page
  redirect("/#projects");
}
