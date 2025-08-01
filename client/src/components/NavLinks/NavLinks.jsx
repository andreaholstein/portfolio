// ---------- FXNALITY ----------
// import { useState, useEffect } from 'react'
import { Link } from "react-router";
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./NavLinks.scss";

export default function NavLinks() {
    // TO DO: Update Links with actual pathways, ensure nav menu panel closes on click!\
    // MVP: No hamburger menu, all one page app?
    return (
        <section className="nav">
            <ul className="nav__list">
                <Link to="/">
                    <li className="nav__links">Home</li>
                </Link>
                <Link to="/">
                    <li className="nav__links">Bio</li>
                </Link>
                <Link to="/">
                    <li className="nav__links">Contact</li>
                </Link>
            </ul>
        </section>
    );
}