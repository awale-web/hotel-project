import React from "react";
import "../style/About.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Background Video Section */}
      <div className="video-section">
        <video autoPlay muted loop className="background-video">
          <source src="/hotel-tour.mov" type="video/mp4" />
          <source src="/hotel-tour.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Content Section */}
      <div className="text-section">
        <h1>About Our Hotel</h1>
        <p>
          Experience luxury and comfort in our world-class hotel. We provide
          exceptional service to make your stay memorable.
        </p>

        {/* Mission & Vision Section */}
        <div className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To provide an exceptional and luxurious hospitality experience,
              ensuring comfort and satisfaction for every guest.
            </p>
          </div>

          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be the leading hotel of choice, known for world-class service,
              elegance, and unforgettable experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;