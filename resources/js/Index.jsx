import React from "react";
import { createRoot } from "react-dom/client";
import "../../public/css/general.css";
import "../../public/css/style.css";
import "../../public/css/queries.css";

export default function Index() {
    return (
        <div>
            <header className="header">
                <a href="#">
                    <img className="logo" alt="logo" src="/img/logo.svg" />
                </a>
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li>
                            <a className="main-nav-link" href="#">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link" href="#characters">
                                THE CREW
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link" href="#project">
                                EVENTS
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link" href="#project">
                                WHAT'S NEW
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link" href="#project">
                                VIRTUAL OFFICE
                            </a>
                        </li>
                        <li>
                            <a className="main-nav-link" href="#contact">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="btn-mobile-nav">
                    <ion-icon
                        className="icon-mobile-nav"
                        name="menu-outline"
                    ></ion-icon>
                    <ion-icon
                        className="icon-mobile-nav"
                        name="close-outline"
                    ></ion-icon>
                </button>
            </header>

            <section className="section-hero">
                <div className="hero">
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
                </div>
            </section>
        </div>
    );
}

if (document.getElementById("indexreact")) {
    const root = createRoot(document.getElementById("indexreact"));
    root.render(<Index />);
}
