import React from "react";
import "./Main.css";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Products from "./Products";
import Contact from "./Contact";
import Location from "./Location";

const Main = () => {
    return(
        <main>
            <AboutUs />
            <Team />
            <Products />
            <Contact />
            <Location />
        </main>
    )
}

export default Main;