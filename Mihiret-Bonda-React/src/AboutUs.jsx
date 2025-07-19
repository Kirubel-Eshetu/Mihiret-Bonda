import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about_us">
      <h2>About Us ☀️</h2>
      <article>
        <p>
          <strong>Mihiret Bonda</strong> is a Bonda cloths and shoe store
          located in Addis Ababa, Ethiopia. The store was established on April
          20, 2023 by it's founder and Chief Executive Officer Sister Mihiret
          Dechassa Joro. Since then it has been known for providing quality
          bonda cloths and shoes to adults, youths and children with Highly
          afforadable prices.
        </p>

        <div className="ceopicture">
          <figure>
            <img
              src="Mihiret_CEO.JPG"
              alt="Sister Mihiret Dechassa Joro"
            />
            <figcaption>
              <strong>
                <i>Sister Mihiret Dechassa</i>
              </strong>
              <br />
              <i>Founder and Chief Executive Officer of Mihiret Bonda</i>
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default AboutUs;
