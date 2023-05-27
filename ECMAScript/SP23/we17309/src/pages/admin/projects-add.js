import { router, useEffect } from "@/lib";
// import { projects } from "../../data";
import { object, string } from "yup";

const projectSchema = object({
    name: string().required(),
    desc: string().required(),
});

const ProjectAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const name = document.querySelector("#name");
        const desc = document.querySelector("#description");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = {
                name: name.value,
                desc: desc.value,
            };

            projectSchema
                .validate(formData, { abortEarly: false })
                .then(() => {
                    fetch("http://localhost:3000/projects", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    }).then(() => router.navigate("/admin/projects"));
                })
                .catch(({ errors }) => {
                    console.log(errors);
                });
        });
    });

    return `<div>
        <form id="form-add">
            <input type="text" id="name" class="border" />
            <input type="text" id="description" class="border" />
            <button class="btn btn-primary">Thêm</button>
        </form>
    </div>`;
};

export default ProjectAdd;
