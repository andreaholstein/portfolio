// ---------- FXNALITY ----------
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./Bio.scss";

export default function Bio({ bioSection }) {

    return (
        <section className="bio" id="#bio" ref={bioSection}>
            <h2 className="bio__title title">Bio</h2>
            <div className="bio__bubble">
                <p className="bio__blurb">Andrea Holstein is an established stage, screen and voice actress with over 25 years of performance experience. She is the founder of <strong>Brave Girl Productions</strong>, and is currently developing her debut screenplay, <i>Clean Sweep</i>, a Canadian sports comedy about a women's curling team trying to go pro for the prize money.
                    <br></br>
                    <br></br>
                    Recent performances include: (television) <i>Children Ruin Everything</i> (CTV), <i>Orphan Black: Echoes</i> (AMC), and <i>Devil in Disguise: John Wayne Gacy</i> (Peacock), and on-stage in her critically-acclaimed starring role in <i>Puzzles</i>, by award-winning Canadian-Trinidadian playwright, Joanne John (Toronto Fringe, Alumnae Theatre).</p>
                {/* <p className="bio__blurb">Andrea Holstein is a Toronto-based full stack software engineer, with a background in React web application builds. A lover of frontend builds, Andrea is elite at flexboxing and padding a pixel-perfect mockup to life.</p> */}
            </div>
        </section>
    );
}