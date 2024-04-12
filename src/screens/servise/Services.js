import React from 'react';
import './Services.css'

function Services() {
    return (
        <div class="services">
            <div class="services-bg">
                <div class="container">
                    <div class="services-items">
                        <div class="services-items-info">
                            <h2 class="services-title">Services I Offer</h2>
                            <p class="services-text">Everything I offer with a detailed overview</p>
                            <h3 class="services-tie">|</h3>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card services-card  h-100">
                                <i class="fa-solid fa-chart-simple services-icon"></i>
                                <div class="card-body">
                                    <h5 class="card-title services-card-title">Dynamic</h5>
                                    <p class="card-text services-card-text">Websites don't have to be static, I love making pages come to life.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card services-card h-100">
                                <i class="fa-solid fa-tablet-screen-button services-icon"></i>
                                <div class="card-body">
                                    <h5 class="card-title services-card-title">Responsive <br /> Web Development</h5>
                                    <p class="card-text services-card-text">Web development services include both front-end and back-end responsive development.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card services-card h-100">
                                <i class="fa-solid fa-bolt services-icon"></i>
                                <div class="card-body">
                                    <h5 class="card-title services-card-title">Fast</h5>
                                    <p class="card-text services-card-text">Fast load times and lag free integrations, highest priority.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;