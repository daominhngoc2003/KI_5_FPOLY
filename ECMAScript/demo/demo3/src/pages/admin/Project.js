import { useEffect, useState } from "../../lib";

const ProjectAdminPage = () => {
  // Bước 1: Khởi tạo state
  // Bước 2: render ra html

  const [data, setData] = useState([]);

  useEffect(() => {
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // setData(projects);
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        const newprojects = data.filter((project) => project.id != id);
        setData(newprojects);
      });
    }
  });

  return `<h1>Quan lý dự án</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th></th>
          <td><a href="/admin/projects/add">Thêm</a></td>
        </tr>
      </thead>
      <tbody>
      ${data
        .map(
          (project, index) =>
            `<tr>
          <td>${index + 1}</td>
          <td>${project.first_name + project.last_name}</td>
          <td><button data-id="${
            project.id
          }" class="btn btn-danger btn-remove">Xoá</button></td>
          <td><a href="/admin/projects/${project.id}/edit">Sửa</a></td>
          
        </tr>`
        )
        .join("")}
      </tbody>
      
    </table>`;
};

export default ProjectAdminPage;
