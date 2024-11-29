import React from "react";
import "./CarouselContent.css";

const CarouselContent = ({ label, big_img, small_img, caption }) => {
  return (
    <div className="relative w-full h-full p-12 sm:p-16 flex justify-between items-center">
      {/* Text Section */}
      <div className="flex flex-col items-start text-left max-w-md text-section-carousel">
        <header className="text-white font-bold text-4xl mb-4">{label}</header>
        <p className="text-white text-lg mb-6 leading-relaxed">{caption}</p>
        <button className="bg-red-500 text-white px-6 py-3 rounded text-lg hover:bg-red-600">
          Explore
        </button>
      </div>

      {/* Image Section */}
      <div className="flex items-end space-x-4 image-section-carousel">
        <img
          src={big_img}
          alt="Big Capacitor"
          className="h-48 md:h-64 lg:h-96 w-auto object-contain rounded-lg big-image"
        />
        {small_img.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Small Capacitor ${index + 1}`}
            className="h-24 md:h-32 lg:h-48 w-auto object-contain rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselContent;
