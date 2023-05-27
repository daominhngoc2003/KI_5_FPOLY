import { router, useEffect, useState } from "../../lib";

const ProjectAdminAddPage = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: name.value,
      };
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/admin/products"));
    });
  });

  return `
  <form id="form-add">
    <input type="text" id="name" class="border" placeholder="name">
    <button class="btn btn-danger">Add</button>
  </form>
  `;
};

export default ProjectAdminAddPage;
