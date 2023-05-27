import { projects } from "../../data";
import { useEffect, useState } from "../../lib";

const ProjectAdminPage = () => {
  // Bước 1: Khởi tạo state
  // Bước 2: render ra html

  const [data, setData] = useState(projects);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        removeItem(id);
      });
    }
  });
  const removeItem = (id) => {
    setData(data.filter((project) => project.id != id));
  };

  return `<h1>Quan lý dự án</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      ${data
        .map(
          (project, index) =>
            `<tr>
          <td>${index + 1}</td>
          <td>${project.name}</td>
          <td><button data-id="${
            project.id
          }" class="btn btn-danger btn-remove">Xoá</button></td>
        </tr>`
        )
        .join("")}
      </tbody>
      
    </table>`;
};

export default ProjectAdminPage;
