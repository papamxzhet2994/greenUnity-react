import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProjects([
                { id: 1, image: "https://via.placeholder.com/300", name: "Проект 1", description: "Описание проекта 1", link: "https://example.com" },
                { id: 2, image: "https://via.placeholder.com/300", name: "Проект 2", description: "Описание проекта 2", link: "https://example.com" },
                { id: 3, image: "https://via.placeholder.com/300", name: "Проект 3", description: "Описание проекта 3", link: "https://example.com" },
                { id: 4, image: "https://via.placeholder.com/300", name: "Проект 4", description: "Описание проекта 4", link: "https://example.com" },
                { id: 5, image: "https://via.placeholder.com/300", name: "Проект 5", description: "Описание проекта 5", link: "https://example.com" },
                { id: 6, image: "https://via.placeholder.com/300", name: "Проект 6", description: "Описание проекта 6", link: "https://example.com" },
                { id: 7, image: "https://via.placeholder.com/300", name: "Проект 7", description: "Описание проекта 7", link: "https://example.com" },
                { id: 8, image: "https://via.placeholder.com/300", name: "Проект 8", description: "Описание проекта 8", link: "https://example.com" },
            ]);
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="projects">
            <h2>Наши проекты</h2>
            <div className="project-list">
                {loading ? (
                    Array(8).fill().map((_, index) => (
                        <div key={index} className="project-item">
                            <div className="project-image">
                                <Skeleton height={200} />
                            </div>
                            <div className="project-info">
                                <h3><Skeleton width={`60%`} /></h3>
                                <p><Skeleton count={3} /></p>
                                <Skeleton width={`40%`} height={30} />
                            </div>
                        </div>
                    ))
                ) : (
                    projects.map(project => (
                        <div key={project.id} className="project-item">
                            <div className="project-image">
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className="project-info">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">Открыть проект</a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Projects;
