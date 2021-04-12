import React, { useState } from "react";
import { useRouteMatch, NavLink, Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

// Components
import DemoOptions from "../../components/common/DemoOptions";

const links = [
    {
        title: "Intro",
        path: "/intro",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Service",
        path: "/service",
    },
    {
        title: "Portfolio",
        path: "/portfolio",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

function Header() {
    let { url } = useRouteMatch();

    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplaySidenav(!displaySidenav);
    };

    return (
        <>
            <header className="app-header app-header-4">
                <div className="header-logo">
                    <Link to={url}>NUXT</Link>
                </div>
                <button className="button button-menu" onClick={(e) => handleClick(e)}>
                    <span></span>
                </button>
                <ul className="header-nav">
                    {links.map((item, index) => (
                        <li key={index}>
                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                <span className="count">0{index + 1}</span>
                                <span className="anchor">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </header>
            <div className={`app-sidenav ${displaySidenav && "active"}`}>
                <div className="sidenav-menu">
                    <div className="logo">
                        <Link to={url}>NUXT</Link>
                    </div>
                    <button className="button" onClick={(e) => handleClick(e)}></button>
                    <ul className="sidenav-nav">
                        {links.map((item, index) => (
                            <li key={index} onClick={(e) => handleClick(e)}>
                                <NavLink to={`${url}${item.path}`} activeClassName="active">
                                    <span className="anchor">{item.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="sidenav-links">
                        <ul>
                            <li>
                                <a href="!#">
                                    <FaTwitter className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <FaGithub className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <FaInstagram className="icon" />
                                </a>
                            </li>
                        </ul>
                        <p>Follow Me</p>
                    </div>
                </div>
                <span className="sidenav-close" />
            </div>
            <DemoOptions />
        </>
    );
}

export default Header;
