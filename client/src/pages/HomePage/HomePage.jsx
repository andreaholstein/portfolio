// ---------- FXNALITY ----------
import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------
// import Header, Bio, Projects, Footer
import Bio from '../../components/Bio/Bio';
// import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
// ---------- STYLES ----------
import "./HomePage.scss";

export default function HomePage() {

    return (
        <section className="home">
            {/* <Header /> */}
            <Bio />
            <Projects />
            {/* <Footer /> */}
        </section>
    );
}