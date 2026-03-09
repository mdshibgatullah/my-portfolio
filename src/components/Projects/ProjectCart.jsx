import React, { useState } from 'react';
import './Projects.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectCart = ({ projects }) => {

    const [selected, setSelected] = useState(0);
    const [direction, setDirection] = useState("");

    const handlePrev = () => {
        setDirection("slide-right");
        setSelected((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection("slide-left");
        setSelected((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="project-container">

            <div className={`project-box ${direction}`} key={selected}>

                <div className="project-desc">
                    <h2>{projects[selected].count}</h2>
                    <h4>{projects[selected].title}</h4>
                    <p>{projects[selected].description}</p>

                    <div className="technologies">
                        <p>Technologies:</p>

                        {projects[selected].technologies.map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                        ))}

                    </div>
                </div>

                <div className="project-img">
                    <img
                        src={projects[selected].image}
                        alt={projects[selected].title}
                        className="project-image"
                    />
                </div>

            </div>

            <div className="arrow-wrap">

                <div className="arrow" onClick={handlePrev}>
                    <FaArrowLeft />
                </div>

                <div className="arrow" onClick={handleNext}>
                    <FaArrowRight />
                </div>

            </div>

        </div>
    );
};

export default ProjectCart;