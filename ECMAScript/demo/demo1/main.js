import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { render, router } from "./src/lib";
import AboutPage from "./src/pages/AboutPage";
import ProjectAdminPage from "./src/pages/admin/Project";
import ProjectAdminAddPage from "./src/pages/admin/Project-add";
import ContactPage from "./src/pages/ContactPage";
import HomePage from "./src/pages/HomePage";
import PostPage from "./src/pages/PostPage";
import ProjectDetailPage from "./src/pages/ProjectDetailPage";
import ProjectPage from "./src/pages/ProjectPage";

const app = document.querySelector("#app");
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/post", () => render(PostPage, app));
router.on("/projects", () => render(ProjectPage, app));
router.on("/projects/:id", (param) =>
  render(ProjectDetailPage(param.data.id), app)
);

router.on("/admin/projects", () => render(ProjectAdminPage, app));
router.on("/admin/projects/add", () => render(ProjectAdminAddPage, app));

router.notFound(() => render("not found"));
router.resolve();
