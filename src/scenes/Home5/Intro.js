import React from "react";
import TextLoop from "react-text-loop";
import { Container, Row, Col } from "react-grid-system";

function Intro() {
    return (
        <section className="section-hero section-hero-5 display-fit-screen overlay-image" style={{ backgroundImage: `url(/assets/images/hero/5-1.jpg)` }}>
            <div className="display-center">
                <Container className="container">
                    <Row>
                        <Col md={6}>
                            <div className="el-heading-line">
                                <header className="el-heading el-heading-side">
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Intro;
