import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FaTwitter, FaFacebook, FaMedium, FaInstagram, FaLinkedin, FaLink } from 'react-icons/fa';
import {getAbout} from './Calls'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap'

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

  const [state, setstate] = useState({name:'', email:'', message:'', loading:false})
  const handleChange=(event)=>{
	  setstate({
		  ...state,[event.target.name]:event.target.value
	  })
  }

  const handleSubmit = (e) => {
	e.preventDefault()
	setstate({loading:true})
	axios.post('https://justaportfolio.herokuapp.com/api/v1/feedback', state)
	  .then(function (response) {
		  console.log(response)
		  alert('Message Sent Successfully')
		  setstate({name:'',message:'', email:'',loading:false})
	  })
	  .catch(function (error) {
		  console.log(error)
		  alert('Error')
		  setstate({loading:false})
	  }) 

	}
	return (
		<section className="section section-contact section-contact-1 display-fit-screen">
			<div
				className="section-inner-sidebar overlay-image"
				style={{ backgroundImage: `url(/assets/images/contact/nonso.jpeg)` }}
			>
				<div className="social-links">
					<ul>
						<li>
							<a target="_blank" rel="noopener noreferrer" href='https://www.twitter.com/nonsoikenwa'>
								<FaTwitter />
							</a>
						</li>
						{/* <li>
							<a target="_blank" rel="noopener noreferrer" href={about.twitterLink}>
								<FaTwitter />
							</a>
						</li> */}
						{/* <li>
							<a target="_blank" rel="noopener noreferrer" href={about.facebookLink}>
								<FaFacebook />
							</a>
						</li> */}
						<li>
							<a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/nonsoikenwa'>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nonsoikenwa/">
								<FaLinkedin />
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href="http://nonsoikenwa.medium.com">
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
							// subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						/>
						<form onSubmit={handleSubmit} className="form form-1">
							<Row>
								<Col xs={12} sm={12} md={6}>
									<div className="form-item">
										<input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Your Name" />
									</div>
								</Col>
								<Col xs={12} sm={12} md={6}>
									<div className="form-item">
										<input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Your Email" />
									</div>
								</Col>
								<Col xs={12} sm={12} md={12}>
									<div className="form-item">
										<textarea name="message" value={state.message} onChange={handleChange} placeholder="Your Message" />
									</div>
								</Col>
								<Col xs={12} sm={12} md={12}>
									{state.loading ? <Spinner animation="grow" role="status" variant="primary">
										<span className="sr-only">Sending...</span>
									</Spinner> : <button
										type="submit"
										className="button button-block button-primary"
									>
										Send Message
									</button>}
									
									
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
							{/* <Col xs={12} sm={12} md={12} lg={4}>
								<Icon title="ADDRESS" subtitle={about.address}>
									<span className="ti-direction" />
								</Icon>
							</Col> */}
						</Row>
					</Container>
				</div>
			</div>
		</section>
	);
}

export default Contact;
