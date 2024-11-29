import React, { useState } from 'react';
import './AboutUs.css';
import about_1 from "../assets/rectangle-2928-2.png";
import about_2 from "../assets/rectangle-2818.png";
import about_3 from "../assets/rectangle-2819.png";
import about_4 from "../assets/rectangle-2817.png";
import about_5 from "../assets/ellipse-1166.png";

const AboutUs = () => {
  const [isVisionVisible, setIsVisionVisible] = useState(false);

  const toggleVision = () => {
    setIsVisionVisible(!isVisionVisible);
  };

  return (
    <>
      <h2 className="about-section-title">About Us</h2>
      <div className="about-section">
        <div className="images-section">
          <div className="image-grid">
            <img src={about_1} alt="Image 1" className="image-item" />
            <img src={about_2} alt="Image 2" className="image-item" />
            <img src={about_3} alt="Image 3" className="image-item" />
            <img src={about_4} alt="Image 4" className="image-item" />
          </div>
        </div>
        <div className="text-section">
          <h1 className="headline">We’re Creating Only Exceptional Quality Capacitors</h1>
          <p className="description">
            V.J. Capacitors Pvt Ltd, operating under the esteemed brand name GEOFARAD, specializes in manufacturing a diverse range of AC capacitors. Our advanced production facility in Noida, Uttar Pradesh, features state-of-the-art, fully automated machinery, ensuring stringent quality control. With a team of seasoned marketing professionals and engineers well-versed in the latest technology, we deliver top-notch products known for their reliability and efficiency.
          </p>
          
          {/* Conditionally render the vision text */}
          {isVisionVisible && (
            <p className="vision">
              <strong>Vision :</strong><br />
              Our vision is to be a global leader in capacitor technology, delivering innovative and sustainable solutions to set the standard in the industry through continuous improvement and a commitment to excellence.
            </p>
          )}
          
          <div className="founder-section">
            <img src={about_5} alt="Founder" className="founder-image" />
            <div className="founder-text">
              <h2>Vineet Gupta</h2>
              <p>Founder</p>
            </div>
          </div>
          
          {/* Button to toggle read more/less */}
          <button className="read-more-button" onClick={toggleVision}>
            {isVisionVisible ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
