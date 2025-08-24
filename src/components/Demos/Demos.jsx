// ---------- FXNALITY ----------
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./Demos.scss";

export default function Demos() {

    return (
        <section className="demos">
            <div className="demos__bubble">
                <h2 className="demos__title--reel title">Theatrical Reel</h2>
                <iframe
                    className="demos__video demo-reel"
                    src="https://www.youtube.com/embed/GDnRQkjh5HI? si=FF7pMzk3W5mtXtEg"
                    title="Andrea Holstein's Theatrical Demo Reel"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>

                </iframe>
                <h2 className="demos__title--voice title">Voiceover Reel</h2>
                <iframe
                    className="demos__audio demo-reel"
                    title="Andrea Holstein's Commercial Voiceover Demo Reel"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1899729120%3Fsecret_token%3Ds-PuotYicyqb7&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
            </div>
        </section>
    );
}