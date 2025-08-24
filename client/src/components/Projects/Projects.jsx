// ---------- FXNALITY ----------
import { useState } from 'react'
// ---------- COMPONENTS ----------
import Project from '../Project/Project';
// ---------- DATA ----------
import projects from "../../assets/data/resume.json"
// ---------- STYLES ----------
import "./Projects.scss";

export default function Projects({ projectsSection }) {
    // LOAD DATA
    let allProjects = [];

    if (!projects) {
        return <div className="projects__loading loading">Loading Data...</div>
    } else {
        allProjects = projects;
    }

    // TOGGLE LOGIC FOR PROJECTS ACCORDION
    const [isShowTVProjects, setIsShowTVProjects] = useState(false);
    const [isShowFilmProjects, setIsShowFilmProjects] = useState(false);
    const [isShowTheatreProjects, setIsShowTheatreProjects] = useState(false);
    const [isShowOtherProjects, setIsShowOtherProjects] = useState(false);

    // V2 - CIRCLE BACK TO THIS
    // ACTIVE HEADER
    // const [isActiveHeader, setIsActiveHeader] = useState(null);
    // logic feels like it's on the tip of my tongue, but trying to use this^ state to hold the active header value, and when the header loses this active status, need it to toggle itself off!

    // const oneAtATime = () => {
    // PSEUDO
    // if active header, great - show yourself
    // if not active header, hide/close
    // }
    // revisit NavLinks onClick! same idea!

    return (
        <section className="projects" id="#projects" ref={projectsSection}>
            <h2 className="projects__title title">Projects</h2>
            <div className="projects__accordion">
                <div className="projects__tv projects__div">
                    <button onClick={() => {
                        setIsShowTVProjects(!isShowTVProjects);
                        // setIsShowTVProjects(!isShowTVProjects); setIsActiveHeader(isShowTVProjects);
                    }}
                        className="tv__title projects__subtitle subtitle">Television</button>
                    {isShowTVProjects && (
                        <div className="tv__credits">
                            <ul className="tv__credits-list">
                                {allProjects.filter((project) => project.category === "tv").map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}

                </div>
                <div className="projects__film projects__div">
                    <button onClick={() => {
                        setIsShowFilmProjects(!isShowFilmProjects);
                        // setIsShowFilmProjects(!isShowFilmProjects); setIsActiveHeader(isShowFilmProjects);
                    }} className="film__title projects__subtitle subtitle">Film</button>
                    {isShowFilmProjects && (
                        <div className="film__credits">
                            <ul className="film__credits-list">
                                {allProjects.filter((project) => project.category === "film").map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="projects__theatre projects__div">
                    <button onClick={() => {
                        setIsShowTheatreProjects(!isShowTheatreProjects);
                        // setIsShowTheatreProjects(!isShowTheatreProjects); setIsActiveHeader(isShowTheatreProjects);
                    }} className="theatre__title projects__subtitle subtitle">Theatre</button>
                    {isShowTheatreProjects && (
                        <div className="theatre__credits">
                            <ul className="theatre__credits-list">
                                {allProjects.filter((project) => project.category === "theatre").map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="projects__multimedia projects__div">
                    <button onClick={() => {
                        setIsShowOtherProjects(!isShowOtherProjects);
                        // setIsShowOtherProjects(!isShowOtherProjects); setIsActiveHeader(isShowOtherProjects);
                    }} className="multi__title projects__subtitle subtitle">Other Media</button>
                    {isShowOtherProjects && (
                        <div className="other__credits">
                            <ul className="other__credits-list">
                                {allProjects.filter((project) => project.category === "other").map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};