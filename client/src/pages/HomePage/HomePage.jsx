// ---------- FXNALITY ----------
import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------
import Bio from '../../components/Bio/Bio';
// import Header from '../../components/Header/Header';
import Demos from '../../components/Demos/Demos';
import Projects from '../../components/Projects/Projects';
// ---------- DATA ----------
import photos from "../../assets/data/photos.json";
// ---------- STYLES ----------
import "./HomePage.scss";
import PhotoBubble from '../../components/PhotoBubble/PhotoBubble';

export default function HomePage() {

    // LOAD DATA
    let photoList = [];

    if (!photos) {
        return <div className="home__photos-loading loading">Loading Image Data...</div>
    } else {
        photoList = photos;
    }

    console.log(photoList);
    console.log("Photo", photoList[0]);
    console.log("Photo2", photoList[1]);

    return (
        <section className="home">
            {/* <Header /> */}
            {/* {photoList.filter((photo) => photo.id === 3).map((photo) => {
                return <PhotoBubble key={photo.id} photo={photo} />;
                })} */}
            <PhotoBubble photo={photoList[0]} />
            <Bio />
            <PhotoBubble photo={photoList[1]} />
            <Demos />
            <PhotoBubble photo={photoList[2]} />
            {/* <Projects /> */}
            {/* <Footer /> */}
        </section>
    );
}