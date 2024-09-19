import React from 'react';
import './About.css';
import icon from '../../assets/jojonews.JPG';
import Cv from '../../assets/arobani.pdf'
// import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Cv, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
            <img src={icon} alt="" className='home__imgs' />

                <div className="about__data grid">
                    <div className="about__info">
                        <span className="second-word-formatting">
                            Hello!!!<br /> I am  Arobani Josephine, I am a Frontend developer, I build websites, web applications.<br /> I am smart enough to handle anything related to design and development.<br /><br />
                            Fastforward to today, and I can honestly say it's been a beautiful journery and I hope to grow even further as Software Engineer. My current focus these days
                            is on expanidng my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </span>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Next.js</li>
                        </ul>
                        <button className="btns" onClick={downloadResume}>Download CV</button>
                    </div>

                    
                </div>
            </div>

            {/* <AboutBox /> */}
        </section>
    )
}

export default About