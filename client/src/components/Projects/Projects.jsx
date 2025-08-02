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
    // console.log(projects);

    // LOAD DATA
    let allProjects = [];

    // TOGGLE LOGIC FOR PROJECTS ACCORDION
    const [isShowTVProjects, setIsShowTVProjects] = useState(null);
    const [isShowFilmProjects, setIsShowFilmProjects] = useState(null);
    const [isShowTheatreProjects, setIsShowTheatreProjects] = useState(null);
    const [isShowOtherProjects, setIsShowOtherProjects] = useState(null);

    // ACTIVE HEADER
    const [isActiveHeader, setIsActiveHeader] = useState(null);
    // logic feels like it's on the tip of my tongue, but trying to use this^ state to hold the active header value, and when the header loses this active status, need it to toggle itself off!

    // const collapseHeaders = () => {
    // LOGIC FOR LOADING PROJECTS
    if (isActiveHeader === isShowTVProjects) {
        allProjects = projects.filter((project) => project.category === "tv");
        console.log("Collapse TV:", allProjects);
    } else if (isActiveHeader === isShowFilmProjects) {
        allProjects = projects.filter((project) => project.category === "film");
        console.log("Collapse FILM:", allProjects);
    } else if (isActiveHeader === isShowTheatreProjects) {
        allProjects = projects.filter((project) => project.category === "theatre");
        console.log("Collapse THEATRE:", allProjects);
    } else if (isActiveHeader === isShowOtherProjects) {
        allProjects = projects.filter((project) => project.category === "other");
        console.log("Collapse OTHER:", allProjects);
    } else {
        console.log("No Projects have been selected from the accordion")
    }
    // }

    return (
        <section className="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__accordion">
                <div className="projects__tv">
                    <button onClick={() => {
                        setIsShowTVProjects(!isShowTVProjects); collapseHeaders;
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
                        setIsShowFilmProjects(!isShowFilmProjects); collapseHeaders();
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
                        setIsShowTheatreProjects(!isShowTheatreProjects); collapseHeaders();
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
                        setIsShowOtherProjects(!isShowOtherProjects); collapseHeaders();
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