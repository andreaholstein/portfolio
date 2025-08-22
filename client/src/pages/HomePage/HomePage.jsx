// ---------- FXNALITY ----------
import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------
import Bio from '../../components/Bio/Bio';
// import Header from '../../components/Header/Header';
import Demos from '../../components/Demos/Demos';
import PhotoBubble from '../../components/PhotoBubble/PhotoBubble';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
// ---------- DATA ----------
import photos from "../../assets/data/photos.json";
// ---------- STYLES ----------
import "./HomePage.scss";
// ----------------------------


export default function HomePage({ bio, projects, contact }) {

    // let bio = bio;
    // let projects = projects;
    // let contact = contact;

    // LOAD DATA
    let photoList = [];

    if (!photos) {
        return <div className="home__photos-loading loading">Loading Image Data...</div>
    } else {
        photoList = photos;
    }

    return (
        <section className="home">
            {/* <Header /> */}
            <PhotoBubble photo={photoList[0]} />
            <Bio bio={bio} />
            <PhotoBubble photo={photoList[1]} />
            <Demos />
            <PhotoBubble photo={photoList[2]} />
            <Projects projects={projects} />
            <PhotoBubble photo={photoList[3]} />
            <PhotoBubble photo={photoList[4]} />
            <Footer contact={contact} />
        </section>
    );
}