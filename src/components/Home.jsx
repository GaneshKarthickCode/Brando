import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Design from './Design';
import Printing from './Printing';
import Software from './Software';
import About from './About';
import Contact from './Contact';
import Logo from './Logo';
import GetInTouch from './GetInTouch';
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VisitingCard from './VisitingCard';
import ScrollToTop from './ScrollToTop';

const Home = () => {
    return (
        <>
            <div className="home-container">
                <Navbar />
                <Carousel
                    className="carousel"
                    interval={53000}
                    showThumbs={false}
                    autoPlay={true}
                    showStatus={false}
                    infiniteLoop={true}
                >
                    <div>
                        <video width="100%" height="110%" autoPlay loop muted playsInline>
                            <source src="images/banner/8.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <video width="100%" height="110%" autoPlay loop muted playsInline>
                            <source src="images/banner/7.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <video width="100%" height="110%" autoPlay loop muted playsInline>
                            <source src="images/banner/9.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <video width="100%" height="110%" autoPlay loop muted playsInline>
                            <source src="images/banner/10.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Carousel>
            </div>
            <Banner />
            <div className="scrollable-sections">
                <div id="design-section"><Design /></div>
                <div id="logo-section"><Logo /></div>
                <div id="visitingcard-section"><VisitingCard /></div>
                <div id="printing-section"><Printing /></div>
                <div id="software-section"><Software /></div>
                <div id="about-section"><About /></div>
                <div id="getintouch-section"><GetInTouch /></div>
                <div id="contact-section"><Contact /></div>
            </div>
            <ScrollToTop />
        </>
    );
};

export default Home;
