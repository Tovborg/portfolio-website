import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
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
            {/* <span className='html-tags html-top-tags'>
                <span className='html-top-tag-html'>&lt;html&gt;</span>
                <br />
                &lt;body&gt;
            </span>
            <span className='html-tags html-bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='html-bottom-tag-html'>&lt;/html&gt;</span>
            </span> */}
            <div className="page">
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
                                            <a href="https://github.com/Tovborg/LectioScraper" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faGithub} className="githubIcon" color="#4d4d4e" />
                                            </a>
                                        </span>
                                    </div>
                                    <div className="card-title">
                                        <h2>
                                            django-ecommerce
                                        </h2>
                                    </div>
                                    <div className="card-desc">
                                        Django-ecommerce is a project I made while learning Django. It has all the basic features of an e-commerce website (cart, checkout, CMS).
                                    </div>
                                    <div className="card-tech">
                                        Python / Django, Ajax, PostgreSQL
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="card">
                                    <div className="card-header">
                                        <FontAwesomeIcon icon={faFolder} className="folder" color="#4d4d4e" />
                                        <span className="external-links">
                                            <a href="https://github.com/Tovborg/LectioScraper" target="_blank" rel="noreferrer">
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
                                    LectioScraper is a PyPi package that allows you to scrape the danish school platform lectio.dk with ease. Lectio is commonly used by danish highschools
                                    </div>
                                    <div className="card-tech">
                                        Python, BeautifulSoup4, Requests
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item">
                                <div className="card">
                                    <div className="card-header">
                                        <FontAwesomeIcon icon={faFolder} className="folder" color="#4d4d4e" />
                                        <span className="external-links">
                                            <a href="https://github.com/Tovborg/LectioScraper" target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faGithub} className="githubIcon" color="#4d4d4e" />
                                            </a>
                                        </span>
                                    </div>
                                    <div className="card-title">
                                        <h2>
                                            Tensorfow rock-paper-scissors
                                        </h2>
                                    </div>
                                    <div className="card-desc">
                                        A rock-paper-scissors game made in Python using tensorflow v2.0 and OpenCV. It recognizes hand gestures and plays rock-paper-scissors against the user.
                                    </div>
                                    <div className="card-tech">
                                        Python, Tensorflow, OpenCV
                                    </div>
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