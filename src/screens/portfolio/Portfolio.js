import React from 'react';
import './Portfolio.css'

function Portfolio() {
    return (
        <div class="portfolio">
            <div class="container">
                <div class="portfolio-items">
                    <div class="portfolio-items-info">
                        <h2 class="portfolio-title">My Portfolio</h2>
                        <p class="portfolio-text">Below you can see some projects I've been working recently.</p>
                        <h3 class="portfolio-tie">|</h3>
                    </div>
                </div>
                <div class="portfolio-types">
                    <ul class="portfolio-types-items">
                        <li class="btn rounded-pill portfolio-types-item portfolio-active">All</li>
                        <li class="btn rounded-pill portfolio-types-item1">|</li>
                        <li class="btn rounded-pill portfolio-types-item">Web Sites</li>
                        <li class="btn rounded-pill portfolio-types-item1">|</li>
                        <li class="btn rounded-pill portfolio-types-item">Web Apps</li>
                        <li class="btn rounded-pill portfolio-types-item1">|</li>
                        <li class="btn rounded-pill portfolio-types-item">Mobile Apps</li>
                    </ul>
                </div>
                <div class="row row-cols-1 row-cols-md-4 g-2">
                    <div class="col">
                        <div class="card portfolio-card  h-100">
                            <i class="fa-solid fa-chart-simple portfolio-icon"></i>
                            <div class="card-body">
                                <h5 class="card-title portfolio-card-title">Dynamic</h5>
                                <p class="card-text portfolio-card-text">Websites don't have to be static, I love making pages come to life.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card portfolio-card h-100">
                            <i class="fa-solid fa-tablet-screen-button portfolio-icon"></i>
                            <div class="card-body">
                                <h5 class="card-title portfolio-card-title">Responsive <br /> Web Development</h5>
                                <p class="card-text portfolio-card-text">Web development portfolio include both front-end and back-end responsive development.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card portfolio-card h-100">
                            <i class="fa-solid fa-bolt portfolio-icon"></i>
                            <div class="card-body">
                                <h5 class="card-title portfolio-card-title">Fast</h5>
                                <p class="card-text portfolio-card-text">Fast load times and lag free integrations, highest priority.</p>
                            </div>
                        </div><div class="col">
                    </div>
                    </div>
                    <div class="col">
                        <div class="card portfolio-card h-100">
                            <i class="fa-solid fa-bolt portfolio-icon"></i>
                            <div class="card-body">
                                <h5 class="card-title portfolio-card-title">Fast</h5>
                                <p class="card-text portfolio-card-text">Fast load times and lag free integrations, highest priority.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;