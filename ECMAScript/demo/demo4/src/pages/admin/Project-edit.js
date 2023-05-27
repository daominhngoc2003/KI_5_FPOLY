import { router, useEffect, useState } from "../../lib";

const ProjectAdminEditPage = ({ id }) => {
  const [product, setProducts] = useState({});
  console.log("product1:   ", product);
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log("product:   ", product);
  useEffect(() => {
    const form = document.querySelector("#form-edit");
    const name = document.querySelector("#name");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const FormData = {
        name: name.value,
      };
      fetch("http://localhost:3000/products/" + id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(FormData),
      })
        .then((response) => response.json())
        .then(() => router.navigate("/admin/products/"));
    });
  });
  console.log("product2:   ", product);
  return `
  <form id="form-edit">
    <input type="text" id="name" class="border" value="${product.name}" >
    <button class="btn btn-danger">Add</button>
  </form>
  `;
};

export default ProjectAdminEditPage;
