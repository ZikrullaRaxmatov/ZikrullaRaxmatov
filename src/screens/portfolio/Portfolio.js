// import React, { useState } from 'react';
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
        "desc": "Instagram clone",
        "context": "Full-stack MERN Web App (MongoDB, ExpressJS, ReactJS, NodeJs)",
        "img": tg,
        "demo": "https://github.com/ZikrullaRaxmatov/mern-sm-server",
        "src": "https://github.com/ZikrullaRaxmatov/mern-sm-client",
        "type": "webapp"
    },

    {
        "id": "2",
        "name": "Soft Furniture",
        "desc": "Online Shopping",
        "context": "Responsive ReactJS Web App",
        "img": sf,
        "demo": "https://soft-furniture.netlify.app/",
        "src": "https://github.com/ZikrullaRaxmatov/soft-furniture",
        "type": "webapp"
    },

    {
        "id": "3",
        "name": "Future Skyscrapers",
        "desc": "Web site",
        "context": "Responsive ReactJS Web site",
        "img": fs,
        "demo": "https://future-skyscrapers.netlify.app/",
        "src": "https://github.com/ZikrullaRaxmatov/future-skyscrapers",
        "type": "website"
    },

    {
        "id": "4",
        "name": "Disinfection",
        "desc": "Web site",
        "context": "Responsive ReactJS Web site",
        "img": dw,
        "demo": "https://disinfection-world.netlify.app/",
        "src": "https://github.com/ZikrullaRaxmatov/disinfection",
        "type": "website"
    },

    {
        "id": "5",
        "name": "Green Restaruant",
        "desc": "Web App for Restaruant",
        "context": "Responsive ReactJS Web App",
        "img": gr,
        "demo": "https://greenn-restaurant.netlify.app/",
        "src": "https://github.com/ZikrullaRaxmatov/delicious-food-by-spa",
        "type": "webapp"
    },

    {
        "id": "6",
        "name": "Watch Now",
        "desc": "Online searching",
        "context": "ReactJS Web site",
        "img": wn,
        "demo": "https://watchh-now.netlify.app/",
        "src": "https://github.com/ZikrullaRaxmatov/Watch-now",
        "type": "website"
    },
]

function Portfolio() {

    // const [newType, setNewType] = useState([])

    const filterAll = () => {
        // setNewType(...newType, portfolioData)
        // console.log(newType);
    }

    const filterSites = () => {
        // const newSites = portfolioData.filter(s => s.type === "website")
        // setNewType(...newType, newSites)
        // console.log(newType);
    }

    const filterApps = () => {
        // const newApps = portfolioData.filter(s => s.type === "webapp")
        // setNewType(...newType, newApps)
        // console.log(newType);
    }

    const filterMobile = () => {
        // const newMobile = portfolioData.filter(s => s.type === "mobile")
        // setNewType(...newType, newMobile)
        // console.log(newType);
    }



    return (
        <div class="portfolio" id='projects' >
            <div class="container">
                <div class="portfolio-items">
                    <div class="portfolio-items-info">
                        <h2 class="portfolio-title">My Projects & Portfolio</h2>
                        <p class="portfolio-text">Below you can see some projects I've been working recently.</p>
                        <h3 class="portfolio-tie">|</h3>
                    </div>
                </div>
                <div class="portfolio-types">
                    <ul class="portfolio-types-items">
                        <li class="btn rounded-pill portfolio-types-item portfolio-active" onClick={() => filterAll()}>All</li>
                        <li class="btn rounded-pill portfolio-types-item1">|</li>
                        <li class="btn rounded-pill portfolio-types-item" onClick={() => filterSites()} >Web Sites</li>
                        <li class="btn rounded-pill portfolio-types-item1">|</li>
                        <li class="btn rounded-pill portfolio-types-item" onClick={() => filterApps()}>Web Apps</li>
                        <li class="btn rounded-pill portfolio-types-item1">|</li>
                        <li class="btn rounded-pill portfolio-types-item" onClick={() => filterMobile()}>Mobile Apps</li>
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
                                            <h6 class="card-title portfolio-card-title">{item.name}</h6>
                                            <text class="card-text portfolio-card-text">{item.desc}</text>
                                            <p class="card-text portfolio-card-text2">{item.context} </p>
                                            <a rel="noreferrer" href={item.demo} target="_blank" class="portfolio-card-link" >Demo |</a>
                                            <a rel="noreferrer" href={item.src} target="_blank" class="portfolio-card-link" >Source</a>
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