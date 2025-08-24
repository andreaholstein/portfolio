// ---------- FXNALITY ----------
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./PhotoBubble.scss";

export default function PhotoBubble({ photo }) {

    if (!photo) {
        <div className="photo-bubble__loading loading">Loading Image...</div>
    }

    return (
        <section className="photo-bubble">
            < div className="photo-bubble__headshot--wrap" >
                <img className="photo-bubble__headshot--img" src={photo.src} alt={photo.alt} />
            </div>
        </section>
    );

};