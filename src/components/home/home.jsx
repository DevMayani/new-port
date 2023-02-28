import React from 'react';
import './Home.css';
import icon from '../../assets/jojo-img.jpeg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={icon} alt="" className='home__img' />
                <h1 className="home__name">Daramola Josephine</h1>
                <span className="home__education">I'm a Software Engineer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>
                
                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home