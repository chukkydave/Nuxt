import React from "react";
import Slider from "react-slick";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import { Container, Hidden, Row, Col } from "react-grid-system";

function Intro() {
    const sliderSettings = {
        dots: true,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        autoplay: true,
        speed: 500
    };
    return (
        <section className="section section-hero section-hero-4 display-fit-screen">
            <div className="display-center">
                <Container>
                    <Col md={7}>
                        <header className="el-heading">
                            <p className="label">
                                <span className="text-light">Don't Quit Your Day Dream.</span>
                            </p>
                            <h1>
                                John Woo is a<br />
                                <TextLoop>
                                    <span>Documentary Filmmaker</span>
                                    <span>Traveller Blogger</span>
                                    <span>Documentary Photographer</span>
                                </TextLoop>
                            </h1>
                            <p>
                                Hello, i'am John Woo a filmmaker base in New York since 2008,<br />
                                and i'am very passionate and dedicated to my work.
                            </p>
                        </header>
                        <Link to="/home-4/portfolio">
                            <button type="button" className="button button-lg button-primary button-block">
                                <span className="wave"></span>
                                <span className="text text-light">Let's See My Portfolio</span>
                            </button>
                        </Link>
                    </Col>
                </Container>
            </div>
            <Row nogutter className="row-0">
                <Hidden xs sm md>
                    <Col></Col>
                </Hidden>
                <Col md={6}>
                    <Slider className="el-slider" {...sliderSettings}>
                        <div className="slide">
                            <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/4-1.jpg)` }}></div>
                        </div>
                        <div className="slide">
                            <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/4-2.jpg)` }}></div>
                        </div>
                        <div className="slide">
                            <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/4-3.jpg)` }}></div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </section>
    );
}

export default Intro;
