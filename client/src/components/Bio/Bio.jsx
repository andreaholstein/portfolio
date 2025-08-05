// ---------- FXNALITY ----------
// import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------

// ---------- STYLES ----------
import "./Bio.scss";

export default function Bio() {

    return (
        <section className="bio">
            <h2 className="bio__title title">Bio</h2>
            <div className="bio__bubble">
                <p className="bio__blurb">Andrea Holstein is a Canadian actress and writer. Based out of Toronto.</p>
                {/* <p className="bio__blurb">Andrea Holstein is a Toronto-based full stack software engineer, with a background in React web application builds. A lover of frontend builds, Andrea is elite at flexboxing and padding a pixel-perfect mockup to life.</p> */}
            </div>
        </section>
    );
}