// ---------- FXNALITY ----------
// import { Link } from "react-router";
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./NavLinks.scss";

export default function NavLinks({ bioSection, projectsSection, contactSection, scrollToSection }) {
    // MVP: No hamburger menu, all one page app?

    return (
        <section className="nav">
            <ul className="nav__list">
                <li className="nav__link" onClick={() => scrollToSection(bioSection)}><p className="nav__link-text">Bio</p></li>
                <li className="nav__link" onClick={() => scrollToSection(projectsSection)}><p className="nav__link-text">Projects</p></li>
                <li className="nav__link" onClick={() => scrollToSection(contactSection)}><p className="nav__link-text">Contact</p></li>
            </ul>
        </section>
    );
}
