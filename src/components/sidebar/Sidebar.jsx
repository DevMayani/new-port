import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import LightLogo from "../../assets/light-logo.svg";
import { Link } from "react-router-dom";

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";

const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/#home" className="nav__link">
                                    <RiHome2Line />
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/#about" className="nav__link">
                                    <RiUser3Line />
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/#services" className="nav__link">
                                    <RiFileList3Line />
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/#resume" className="nav__link">
                                    <RiBriefcase2Line />
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/#portfolio" className="nav__link">
                                    <RiStackLine />
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/#contact" className="nav__link">
                                    <RiChat3Line />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button
                        onClick={() => {
                            props.switchTheme();
                            showMenu(!toggle);
                        }}
                        className="nav__link footer__button"
                    >
                        {props.theme === "light" ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div
                className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
                onClick={() => showMenu(!toggle)}
            >
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
