import { useEffect, useState } from "@/lib";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
        ${Header()}
        <h1>Projects Page</h1>
        ${ProjectList({ projects })}
    `;
};
export default ProjectsPage;
