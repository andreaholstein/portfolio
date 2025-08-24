// ---------- FXNALITY ----------
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./Project.scss";


export default function Project({ project }) {

    return (
        <div className="project">
            <div className="project__text-wrap">

                <div className="project__mobile-wrap">
                    <p className="project__title project__text">{project.title}</p>
                    <p className="project__role project__text">{project.role}</p>
                </div>
                <p className="project__company project__text">{project.productionCompany}</p>
                <p className="project__venue project__text">{project.venue}</p>
            </div>
        </div>
    );
}