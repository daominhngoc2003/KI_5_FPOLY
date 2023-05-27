import Header from "../components/Header";
import { projects } from "../data";
const ProjectDetailPage = (id) => {
  const currentProject = projects.find((project) => project.id == id);
  return `<div>ProjectDetailPage</div>
 ${Header()} 
 ${currentProject.name}
  `;
};

export default ProjectDetailPage;
