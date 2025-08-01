// ---------- FXNALITY ----------
// import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------

// ---------- STYLES ----------
import "./NavLinks.scss";

export default function NavLinks() {

    return (
        <section className="nav">
            <ul className="nav__list">
                <li className="nav__links">Home</li>
                <li className="nav__links">Bio</li>
                <li className="nav__links">Contact</li>
            </ul>
        </section>
    );
}