// ---------- FXNALITY ----------
// import { useRef } from 'react'
import { Link } from "react-router";
// import { HashLink } from 'react-router-hash-link'
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./NavLinks.scss";

export default function NavLinks({ bio, projects, contact, scrollToSection }) {
    // TO DO: Update Links with actual pathways, ensure nav menu panel closes on click!\
    // MVP: No hamburger menu, all one page app?

    return (
        <section className="nav">
            <ul className="nav__list">
                {/* <a href="#bio" className="nav__link"> */}
                <li className="nav__link-text" onClick={() => scrollToSection(bio)}>Bio</li>
                {/* </a> */}
                {/* <a href="#projects" className="nav__link"> */}
                <li className="nav__link-text" onClick={() => scrollToSection(projects)}>Projects</li>
                {/* </a> */}
                {/* <a href="#contact" className="nav__link"> */}
                <li className="nav__link-text" onClick={() => scrollToSection(contact)}>Contact</li>
                {/* </a> */}
                {/* <li className="nav__link-text">Home</li> */}
            </ul>
        </section>
    );
}

// V2 - Multi-page app layout:
//  <Link to="/">
//     <li className="nav__links">Home</li>
// </Link>
// <Link to="/">
//     <li className="nav__links">Bio</li>
// </Link>
// <Link to="/">
//     <li className="nav__links">Projects</li>
// </Link>
// <Link to="/">
//     <li className="nav__links">Contact</li>
// </Link>