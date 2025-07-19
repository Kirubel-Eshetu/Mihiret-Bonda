import React from "react";
import './Team.css';

const Team = () => {
    return (
        <div>
            <h3>Our Team </h3>
                <article id="team">
                    <div className="teamcontainer">
                        <div className="ceopictureteam">
                            <figure>
                                <img src="Mihiret_CEO_team.jpg" alt="Sister Mihiret Dechassa Joro" />
                                <figcaption><strong><i>Sister Mihiret Dechassa</i></strong><br />
                                    <i>Founder and Chief Executive Officer</i><br />
                                    April 20, 2023 - Present
                                </figcaption>
                            </figure>
                        </div>

                        <div className="csopicture">
                            <figure>
                                <img src="Bezawit_CSO_team.jpg" alt="Bezawit Bekele" />
                                <figcaption><strong><i>Bezawit Bekele</i></strong><br />
                                    <i>Chief Sales Officer</i><br />
                                    September 01, 2024 - Present
                                </figcaption>
                            </figure>
                        </div>

                        <div className="ctopicture">
                            <figure>
                                <img src="Kirubel_CTO_team.jpg" alt="Kirubel Eshetu" />
                                <figcaption><strong><i>Kirubel Eshetu</i></strong><br />
                                    <i>Chief Technology Officer</i><br />
                                    April 20, 2023 - Present
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </article>
        </div>
    )
};

export default Team;