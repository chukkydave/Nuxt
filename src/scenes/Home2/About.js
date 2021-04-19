import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-grid-system";
import {getExperience, getEducation} from "./Calls"
import moment from 'moment'

// Components
import Icon from "../../components/common/Icon";

function About() {
     const [education, setEducation] = useState([]);
     const [experience, setExperience] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const code = await getExperience();
    //   const { school,duration,description,_id } = code.contact;
      setExperience(code.experience);
      return
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchEdu() {
      const edu = await getEducation();
    //   const { PlaceOfWork,duration,description,_id } = edu.contact;
      setEducation(edu.education);
      return
    }

    fetchEdu();
  }, []);

  if(experience.length > 0 && education.length > 0){
    return (
        <section className="section section-about section-about-2">
            <div className="section-resume section-resume-1 my-resume">
                <div className="display-spacing">
                    <Container className="container">
                        <div className="box">
                            <Row nogutter>
                                <Col xs={12} sm={12} md={12} lg={12} xl={6} className="bg-light">
                                    <div className="inner">
                                        <div className="resume-row resume-dark">
                                            <h4 className="resume-title">Education</h4>
                                            <ul>
												{education.map((item) => (
                          // let dt = item.duration.split('-')
                          // let start = `${dt[0]}-${dt[1]}`;
                          // let end = `${dt[2]}-${dt[3]}`;
                          // let starter = moment(start, 'YYYY-MM').format('MMM YYYY');
                          // let ender = moment(end, 'YYYY-MM').format('MMM YYYY');}
													<li key={item._id}>
														<div className="resume-item">
															<div className="resume-head">
																<Icon
																	title={item.school}
																	subtitle="Duration:"
																	small={item.duration}
																>
																	<span className="ti-medall" />
																</Icon>
															</div>
															<div className="resume-body">
																<p>{item.description}</p>
															</div>
														</div>
													</li>
												))}
											</ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={6} className="bg-light">
                                    <div className="inner">
                                        <div className="resume-row resume-dark">
                                            <h4 className="resume-title">Experience</h4>
                                            <ul>
												{experience.map((item) => (
													<li key={item._id}>
														<div className="resume-item">
															<div className="resume-head">
																<Icon
																	title={item.PlaceOfWork}
																	subtitle="Duration:"
																	className="el-icon-dark"
																	small={item.duration}
																>
																	<span className="ti-briefcase" />
																</Icon>
															</div>
															<div className="resume-body">
																<p>{item.description}</p>
															</div>
														</div>
													</li>
												))}
											</ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
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

export default About;
