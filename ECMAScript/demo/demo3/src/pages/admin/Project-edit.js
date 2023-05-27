import { useEffect, router } from "../../lib";

const ProjectAdminEditPage = ({ id }) => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const currentProject = projects.find((project) => project.id == id);

  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newProject = {
        id: currentProject.id,
        name: name.value,
      };
      const newProjects = projects.map((project) => {
        return project.id == newProject.id ? newProject : project;
      });
      localStorage.setItem("projects", JSON.stringify(newProjects));
      router.navigate("/admin/projects");
    });
  });
  if (!currentProject) return "";
  return `<form id="form-edit">
  <input type="text" id="name" class="border" value="${currentProject.name}">
  <button class="btn btn-primary">Lưu</button>
</form>`;
};

export default ProjectAdminEditPage;
