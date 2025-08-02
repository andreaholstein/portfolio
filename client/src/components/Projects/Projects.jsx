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

    if (!projects) {
        return <div className="projects__loading">Loading Data...</div>
    } else {
        allProjects = projects;
    }

    // TOGGLE LOGIC FOR PROJECTS ACCORDION
    const [isShowTVProjects, setIsShowTVProjects] = useState(false);
    const [isShowFilmProjects, setIsShowFilmProjects] = useState(false);
    const [isShowTheatreProjects, setIsShowTheatreProjects] = useState(false);
    const [isShowOtherProjects, setIsShowOtherProjects] = useState(false);

    // ACTIVE HEADER
    // const [isActiveHeader, setIsActiveHeader] = useState(null);
    // logic feels like it's on the tip of my tongue, but trying to use this^ state to hold the active header value, and when the header loses this active status, need it to toggle itself off!

    // create function for logic, nest in function for setting active header?

    // LOGIC FOR LOADING PROJECTS
    // const showHeaderContent = () => {
    //     if (isShowTVProjects) {
    //         allProjects = projects.filter((project) => project.category === "tv");
    //     } if (isShowFilmProjects) {
    //         allProjects = projects.filter((project) => project.category === "film");
    //     } if (isShowTheatreProjects) {
    //         allProjects = projects.filter((project) => project.category === "theatre");

    //     } if (isShowOtherProjects) {
    //         allProjects = projects.filter((project) => project.category === "other");
    //     }
    //     else {
    //         console.log("No Headers Selected.");

    //         // setIsShowTVProjects(null);
    //         // setIsShowFilmProjects(null);
    //         // setIsShowTheatreProjects(null);
    //         // setIsShowOtherProjects(null);
    //     }
    // }

    // console.log("ShowTv", isShowTVProjects);

    return (
        <section className="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__accordion">
                <div className="projects__tv">
                    <button onClick={() => {
                        setIsShowTVProjects(!isShowTVProjects);
                    }}
                        className="tv__title">Television</button>
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
                <div className="projects__film">
                    <button onClick={() => {
                        setIsShowFilmProjects(!isShowFilmProjects);
                    }} className="film__title">Film</button>
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
                <div className="projects__theatre">
                    <button onClick={() => {
                        setIsShowTheatreProjects(!isShowTheatreProjects);
                    }} className="theatre__title">Theatre</button>
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
                <div className="projects__multimedia">
                    <button onClick={() => {
                        setIsShowOtherProjects(!isShowOtherProjects);
                    }} className="multi__title">Other Media</button>
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