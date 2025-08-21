// ---------- FXNALITY ----------
// import { useState, useEffect } from 'react'
// ---------- COMPONENTS ----------
import ContactForm from "../ContactForm/ContactForm";
// ---------- STYLES ----------
import "./Footer.scss";

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__contact">
                <h2 className="footer__title title">Contact</h2>
                <div className="footer__contact-representatives"><p className="footer__contact-reps--text">Andrea is represented by <a href="https://ncatalent.com/staff-directory" className="footer__contact-reps--link">Noble Caplan Abrams</a></p></div>
                <div className="footer__contact-form-wrap">
                    <ContactForm />
                </div>
                <ul className="footer__contact-lists">
                    <li className="footer__contact-list">
                        <a href="https://www.imdb.com/name/nm10557260/" className="footer__contact-list--link footer__contact-list--item">
                            <svg className="footer__contact-list--icon footer__contact-list--item" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.8 13.768v-1.875c0-.013.001-.028.001-.044 0-.137-.02-.27-.057-.395l.002.01q-.054-.16-.32-.16t-.268.59v.16c-.026.245-.042.529-.042.817 0 .545.054 1.077.157 1.592l-.009-.051q.054.107.24.107c.007.001.015.001.023.001.102 0 .188-.067.217-.16v-.002c.035-.125.055-.27.055-.418 0-.022 0-.043-.001-.065v.003zm-4.607-3.322c.002-.025.003-.053.003-.082 0-.163-.03-.319-.086-.463l.003.009q-.08-.16-.455-.16v4.5q.375 0 .455-.187c.052-.156.083-.336.083-.523 0-.033-.001-.065-.003-.098v.004zm9.807-7.874c0-.013 0-.029 0-.045 0-.696-.287-1.326-.749-1.776l-.001-.001c-.451-.463-1.08-.75-1.777-.75-.016 0-.031 0-.047 0h.002-18.858c-.013 0-.028 0-.044 0-.697 0-1.327.287-1.777.75l-.001.001c-.463.451-.75 1.08-.75 1.777v.046-.002 18.858.043c0 .696.287 1.326.749 1.776l.001.001c.451.463 1.08.75 1.777.75h.047-.002 18.858.045c.696 0 1.326-.287 1.776-.749l.001-.001c.463-.451.75-1.08.75-1.777 0-.015 0-.03 0-.045v.002zm-18.8 6v6.858h-1.771v-6.857zm6.054 0v6.858h-1.503v-4.661l-.64 4.661h-1.128l-.64-4.554v4.554h-1.557v-6.857h2.303q.16 1.018.429 3.161l.054.054.375-3.214zm4.66 2.41v1.446c.005.129.007.279.007.431 0 .604-.042 1.198-.122 1.779l.008-.067c-.1.383-.408.675-.794.749l-.006.001c-.548.074-1.182.116-1.825.116-.168 0-.336-.003-.502-.009l.024.001h-.8v-6.857h1.5c.068-.002.148-.004.228-.004.431 0 .852.04 1.26.118l-.042-.007c.499.108.881.509.959 1.011l.001.007c.071.296.112.636.112.985 0 .049-.001.098-.002.146v-.007zm4.608.96h-.058v1.929c.002.044.004.096.004.148 0 .35-.06.686-.17.998l.006-.021c-.179.293-.498.485-.861.485-.036 0-.072-.002-.107-.006h.004c-.011 0-.023 0-.035 0-.448 0-.852-.184-1.143-.48l-.054.429h-1.608v-6.857h1.66v2.25c.272-.314.671-.511 1.117-.511.031 0 .062.001.093.003h-.004c.031-.003.066-.005.102-.005.35 0 .658.182.833.456l.002.004c.141.288.223.626.223.984 0 .069-.003.137-.009.204l.001-.009z" /></svg>
                            <h3 className="footer__contact-list--title footer__contact-list--item">IMDB</h3>
                        </a>
                    </li>
                    <li className="footer__contact-list">
                        <a href="https://www.linkedin.com/in/andrea-holstein/" className="footer__contact-list--link footer__contact-list--item">
                            <svg className="footer__contact-list--icon footer__contact-list--item" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 310 310" xml:space="preserve">
                                <g id="XMLID_801_">
                                    <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                                    <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                                    <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
                                </g>
                            </svg>
                            <h3 className="footer__contact-list--item footer__contact-list--title">LinkedIn</h3>
                        </a>
                    </li>
                </ul>
                <div className="footer__text-wrap">
                    <p className="footer__copyright">&copy; Andrea Holstein, 2025</p>
                    <p className="footer__patMyselfOnTheBack">Website designed & coded by Andrea Holstein</p>
                </div>
            </div>
        </footer>
    );
}