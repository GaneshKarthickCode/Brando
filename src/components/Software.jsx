const Software = () => {
    return(
        <div className="full-screen-video" id='software'>
            <video width="100%" height="100%" autoPlay loop muted playsInline>
                <source src="images/banner/Software.mp4" type="video/mp4"/>
                your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Software;
