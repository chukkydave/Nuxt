import React from "react";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

function Intro() {
    return (
        <section className="section-hero section-hero-2 display-fit-screen overlay-image" style={{ backgroundImage: `url(/assets/images/hero/2-1.jpg)` }}>
            <div className="display-center">
                <Container className="container">
                    <Row>
                        <Col md={6}></Col>
                        <Col md={6}>
                            <header className="el-heading el-heading-side">
                                <p className="label">
                                    <span>Hello. I'm John Doe.</span>
                                </p>
                                <h1>
                                    I'm a{" "}
                                    <TextLoop>
                                        <span>UI/UX Designer </span>
                                        <span>Web Developer </span>
                                        <span>Web Designer </span>
                                    </TextLoop>
                                    <br />
                                    Based in Los Angeles.
                                </h1>
                            </header>
                            <Link to="/home-2/about">
                                <button type="button" className="button button-lg button-primary">
                                    <span className="wave"></span>
                                    <span className="text text-dark">Read More</span>
                                </button>
                            </Link>
                            <Link to="/home-2/portfolio">
                                <button type="button" className="button button-lg text-primary">
                                    <span className="text">My Portfolio</span>
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
