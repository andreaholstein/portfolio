// ---------- FXNALITY ----------
import { useState, useRef } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// ---------- COMPONENTS ----------
import Header from './components/Header/Header';
// ---------- PAGES ----------
import HomePage from './pages/HomePage/HomePage';
// ---------- STYLES ----------
import './App.scss';
import './styles/global.scss';

function App() {
  // HAMBURGER MENU OPTIONS PANEL
  const [isPageMenuVisible, setIsPageMenuVisible] = useState(false);

  // SCROLL FROM NAV TO SECTION
  const bioSection = useRef(null)
  const projectsSection = useRef(null)
  const contactSection = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // CHANGE HEADER BACKGROUND ON SCROLL
  // const changeHeader = () => {
  //   window.addEventListener("scroll", () => {
  //     let scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  //     document.documentElement.style.setProperty("--header-color", `rgb(${255 - scrollPosition * 255}, ${100 + scrollPosition * 100}, ${scrollPosition * 255})`);
  //   });
  // };

  return (
    <>
      <Header
        isPageMenuVisible={isPageMenuVisible}
        setIsPageMenuVisible={setIsPageMenuVisible}
        bioSection={bioSection}
        projectsSection={projectsSection}
        contactSection={contactSection}
        scrollToSection={scrollToSection}
      />
      <HomePage bioSection={bioSection}
        projectsSection={projectsSection}
        contactSection={contactSection} />
    </>
  )
}

export default App
