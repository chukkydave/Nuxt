import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FaTwitter, FaFacebook, FaMedium, FaInstagram } from 'react-icons/fa';
import {getAbout} from './Calls'

// Components
import Icon from '../../components/common/Icon';
import Headline from '../../components/common/Headline';

function Contact() {
	const [about, setAbout] = useState({});
  useEffect(() => {
    async function fetchData() {
      const code = await getAbout();
      setAbout({...code.contact});
	  console.log(code.contact)
    }

    fetchData();
  }, []);

	return (
		<section className="section section-contact section-contact-1 display-fit-screen">
			<div
				className="section-inner-sidebar overlay-image"
				style={{ backgroundImage: `url(/assets/images/contact/nonso.jpeg)` }}
			>
				<div className="social-links">
					<ul>
						<li>
							<a target="_blank" rel="noopener noreferrer" href={about.twitterLink}>
								<FaTwitter />
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href={about.facebookLink}>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href={about.IGlink}>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href={about.IGlink}>
								<FaMedium />
							</a>
						</li>
					</ul>
					<p>Follow Me:</p>
				</div>
			</div>
			<div className="section-inner-content">
				<div className="display-spacing">
					<Container className="container">
						<Headline
							title="Get In Touch"
							divider_2={true}
							subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						/>
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
										<textarea placeholder="Your Message" />
									</div>
								</Col>
								<Col xs={12} sm={12} md={12}>
									<button
										type="button"
										className="button button-block button-primary"
									>
										Send Message
									</button>
								</Col>
							</Row>
						</form>
						<Row>
							<Col xs={12} sm={12} md={6} lg={4}>
								<Icon title="PHONE" subtitle={about.phone}>
									<span className="ti-mobile" />
								</Icon>
							</Col>
							<Col xs={12} sm={12} md={6} lg={4}>
								<Icon title="EMAIL" subtitle={about.email}>
									<span className="ti-email" />
								</Icon>
							</Col>
							<Col xs={12} sm={12} md={12} lg={4}>
								<Icon title="ADDRESS" subtitle={about.address}>
									<span className="ti-direction" />
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
