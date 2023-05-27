const ProjectItem = ({ project }) => {
  return `<div><a href="/projects/${project.id}">${project.name}</a></div>`;
};

export default ProjectItem;
