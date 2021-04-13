import React,{useState,useEffect} from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Components
import Headline from "../../components/common/Headline";
import { getPortfolio } from "./Calls";


// const portfolio = [
//     {
//         name: "All Worls",
//         items: [
//             {
//                 title: "Crearive Design",
//                 link: "/portfolio-details",
//                 subtitle: "Web Design",
//                 image: "/assets/images/portfolio/1-1.jpg",
//                 thumbnail: "/assets/images/portfolio/1-1.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 link: "/portfolio-details",
//                 subtitle: "Web Design",
//                 image: "/assets/images/portfolio/1-2.jpg",
//                 thumbnail: "/assets/images/portfolio/1-2.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 link: "/portfolio-details",
//                 subtitle: "Web Design",
//                 image: "/assets/images/portfolio/1-3.jpg",
//                 thumbnail: "/assets/images/portfolio/1-3.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-4.jpg",
//                 thumbnail: "/assets/images/portfolio/1-4.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-5.jpg",
//                 thumbnail: "/assets/images/portfolio/1-5.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-6.jpg",
//                 thumbnail: "/assets/images/portfolio/1-6.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-7.jpg",
//                 thumbnail: "/assets/images/portfolio/1-7.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-8.jpg",
//                 thumbnail: "/assets/images/portfolio/1-8.jpg",
//             },
//         ],
//     },
//     {
//         name: "Strength",
//         items: [
//             {
//                 title: "Crearive Design",
//                 link: "/portfolio-details",
//                 subtitle: "Web Design",
//                 image: "/assets/images/portfolio/1-1.jpg",
//                 thumbnail: "/assets/images/portfolio/1-1.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 link: "/portfolio-details",
//                 subtitle: "Web Design",
//                 image: "/assets/images/portfolio/1-2.jpg",
//                 thumbnail: "/assets/images/portfolio/1-2.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 link: "/portfolio-details",
//                 subtitle: "Web Design",
//                 image: "/assets/images/portfolio/1-3.jpg",
//                 thumbnail: "/assets/images/portfolio/1-3.jpg",
//             },
//         ],
//     },
//     {
//         name: "Endurance",
//         items: [
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-4.jpg",
//                 thumbnail: "/assets/images/portfolio/1-4.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-5.jpg",
//                 thumbnail: "/assets/images/portfolio/1-5.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-6.jpg",
//                 thumbnail: "/assets/images/portfolio/1-6.jpg",
//             },
//         ],
//     },
//     {
//         name: "Cardio",
//         items: [
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-7.jpg",
//                 thumbnail: "/assets/images/portfolio/1-7.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-8.jpg",
//                 thumbnail: "/assets/images/portfolio/1-8.jpg",
//             },
//             {
//                 title: "Crearive Design",
//                 subtitle: "Web Design",
//                 link: "/portfolio-details",
//                 image: "/assets/images/portfolio/1-9.jpg",
//                 thumbnail: "/assets/images/portfolio/1-9.jpg",
//             },
//         ],
//     },
// ];

function Portfolio() {
    const [ports, setPorts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const code = await getPortfolio();
    //   const { school,duration,description,_id } = code.contact;
      let porto = []
      code.portfolio.map((items)=>{
        return porto.push({name:items.categoryName,items:[{title:items.title,link:items.link,image:items.images[0],thumbnail:items.images[0],subtitle:items.title}]})
      })
    //   console.log("porto",porto)
      setPorts(porto);
    //   return
    }

    fetchData();
  }, []);
  if(ports.length > 0){
    return (
        <section className="section section-portfolio section-portfolio-2">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="Portfolio" title="Let's See Our portfolio" divider_1={true} position="center" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            {ports.map((category, categoryIndex) => (
                                <Tab key={categoryIndex}>{category.name}</Tab>
                            ))}
                        </TabList>
                        {ports.map((category, categoryIndex) => (
                            <TabPanel key={categoryIndex}>
                                <Row className="row-center mb--30">
                                    {category.items.map((item, index) => (
                                        <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3}>
                                            <div className="portfolio-item">
                                                <a target="_blank" rel="noopener noreferrer" href={`/home-2${item.link}`}>
                                                    <div className="portfolio-card">
                                                        <div className="image overlay-image" style={{ backgroundImage: `url(${item.image})` }} />
                                                        <div className="content">
                                                            <span>{item.title}</span>
                                                            <h3>{item.subtitle}</h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </TabPanel>
                        ))}
                    </Tabs>
                </Container>
            </div>
        </section>
    );
  }else{
    return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            background: "#fff",
          }}
        >
          <img alt="loader" src="https://i.gifer.com/3sqI.gif" />
        </div>
      );
  }
    
}

export default Portfolio;
