import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [activeFilter, setActiveFilter] = useState(0);
    const filterItems = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category.includes(categoryItem);
        });

        setItems(updatedItems);
    };

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">Recent Projects</h2>

           

            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, category, url, pageLink, repositoryUrl } = elem;

                    return (
                        <motion.div
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="portfolio__card"
                            key={id}>
                           <Link to={pageLink}>
                           <div className="portfolio__thumbnail">
                                <img src={image} alt="" className="portfolio__img" />
                                <div className="portfolio__mask"></div>
                            </div>

                            <span className="portfolio__category">{category.join(', ')}</span>
                            <h3 className="portfolio__title">{title}</h3>
                            {/* <a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
                                <RiLink className="portfolio__button-icon" />
                            </a> */}
                           </Link>
                          
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
