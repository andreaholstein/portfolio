// ---------- FXNALITY ----------
import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./Project.scss";

export default function Project({ project }) {
    console.log("Proj:", project);

    return (
        <div className="project">
            <h3 className="project__title">{project.title}</h3>
            <h3 className="project__role">{project.role}</h3>
            <h3 className="project__company">{project.productionCompany}</h3>
        </div>
    );
}