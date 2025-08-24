// ---------- FXNALITY ----------
import { useState } from 'react'
// ---------- COMPONENTS ----------
// ---------- STYLES ----------
import "./ContactForm.scss";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "fc507a4d-e37b-46ec-b359-98218e4eca67");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="contact-form">
            <form className="contact-form__form" onSubmit={onSubmit}>
                <label className="contact-form__label contact-form__item" for="name"></label>
                <input className="contact-form__input contact-form__item" type="text" name="name" required placeholder="Name" />
                <label className="contact-form__label contact-form__item" for="email"></label>
                <input className="contact-form__input contact-form__item" type="email" name="email" required placeholder="Email" />
                <label className="contact-form__label contact-form__item" for="message"></label>
                <textarea className="contact-form__textbox contact-form__item" name="message" required placeholder="Your message here ..."></textarea>
                <button className="contact-form__button contact-form__item" type="submit">Submit Form</button>
            </form>
            <span className="contact-form__result">{result}</span>
        </section>
    );
}