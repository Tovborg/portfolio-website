import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => {
    const [letterClass, setLetterClass] =useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={20} 
                    />
                </h1>
                <div className="portfolio-container">
                    <div className="row">
                        <div className="portfolio-item">
                            <div className="card">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faFolder} className="folder" color="#4d4d4e" />
                                    <span className="external-links">
                                        <a href="https://github.com/Tovborg/LectioScraper" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="githubIcon" color="#4d4d4e" />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faLink} className="linkIcon" color="#4d4d4e" />
                                        </a>
                                    </span>
                                </div>
                                <div className="card-title">
                                    <h2>
                                        LectioScraper
                                    </h2>
                                </div>
                                <div className="card-desc">
                                    LectioScraper is a PyPi package that allows you to scrape your lectio.dk with ease
                                </div>
                                <div className="card-tech">
                                    Python / Django, BeautifulSoup, Requests
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="card">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faFolder} className="folder" color="#4d4d4e" />
                                    <span className="external-links">
                                        <a href="https://github.com/Tovborg/LectioScraper" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="githubIcon" color="#4d4d4e" />
                                        </a>
                                    </span>
                                </div>
                                <div className="card-title">
                                    <h2>
                                        LectioScraper
                                    </h2>
                                </div>
                                <div className="card-desc">
                                    LectioScraper is a PyPi package that allows you to scrape your lectio.dk with ease
                                </div>
                                <div className="card-tech">
                                    Python / Django, BeautifulSoup, Requests
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <div className="card">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faFolder} className="folder" color="#4d4d4e" />
                                    <span className="external-links">
                                        <a href="https://github.com/Tovborg/LectioScraper" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="githubIcon" color="#4d4d4e" />
                                        </a>
                                    </span>
                                </div>
                                <div className="card-title">
                                    <h2>
                                        LectioScraper
                                    </h2>
                                </div>
                                <div className="card-desc">
                                    LectioScraper is a PyPi package that allows you to scrape your lectio.dk with ease
                                </div>
                                <div className="card-tech">
                                    Python / Django, BeautifulSoup, Requests
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio