import React from "react";
import "./Location.css";

const Location = () => {
    return (
        <section id="location">
            <h2>Location</h2>
            <h3>You may find us using the <a href="https://www.google.com/maps" rel="noreferrer">Google Maps</a> location below.</h3>
            <article>
                <div className="locationContainer">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d318.0334212626599!2d38.8129827742699!3d8.900168922604383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTQnMDAuOCJOIDM4wrA0OCc0Ny40IkU!5e1!3m2!1sen!2set!4v1749922621501!5m2!1sen!2set"
                        title="Mihiret Bonda Google Maps" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </article>
        </section>
    )
};

export default Location;