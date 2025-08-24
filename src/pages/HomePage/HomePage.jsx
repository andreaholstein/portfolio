// ---------- FXNALITY ----------
// ---------- COMPONENTS ----------
import Bio from '../../components/Bio/Bio';
import Demos from '../../components/Demos/Demos';
import PhotoBubble from '../../components/PhotoBubble/PhotoBubble';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';
// ---------- DATA ----------
import photos from "../../assets/data/photos.json";
// ---------- STYLES ----------
import "./HomePage.scss";
// ----------------------------

export default function HomePage({ bioSection, projectsSection, contactSection }) {

    // LOAD DATA
    let photoList = [];

    if (!photos) {
        return <div className="home__photos-loading loading">Loading Image Data...</div>
    } else {
        photoList = photos;
    }


    return (
        <section className="home">
            <PhotoBubble photo={photoList[0]} />
            <Bio bioSection={bioSection} />
            <PhotoBubble photo={photoList[1]} />
            <Demos />
            <PhotoBubble photo={photoList[2]} />
            <Projects projectsSection={projectsSection} />
            <PhotoBubble photo={photoList[3]} />
            <PhotoBubble photo={photoList[4]} />
            <Footer contactSection={contactSection} />
        </section>
    );
}