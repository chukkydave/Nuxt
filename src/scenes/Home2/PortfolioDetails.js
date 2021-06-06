import React from "react";
import { Container } from "react-grid-system";
import { FaQuoteRight } from "react-icons/fa";
import './PortfolioDetails.css'
import {useLocation, Redirect} from "react-router-dom";

// Components
import Headline from "../../components/common/Headline";

function PortfolioDetails() {
    const location = useLocation()
    
    if(location.state === undefined){
        return (
            <div className="section section-details section-portfolio-details display-fit-screen">
            <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(/assets/images/portfolio/2.jpg)` }}></div>
            <div className="section-inner-content">
                <div className="display-spacing">
                    <Container>
                        <Headline title="Portfolio Details" divider_2={true} />
                        {/* <div className="el-page-content">
                            <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                            <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
                            <div className="el-blockquote">
                                <div className="el-blockquote-icon">
                                    <FaQuoteRight></FaQuoteRight>
                                </div>
                                <p>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.</p>
                                <span className="el-blockquote-author">--Ray Goforth</span>
                            </div>
                        </div> */}
                    </Container>
                </div>
            </div>
            { location.state !== undefined ? null : <Redirect to="/portfolio" /> }
        </div>
        
        )
    }else{
        let linker;
    if(location.state.link.includes('https://www.') || location.state.link.includes('https://') ){
        linker = location.state.link
    }else{
        linker = `https://www.${location.state.link}`
    }
        return (
            <div className="section section-details section-portfolio-details display-fit-screen">
                <div className="section-inner-sidebar overlay-image" style={{ backgroundImage: `url(${location.state.images[0]})` }}></div>
                <div className="section-inner-content">
                    <div className="display-spacing">
                        <Container>
                            <Headline title={location.state.title} divider_2={true} />
                            <div className="el-page-content">
                                <p>{location.state.description}</p>
                                <a target="_blank" rel="noopener noreferrer" href={linker}>Click here to view {location.state.title}</a>
                                {/* <div className="el-blockquote">
                                    <div className="el-blockquote-icon">
                                        <FaQuoteRight></FaQuoteRight>
                                    </div>
                                    <p>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.</p>
                                    <span className="el-blockquote-author">--Ray Goforth</span>
                                </div> */}
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default PortfolioDetails;
