import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaTwitter, FaGithub, FaVimeo } from "react-icons/fa";

// Components
import Icon from "../../components/common/Icon";
import Headline from "../../components/common/Headline";

function Contact() {
    return (
        <section className="section section-contact section-contact-1 display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/contact/4.jpg)` }}>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="/#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <FaVimeo />
                            </a>
                        </li>
                    </ul>
                    <p>Follow Me:</p>
                </div>
            </div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container className="container">
                        <Headline title="Get In Touch" divider_2={true} subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        <form className="form form-1">
                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="form-item">
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className="form-item">
                                        <input type="email" placeholder="Your Email" />
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <div className="form-item">
                                        <textarea placeholder="Your Message"></textarea>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12}>
                                    <button type="button" className="button button-block button-primary">
                                        Send Message
                                    </button>
                                </Col>
                            </Row>
                        </form>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Icon title="PHONE" subtitle="+123 456-789-000">
                                    <span className="ti-mobile"></span>
                                </Icon>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Icon title="EMAIL" subtitle="Example@domain.com">
                                    <span className="ti-email"></span>
                                </Icon>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4}>
                                <Icon title="ADDRESS" subtitle="California, USA">
                                    <span className="ti-direction"></span>
                                </Icon>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
}

export default Contact;
