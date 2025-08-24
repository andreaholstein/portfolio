// ---------- FXNALITY ----------
import { useState, useEffect } from 'react';
// ---------- COMPONENTS ----------
import NavLinks from '../NavLinks/NavLinks';
// ---------- STYLES ----------
import "./Header.scss";

export default function Header({ isPageMenuVisible, setIsPageMenuVisible, bioSection, projectsSection, contactSection, scrollToSection }) {

    // OPAQUE HEADER ON SCROLL - credit: https://codesandbox.io/p/sandbox/header-change-color-onscrolly-2z3vt
    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("header--sticky")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <section className={header}>
            <nav className="header__nav">
                <div className="header__horiz-wrap">
                    <h1 className="header__title"><span className="header__span--1">Andrea</span><span className="header__span--2">Holstein</span> </h1>
                    <button onClick={() => {
                        setIsPageMenuVisible(!isPageMenuVisible)
                    }}
                        className={`header__hamburger ${isPageMenuVisible ? "header__hamburger--active" : ""
                            }`}><svg className="header__hamburger-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" />
                        </svg></button>
                </div>
                <div className="header__nav-menu">
                    {isPageMenuVisible && (
                        <NavLinks bioSection={bioSection}
                            projectsSection={projectsSection}
                            contactSection={contactSection}
                            scrollToSection={scrollToSection}
                            setIsPageMenuVisible={setIsPageMenuVisible}
                            isPageMenuVisible={isPageMenuVisible} />
                    )}
                </div>
            </nav>

        </section >
    );
}