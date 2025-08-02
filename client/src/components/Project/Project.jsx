// ---------- FXNALITY ----------
// import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./Project.scss";


export default function Project({ project }) {

    return (
        <div className="project">
            <h4 className="project__title project__text">{project.title}</h4>
            <h4 className="project__role project__text">{project.role}</h4>
            <h4 className="project__company project__text">{project.productionCompany}</h4>
            <h4 className="project__venue project__text">{project.venue}</h4>
        </div>
    );
}