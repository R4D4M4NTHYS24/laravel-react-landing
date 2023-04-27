import React, { useRef } from "react";
import { createRoot } from "react-dom/client";

import { FaBars, FaTimes } from "react-icons/fa";

import "../../public/css/style.css";

const root = createRoot(document.getElementById("indexreact"));

export default function Index() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div>
            <header>
                <div className="sticky">
                    <img className="logo" alt="logo" src="/img/logo.svg" />
                    <nav ref={navRef}>
                        <a href="#">HOME</a>

                        <a href="#characters">THE CREW</a>

                        <a href="#project">EVENTS</a>

                        <a href="#project">WHAT'S NEW</a>

                        <a href="#project">VIRTUAL OFFICE</a>

                        <a href="#contact">CONTACT</a>
                        <button className="nav-btn" onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button className="nav-btn" onClick={showNavbar}>
                        <FaBars />
                    </button>
                </div>
            </header>
            <section className="section-hero">
                <video autoPlay loop muted>
                    <source
                        media="(min-width: 769px)"
                        src="/img/video/Final2.mp4"
                    />
                    <source
                        media="(max-width: 768px)"
                        src="/img/video/Final.mp4"
                    />
                </video>
            </section>
            <section className="events">
                <div class="icon-container">
                    <img src="/img/icons/Grupo54.svg" alt="My Icon" />
                </div>
                <div className="h2-container">
                    <h2>Events</h2>
                </div>

                <div className="container--4-cols">
                    <img src="/img/events/1.jpg" />
                    <img src="/img/events/2.jpg" />
                    <img src="/img/events/3.jpg" />
                    <img src="/img/events/4.jpg" />
                </div>
                <div className="cta-container">
                    <a className="cta">MORE EVENTS</a>
                </div>
                <p className="p-events">
                    Let's have fun, join us in our events. Find out more here.
                </p>
            </section>
        </div>
    );
}

root.render(<Index />);
