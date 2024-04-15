import React from 'react';
import capImg from './cap.avif'
import './Qualification.css'

function Qualification() {
    return (
        <div class="qlf" id='qualifications'>
            <div class="container">
                <div class="qlf-items">
                    <div class="qlf-items-info">
                        <h2 class="qlf-title">My Qualification</h2>
                        <p class="qlf-text">A leading full stack programmer with a year of experience. <br /> Has the ability to learn new technologies quickly.</p>
                        <h3 class="qlf-tie">|</h3>
                    </div>
                </div>
                <div class="raw edu-exp">
                    <div class="col-6 ">
                        <div class="education border1 border-danger1">
                            <div class="edu-header">
                                <i class="fa-solid fa-trophy edu-icon"></i>
                                <h2 class="edu-title pt-1">Education</h2>
                            </div>
                            <div class="section">
                                <div class="section-year">2023-present</div>
                                <div class="section-name">Master's Degree in International Business</div>
                                <div class="section-location">Namseoul Unversity, Cheonan, South Korea</div>
                            </div>
                            <div class="section">
                                <div class="section-year">2017-2021</div>
                                <div class="section-name">Bachelor's Degree in Engineer-programmer</div>
                                <div class="section-location">Tashkent Unversity of Information Technology, Fergana, Uzbekistan</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="experience">
                            <div class="exp-header">
                                <i class="fa-solid fa-briefcase exp-icon"></i>
                                <h2 class="exp-title pt-1">Experience</h2>
                            </div>
                            <div class="section">
                                <div class="section-year">2024.03-present</div>
                                <div class="section-name">IT Time Company, Online</div>
                                <div class="section-location">Frontend developer</div>
                            </div>
                            <div class="section">
                                <div class="section-year">2021.10-2023.02</div>
                                <div class="section-name">Middle School No: 21 in Fergana, Uzbekistan</div>
                                <div class="section-location">IT Teacher</div>
                            </div>
                            <div class="section">
                                <div class="section-year">2020.02-2021.09</div>
                                <div class="section-name">"Sirius Innovation" IT company in Fergana, Uzbekistan</div>
                                <div class="section-location">Frontend developer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={capImg} alt='cap' class="qlf-img" />
            <div class="container">
                <div class="qlf-ready">
                    <div class="qlf-ready-info">
                        <div class="qlf-ready-context">
                            <h3>I am ready to take new challenges!</h3>
                            <button class="btn btn-light rounded-pill">Contact me by Email</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Qualification;