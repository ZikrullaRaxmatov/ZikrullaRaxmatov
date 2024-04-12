import React from 'react';
import homeImg from './home_laptop.avif'
import './Home.css'


function Home() {
    return (
        <div class="home">
            <img src={homeImg} alt='home' clas="home-img" />
        </div>
    );
}

export default Home;