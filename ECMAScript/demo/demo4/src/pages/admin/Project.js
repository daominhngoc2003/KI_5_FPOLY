import { useEffect, useState } from "../../lib";

const ProjectAdminPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        // Xóa local
        const id = this.dataset.id;
        // Xóa server
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        }).then(() => {
          alert("delete successfull");
          setProducts(products.filter((product) => product.id != id));
        });
      });
    }
  });
  return `
      <table class="table table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th><a href="/admin/products/add">AddProduct</a></th>
        </tr>
      </thead>
      <tbody> 
      ${products
        .map(
          (product, index) =>
            `
            
        <tr>
          <td>${index + 1}</td>
          <td>${product.name}</td>
          <td><button data-id="${
            product.id
          }" class="btn btn-remove btn-primary">Delete</button></td>
          <td><a class="btn btn-danger" href="/admin/products/${
            product.id
          }/edit">Edit</a></td>
        </tr>
        `
        )
        .join("")}
        
      </tbody>
    </table>
  `;
};

export default ProjectAdminPage;
