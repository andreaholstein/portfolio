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
    const [isShowTVProjects, setIsShowTVProjects] = useState(false);
    const [isShowFilmProjects, setIsShowFilmProjects] = useState(false);
    const [isShowTheatreProjects, setIsShowTheatreProjects] = useState(false);
    const [isShowOtherProjects, setIsShowOtherProjects] = useState(false);

    // ACTIVE HEADER
    const [isActiveHeader, setIsActiveHeader] = useState(null);
    // logic feels like it's on the tip of my tongue, but trying to use this^ state to hold the active header value, and when the header loses this active status, need it to toggle itself off!

    // create function for logic, nest in function for setting active header?
    const makeActiveHeader = () => {
        if (isShowTVProjects) {
            setIsActiveHeader(isShowFilmProjects);
            showAccordionContent();
        } else if (isShowFilmProjects) {
            setIsActiveHeader(isShowFilmProjects);
            showAccordionContent();
        } else if (isShowTheatreProjects) {
            setIsActiveHeader(isShowTheatreProjects)
            showAccordionContent();
        } else if (isShowOtherProjects) {
            setIsActiveHeader(isShowOtherProjects)
            showAccordionContent();
        } else {
            console.log("No Header Selected.");

        }
    }

    const showAccordionContent = () => {
        // LOGIC FOR LOADING PROJECTS
        if (isActiveHeader === isShowTVProjects) {
            allProjects = projects.filter((project) => project.category === "tv");
            if (isActiveHeader !== isShowTVProjects) {
                setIsShowTVProjects(null);
            }
        } else if (isActiveHeader === isShowFilmProjects) {
            allProjects = projects.filter((project) => project.category === "film");
            if (isActiveHeader !== isShowFilmProjects) {
                setIsShowFilmProjects(null);
            }
        } else if (isActiveHeader === isShowTheatreProjects) {
            allProjects = projects.filter((project) => project.category === "theatre");
            if (isActiveHeader !== isShowTheatreProjects) {
                setIsShowTheatreProjects(null);
            }
        } else if (isActiveHeader === isShowOtherProjects) {
            allProjects = projects.filter((project) => project.category === "other");
            if (isActiveHeader !== isShowOtherProjects) {
                setIsShowOtherProjects(null);
            }
        } else {
            console.log("No Projects have been selected from the accordion")
        }
    }
    return (
        <section className="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__accordion">
                <div className="projects__tv">
                    <button onClick={() => {
                        setIsShowTVProjects(!isShowTVProjects); makeActiveHeader();
                        console.log(isShowTVProjects);

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
                        setIsShowFilmProjects(!isShowFilmProjects); makeActiveHeader();
                    }} className="film__title">Film</button>
                    {isShowFilmProjects && (
                        <div className="film__credits">
                            <ul className="film__credits-list">
                                {allProjects.map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="projects__theatre">
                    <button onClick={() => {
                        setIsShowTheatreProjects(!isShowTheatreProjects); makeActiveHeader();
                    }} className="theatre__title">Theatre</button>
                    {isShowTheatreProjects && (
                        <div className="theatre__credits">
                            <ul className="theatre__credits-list">
                                {allProjects.map((project) => {
                                    return <Project key={project.id} project={project} />;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="projects__multimedia">
                    <button onClick={() => {
                        setIsShowOtherProjects(!isShowOtherProjects); makeActiveHeader();
                    }} className="multi__title">Other Media</button>
                    {isShowOtherProjects && (
                        <div className="other__credits">
                            <ul className="other__credits-list">
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