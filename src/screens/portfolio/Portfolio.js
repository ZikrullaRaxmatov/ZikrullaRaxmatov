import React from 'react';
import dw from './imgs/disinfection.jpg'
import fs from './imgs/futureskyscrapers.jpg'
import gr from './imgs/greenrestaruant.jpg'
import sf from './imgs/softfurniture.jpg'
import tg from './imgs/tillogram.jpg'
import wn from './imgs/watchnow.jpg'
import './Portfolio.css'

const portfolioData = [
    {
        "id": "1",
        "name": "Tillogram",
        "img": tg,
    },

    {
        "id": "2",
        "name": "Soft Furniture",
        "img": sf
    },

    {
        "id": "3",
        "name": "Future Skyscrapers",
        "img": fs
    },

    {
        "id": "4",
        "name": "Disinfection",
        "img": dw
    },

    {
        "id": "5",
        "name": "Green Restaruant",
        "img": gr
    },

    {
        "id": "6",
        "name": "Watch Now",
        "img": wn
    },
]

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
                <div class="row row-cols-1 row-cols-md-3 g-2 mt-lg-4 pb-2 portfolio-cards-bg">
                    {
                        portfolioData.map(item => (
                            <div class="col">
                                <div class="card portfolio-card h-100">
                                    <img src={item.img} alt='tg' class="portfolio-card-img" />
                                    <div class="portfolio-card-context">
                                        <div class="portfolio-card-context-items">
                                            <h5 class="card-title portfolio-card-title">Dynamic</h5>
                                            <p class="card-text portfolio-card-text">Websites don't have to be static, I love making pages come to life.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Portfolio;