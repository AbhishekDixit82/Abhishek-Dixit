import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setTogglestate] = useState(1);

    const toggleTab = (index) => {
        setTogglestate(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container grid">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Technology [CSE] </h3>
                                <span className="qualification__subtitle">SKIT Jaipur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2019 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack Developer Intern</h3>
                                <span className="qualification__subtitle">AppSquadz Soft.Pvt.Ltd,Noida</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>June 2022 - Dec 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">INTERMEDIATE [12th]</h3>
                                <span className="qualification__subtitle">Shri Krishna Sr. Sec. School, Jaipur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>May - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Internship - CID Crime branch</h3>
                                <span className="qualification__subtitle">Crime branch Police Headquaters, Jaipur | Rajasthan</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>Jan 2023 - February 2023
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"} onClick={() => toggleTab(2)}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Introduction to HTML5</h3>
                                <span className="qualification__subtitle">Coursera</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>Sep 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HTML , CSS and JavaScript</h3>
                                <span className="qualification__subtitle">Coursera</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>feb 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">ReactJS</h3>
                                <span className="qualification__subtitle">HackerRank</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>April 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Qualification;