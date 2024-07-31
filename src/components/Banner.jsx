import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="banner-carousel">
            <Carousel
                className="small-carousel"
                interval={3000}
                showThumbs={false}
                autoPlay={true}
                showStatus={false}
                infiniteLoop={true}
                dynamicHeight={false} // Ensure dynamic height is set to false
            >
                <div>
                    <video width="100%" autoPlay loop muted playsInline>
                        <source src="images/banner/Banner5.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video width="100%" autoPlay loop muted playsInline>
                        <source src="images/banner/Banner2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video width="100%" autoPlay loop muted playsInline>
                        <source src="images/banner/Banner3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video width="100%" autoPlay loop muted playsInline>
                        <source src="images/banner/Banner4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <video width="100%" autoPlay loop muted playsInline>
                        <source src="images/banner/Banner1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
