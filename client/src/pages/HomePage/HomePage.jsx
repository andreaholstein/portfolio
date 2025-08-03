// ---------- FXNALITY ----------
import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------
// import Header, Bio, Projects, Footer
import Bio from '../../components/Bio/Bio';
// import Header from '../../components/Header/Header';
import Demos from '../../components/Demos/Demos';
import Projects from '../../components/Projects/Projects';
// ---------- STYLES ----------
import "./HomePage.scss";

export default function HomePage() {

    return (
        <section className="home">
            {/* <Header /> */}
            <Bio />
            <Demos />
            <Projects />
            {/* <Footer /> */}
        </section>
    );
}