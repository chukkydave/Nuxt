import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import Icon from "../../components/common/Icon";

function About() {
    return (
        <section className="section section-about section-about-6">
            <div className="display-full-screen">
                <div className="display-center">
                    <div className="about-me">
                        <Container className="container">
                            <div className="my-avatar">
                                <img src="/assets/images/person/2.jpg" alt="My Avatar" />
                            </div>
                            <h2>I'am Miranda Smith.</h2>
                            <h3>Your new Web Designer.</h3>
                            <button type="button" className="button button-lg button-primary">
                                <span className="wave"></span>
                                <span className="text">Download CV</span>
                            </button>
                        </Container>
                    </div>
                </div>
            </div>
            <div className="section-resume section-resume-1 my-resume">
                <Container className="container">
                    <div className="box">
                        <Row nogutter>
                            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                                <div className="inner">
                                    <div className="resume-row resume-dark">
                                        <h4 className="resume-title">Resume</h4>
                                        <ul>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Yoga Club Coach" subtitle="New York" small="(2016-2018)">
                                                            <span className="ti-paint-bucket"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Neo Club Coach" subtitle="New York" small="(2018-2019)">
                                                            <span className="ti-cup"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Fitness Trainer" subtitle="New York" small="(2019-2020)">
                                                            <span className="ti-ruler-alt-2"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                                <div className="inner">
                                    <div className="resume-row resume-dark">
                                        <h4 className="resume-title">Experience</h4>
                                        <ul>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Yoga Club Coach" subtitle="New York" small="(2016-2017)">
                                                            <span className="ti-pencil-alt"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Neo Club Coach" subtitle="New York" small="(2017-2019)">
                                                            <span className="ti-heart"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-item">
                                                    <div className="resume-head">
                                                        <Icon title="Neo Club Coach" subtitle="New York" small="(2019-2020)">
                                                            <span className="ti-paint-bucket"></span>
                                                        </Icon>
                                                    </div>
                                                    <div className="resume-body">
                                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default About;
