import React from 'react';
import './hero.css';
import icon from '../../assets/jojo-img.jpeg';
import iconmain from '../../assets/jojonews.JPG';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={iconmain} alt="" className='home__img' />
                <h1 className="home__name">Arobani Josephine</h1>
                <span className="home__education">I'm a Web Developer</span>

                <HeaderSocials />
                <div>
                <a href="#contact" className="btn"> Contact Me</a>
                </div>
                
                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home