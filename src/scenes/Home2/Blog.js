import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Container } from "react-grid-system";

// Components
import Headline from "../../components/common/Headline";

const posts = [
    {
        title: "What has happened to all of the Design ideas?",
        image: "/assets/images/blog/1-1.jpg",
        date: "May 15th, 2019",
        link: "/single-post",
    },
    {
        title: "The Best Sale Marketer Of The Next Year",
        image: "/assets/images/blog/1-2.jpg",
        date: "May 18th, 2019",
        link: "/single-post",
    },
    {
        title: "What gets in the way of greate Stategy",
        image: "/assets/images/blog/1-3.jpg",
        date: "May 21h, 2019",
        link: "/single-post",
    },
    {
        title: "How to create great logo for your Business",
        image: "/assets/images/blog/1-4.jpg",
        date: "May 21th, 2019",
        link: "/single-post",
    },
];

function Blog() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: 30,
        draggable: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section section-blog section-blog-2">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Blog" title="Latest Blog Posts/News" divider_1={true} position="center" />
                    <Slider className="el-slider el-slider-plr--15" {...sliderSettings}>
                        {posts.map((item, index) => (
                            <div key={index} className="post-item">
                                <Link to={`/home-2${item.link}`}>
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
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Blog;
