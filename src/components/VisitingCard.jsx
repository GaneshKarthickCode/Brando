const VisitingCard = () => {
    return(
        <div className="full-screen-video" id='visitingcard-section'>
            <video width="100%" height="100%" autoPlay loop muted playsInline>
                <source src="images/banner/vc.mp4" type="video/mp4"/>
                your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VisitingCard;
