import { router, useEffect } from "../../lib";
// import { projects } from "../../data";

const ProjectAdminAddPage = () => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      projects.push({
        id: projects.length + 1,
        name: name.value,
      });
      localStorage.setItem("projects", JSON.stringify(projects));
      router.navigate("/admin/projects");
    });
  });
  return `
  <form id="form-add">
      <input type="text" id="name" class="border" value="name">
      <button class="btn btn-primary">Thêm</button>
    </form>
  `;
};

export default ProjectAdminAddPage;
