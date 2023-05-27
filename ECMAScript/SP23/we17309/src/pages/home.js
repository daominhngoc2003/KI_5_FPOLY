import Category from "@/components/Category";
import Projects from "@/components/Projects";
import { useEffect, useState } from "@/lib";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);
    const onHandleClick = (id) => {
        fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
            .then((response) => response.json())
            .then((data) => setProjects(data.projects));
    };
    return `
    ${Header()}
    
    <h1>Home Page</h1>
    <hr />
        ${Category({ categories: categories, onClick: onHandleClick })}
        ${Projects({ projects })}
    <hr />
    ${Footer()}
    `;
};
export default HomePage;
