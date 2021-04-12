import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

// Components
import Headline from "../../components/common/Headline";

const posts = [
    {
        title: "What has happened to all of the Design ideas?",
        image: "/assets/images/blog/3-1.jpg",
        date: "May 15th, 2019",
        link: "/single-post",
    },
    {
        title: "The Best Sale Marketer Of The Next Year",
        image: "/assets/images/blog/3-2.jpg",
        date: "May 18th, 2019",
        link: "/single-post",
    },
    {
        title: "What gets in the way of greate Stategy",
        image: "/assets/images/blog/3-3.jpg",
        date: "May 21h, 2019",
        link: "/single-post",
    },
    {
        title: "How to create great logo for your Business",
        image: "/assets/images/blog/3-4.jpg",
        date: "May 21th, 2019",
        link: "/single-post",
    },
    {
        title: "What gets in the way of greate Stategy",
        image: "/assets/images/blog/3-5.jpg",
        date: "May 21h, 2019",
        link: "/single-post",
    },
    {
        title: "How to create great logo for your Business",
        image: "/assets/images/blog/3-6.jpg",
        date: "May 21th, 2019",
        link: "/single-post",
    },
];

function Blog() {
    return (
        <section className="section section-blog section-blog-3 bg-gradient-side overlay-color">
            <span className="bg-color bg-dark-60"></span>
            <div className="display-spacing">
                <Container className="container">
                    <Headline title="Latest Blog Posts/News" divider_1={true} position="center" />
                    <Row className="mb--30">
                        {posts.map((item, index) => (
                            <Col key={index} xs={12} sm={12} md={12} lg={6} xl={4}>
                                <div className="post-item">
                                    <Link to={`/home-3${item.link}`}>
                                        <div className="post-image bg-primary">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                    </Link>
                                    <div className="post-content">
                                        <div className="post-data">
                                            <h4 className="post-title">
                                                <Link to={`/home-1${item.link}`}>{item.title}</Link>
                                            </h4>
                                            <div className="post-date">
                                                <i className="ti-time"></i>
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Blog;
