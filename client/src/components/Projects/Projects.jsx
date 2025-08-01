// ---------- FXNALITY ----------
import { useState, useEffect } from 'react'
import { Link } from "react-router";
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./Projects.scss";

export default function Projects() {

    const [isShowProjects, setIsShowProjects] = useState(null);

    return (
        <section className="projects">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__accordion">
                <div className="projects__tv">
                    <h4 className="tv__title">Television</h4>
                </div>
                <div className="projects__film">
                    <h4 className="film__title">Film</h4>
                </div>
                <div className="projects__theatre">
                    <h4 className="theatre__title">Theatre</h4>

                </div>
                <div className="projects__multimedia">
                    <h4 className="multi__title">Other Media</h4>

                </div>
            </div>
        </section>
    );
}