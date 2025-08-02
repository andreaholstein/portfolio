// ---------- FXNALITY ----------
import { useState, useEffect } from 'react'
import { Link } from "react-router";
// ---------- COMPONENTS ----------
import Project from '../Project/Project';
// ---------- DATA ----------
import projects from "../../assets/data/resume.json"
// ---------- STYLES ----------
import "./Projects.scss";

export default function Projects() {
    console.log(projects);

    // LOAD DATA
    let allProjects = [];

    // TOGGLE LOGIC FOR PROJECTS ACCORDION
    const [isShowTVProjects, setIsShowTVProjects] = useState(null);
    const [isShowFilmProjects, setIsShowFilmProjects] = useState(null);
    const [isShowTheatreProjects, setIsShowTheatreProjects] = useState(null);
    const [isShowOtherProjects, setIsShowOtherProjects] = useState(null);

    // LOGIC FOR LOADING PROJECTS
    if (isShowTVProjects) {
        // setIsShowFilmProjects(null);
        // setIsShowTheatreProjects(null);
        // setIsShowOtherProjects(null);
        allProjects = projects.filter((project) => project.category === "tv");
    } else if (isShowFilmProjects) {
        // setIsShowTVProjects(null);
        // setIsShowTheatreProjects(null);
        // setIsShowOtherProjects(null);
        allProjects = projects.filter((project) => project.category === "film");
    } else if (isShowTheatreProjects) {
        // setIsShowTVProjects(null);
        // setIsShowFilmProjects(null);
        // setIsShowOtherProjects(null);
        allProjects = projects.filter((project) => project.category === "theatre");
    } else if (isShowOtherProjects) {
        // setIsShowTVProjects(null);
        // setIsShowFilmProjects(null);
        // setIsShowTheatreProjects(null);
        allProjects = projects.filter((project) => project.category === "other");
    } else {
        console.log("No Projects have been selected from the accordion")
    }

    return (
        <section className="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__accordion">
                <div className="projects__tv">
                    <button onClick={() => {
                        setIsShowTVProjects(!isShowTVProjects)
                    }}
                        className="tv__title">Television</button>
                    {isShowTVProjects && (
                        <div className="tv__credits">
                            <ul className="tv__credits-list">
                                {allProjects.map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}

                </div>
                <div className="projects__film">
                    <button onClick={() => {
                        setIsShowFilmProjects(!isShowFilmProjects)
                    }} className="film__title">Film</button>
                    {isShowFilmProjects && (
                        <div className="tv__credits">
                            <ul className="tv__credits-list">
                                {allProjects.map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="projects__theatre">
                    <button onClick={() => {
                        setIsShowTheatreProjects(!isShowTheatreProjects)
                    }} className="theatre__title">Theatre</button>
                    {isShowTheatreProjects && (
                        <div className="tv__credits">
                            <ul className="tv__credits-list">
                                {allProjects.map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="projects__multimedia">
                    <button onClick={() => {
                        setIsShowOtherProjects(!isShowOtherProjects)
                    }} className="multi__title">Other Media</button>
                    {isShowOtherProjects && (
                        <div className="tv__credits">
                            <ul className="tv__credits-list">
                                {allProjects.map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}