import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";
import AdminProjectPage from "./src/pages/admin/projects";
import AdminProjectAddPage from "./src/pages/admin/projects-add";
import AdminProjectEditPage from "./src/pages/admin/projects-edit";

// alt + shift + o
// option + shift + o
const app = document.querySelector("#app");

router.on("/admin/*", () => {}, {
    before: (next) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user | (user && user.id != 1)) return (window.location.href = "/");
        next();
    },
});

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) => render(() => ProjectDetailPage(data), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", () => render(PostDetailPage, app));

router.on("/admin/projects", () => render(AdminProjectPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));

router.notFound(() => console.log("not found page"));

router.resolve();
