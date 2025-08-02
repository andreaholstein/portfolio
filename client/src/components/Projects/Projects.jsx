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

    // ACTIVE HEADER
    const [isActiveHeader, setIsActiveHeader] = useState("");

    // some logic for all the sets - can it be replace with some "activeState = <whatever was clicked on>" and "whatever used to be activeSatte and lost that status, toggle yourself to false"
    //^ to counteract the rendering issue of seeting everything to the opposite?

    // LOGIC FOR LOADING PROJECTS
    if (isShowTVProjects) {
        isShowTVProjects === isActiveHeader;
        // setIsShowFilmProjects(false);
        // setIsShowTheatreProjects(false);
        // setIsShowOtherProjects(false);
        if (isShowTVProjects === isActiveHeader) {
            allProjects = projects.filter((project) => project.category === "tv");
        } else {
            isShowTVProjects !== isActiveHeader
        }
    } else if (isShowFilmProjects) {
        setIsActiveHeader(isShowFilmProjects);
        // setIsShowTVProjects(false);
        // setIsShowTheatreProjects(false);
        // setIsShowOtherProjects(false);
        if (isActiveHeader === isShowFilmProjects) {
            allProjects = projects.filter((project) => project.category === "film");
        } else {
            setIsActiveHeader(null);
        }
    } else if (isShowTheatreProjects) {
        isShowTheatreProjects === isActiveHeader;
        // setIsShowTVProjects(false);
        // setIsShowFilmProjects(false);
        // setIsShowOtherProjects(false);
        if (isShowTheatreProjects === isActiveHeader) {
            allProjects = projects.filter((project) => project.category === "theatre");
        } else {
            isShowTheatreProjects !== isActiveHeader
        }
    } else if (isShowOtherProjects) {
        isShowOtherProjects === isActiveHeader;
        // setIsShowTVProjects(false);
        // setIsShowFilmProjects(false);
        // setIsShowTheatreProjects(false);
        if (isShowOtherProjects === isActiveHeader) {
            allProjects = projects.filter((project) => project.category === "other");
        } else {
            isShowOtherProjects !== isActiveHeader
        }
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