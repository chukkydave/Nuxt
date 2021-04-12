import React from "react";
import Slider from "react-slick";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import { Container } from "react-grid-system";

function Intro() {
    const sliderSettings = {
        dots: true,
        fade: true,
        arrows: false,
        autoplay: true,
    };
    return (
        <section className="section section-hero section-hero-3 display-fit-screen">
            <Slider className="el-slider" {...sliderSettings}>
                <div className="slide">
                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/3-1.jpg)` }}></div>
                </div>
                <div className="slide">
                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/3-2.jpg)` }}></div>
                </div>
                <div className="slide">
                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/3-3.jpg)` }}></div>
                </div>
            </Slider>
            <div className="display-center">
                <Container className="container">
                    <span className="el-shape el-shape-circle"></span>
                    <header className="el-heading el-heading-center">
                        <p className="label">
                            <span className="text-light">We're Nuxt studio</span>
                        </p>
                        <h1>
                            Our{" "}
                            <TextLoop>
                                <span>Passion.</span>
                                <span>Music. </span>
                                <span>Life.</span>
                            </TextLoop>
                            <br />
                            Music is like a dream.
                        </h1>
                    </header>
                    <div className="text-center">
                        <Link to="/home-3/service">
                            <button type="button" className="button button-lg button-primary text-light">
                                <span className="wave"></span>
                                <span className="text text-light">Our Service</span>
                            </button>
                        </Link>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
