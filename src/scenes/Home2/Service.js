import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";

// Components
import Icon from "../../components/common/Icon";
import Headline from "../../components/common/Headline";

const service = [
    {
        title: "Endurance",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: "ti-heart",
    },
    {
        title: "Strength",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: "ti-ruler-pencil",
    },
    {
        title: "Power Lifting",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: "ti-paint-bucket",
    },
    {
        title: "Power Yoga",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: "ti-cup",
    },
    {
        title: "Cardio",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: "ti-ruler-alt-2",
    },
    {
        title: "Climbing",
        subtitle: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
        link: "/service-details",
        icon: "ti-brush-alt",
    },
];

function Service() {
    let sliderSettings = {
        dots: true,
        speed: 500,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="section section-service section-service-5 display-fit-screen">
            <div className="display-spacing">
                <Container>
                    <Headline label="Service" title="Let's See My Services" divider_1={true} position="center" />
                    <Slider className="el-slider el-slider-plr--15" {...sliderSettings}>
                        {service.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="service-item">
                                    <div className="service-head">
                                        <Icon label={`0${index + 1}.`} title={item.title}>
                                            <span className={item.icon} />
                                        </Icon>
                                    </div>
                                    <div className="service-body">
                                        <p>{item.subtitle}</p>
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

export default Service;
