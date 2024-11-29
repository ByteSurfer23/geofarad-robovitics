import React from "react";
import "./Gallery.css";
import frame from "../assets/frame.png";
import gallery_1 from "../assets/gallery_1.png";
import gallery_2 from "../assets/gallery_2.png";
import gallery_3 from "../assets/gallery_3.png";

const Gallery = () => {
  return (
    <div className="gallery-section">
      <div className="frame">
        <img src={frame} alt="" />
      </div>
      <div className="gallery-content">
        <h2 className="gallery-heading ">
          <span>Gallery</span>
        </h2>
        <h1 className="gallery-caption ">
          The pulse of technology, showcased here
        </h1>
        <p>
          Step inside the engine room of excellence—where every capacitor is
          crafted with precision and care. Beyond the machines, it's the
          dedication of our skilled workforce that drives the quality you can
          trust. From concept to creation, witness the heart of what makes our
          products stand out.
        </p>
        <div className="btn-container">
          <button className="btn-round">←</button>
          <button className="btn-round">→</button>
        </div>
      </div>
      <div className="gallery-images">
        <img src={gallery_1} className="gallery-img" />
        <img src={gallery_2} className="gallery-img" />
        <img src={gallery_3} className="gallery-img" />
      </div>
    </div>
  );
};

export default Gallery;
