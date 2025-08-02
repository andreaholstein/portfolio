// ---------- FXNALITY ----------
import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./Project.scss";

export default function Project({ project }) {
    return (
        <div className="project">
            <h3 className="project__title">{project.title}</h3>
            <h3 className="project__role">{project.role}</h3>
            <h3 className="project__company">{project.productionCompany}</h3>
            <h3 className="project__venue">{project.venue}</h3>
        </div>
    );
}