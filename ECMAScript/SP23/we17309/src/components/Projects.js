const Projects = ({ projects }) => {
    // { projects: []} // projects.projects
    return `<div>
        ${projects.map((project) => `<div>${project.name}</div>`).join("")}
    </div>`;
};

export default Projects;
