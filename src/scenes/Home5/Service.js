import React from "react";
import { Container, Row, Col } from "react-grid-system";

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
];

function Service() {
    return (
        <section className="section section-service section-service-5">
            <div className="display-spacing">
                <Container>
                    <Headline label="Service" title="Let's See My Services" divider_1={true} position="center" />
                    <Row className="mb--30">
                        {service.map((item, index) => (
                            <Col key={index} sm={6} md={6} lg={4} xl={3}>
                                <div className="box mb-30">
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
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Service;
