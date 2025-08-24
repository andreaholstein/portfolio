// ---------- FXNALITY ----------
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./NavLinks.scss";

export default function NavLinks({ bioSection, projectsSection, contactSection, scrollToSection, setIsPageMenuVisible, isPageMenuVisible }) {
    // V1: all one page app
    // V2: add a "back to top" either in NavLinks or elsewhere on page

    return (
        <section className="nav">
            <ul className="nav__list">
                <li className="nav__link" onClick={() => { scrollToSection(bioSection); setIsPageMenuVisible(!isPageMenuVisible); }}><p className="nav__link-text">Bio</p></li>
                <li className="nav__link" onClick={() => { scrollToSection(projectsSection); setIsPageMenuVisible(!isPageMenuVisible); }}><p className="nav__link-text">Projects</p></li>
                <li className="nav__link" onClick={() => { scrollToSection(contactSection); setIsPageMenuVisible(!isPageMenuVisible); }}><p className="nav__link-text">Contact</p></li>
            </ul>
        </section>
    );
}
