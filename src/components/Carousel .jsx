import React, { useState, useEffect } from "react";
import BG1 from "../assets/BG.png";
import BG2 from "../assets/BG2.png";
import BG3 from "../assets/BG3.png";
import BG4 from "../assets/BG4.png";
import BG5 from "../assets/BG5.png";
import cap1 from "../assets/cap1.png";
import cap2 from "../assets/cap2.png";
import cap3 from "../assets/cap3.png";
import cap4 from "../assets/cap4.png";
import power from "../assets/power.jpeg";
import power2 from "../assets/power2.png";
import power3 from "../assets/power3.png";
import pump from "../assets/pump.png";
import motor from "../assets/motor.png";
import CarouselContent from "./CarouselContent";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      src: BG1,
      alt: "First slide",
      label: "Capacitors For Fans",
      big_img: cap4,
      small_img: [cap1, cap3],
      caption:
        "Trusted by professionals for consistent, reliable performance. Our fan capacitors ensure smooth, worry-free operation for years!",
    },
    {
      src: BG2,
      alt: "Second slide",
      label: "Capacitors For AC",
      big_img: cap2,
      small_img: [cap2, cap2],
      caption:
        "Built to meet the highest standards of durability and efficiency. Trust our AC capacitors to keep your systems running at peak performance",
    },
    {
      src: BG3,
      alt: "Third slide",
      label: "Power Capacitor",
      big_img: power,
      small_img: [power2, power3],
      caption:
        "Built to handle high power demands with absolute reliability. Our power capacitors are engineered for superior performance and longevity",
    },
    {
      src: BG4,
      alt: "Fourth slide",
      label: "Submersible Pump Capacitors",
      big_img: pump,
      small_img: [cap1],
      caption:
        "Designed for extreme environments with uncompromising quality. Count on our submersible pump capacitors for performance you can trust",
    },
    {
      src: BG5,
      alt: "Fifth slide",
      label: "Motor Start & Run Capacitors",
      big_img: motor,
      small_img: [cap1],
      caption:
        "Designed to deliver stable and reliable motor performance. Our capacitors ensure a smooth start and consistent operation every time",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Start the transition
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Loop to first slide after last
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false); // End the transition once it finishes
  };

  return (
    <div className="w-screen h-screen carousel-container relative overflow-hidden">
      <div
        className={`flex transition-transform ease-in-out duration-500 ${
          isTransitioning ? "transforming" : ""
        }`}
        style={{
          transform:
            window.innerWidth < 600
              ? `translateX(-${currentIndex * window.innerWidth}px)`
              : `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd} // Trigger transition end
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen min-w-full flex-shrink-0 relative h-64 md:h-80 lg:h-96"
            style={{
              height: "100vh",
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slide.src}) center/cover fixed no-repeat`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white mt-40 lg:mt-20">
              <CarouselContent
                label={slide.label}
                big_img={slide.big_img}
                small_img={slide.small_img}
                caption={slide.caption}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 ${
              currentIndex === index ? "bg-red-700" : "bg-white"
            } cursor-pointer rounded-full`}
            onClick={() => setCurrentIndex(index)} // Set the slide manually
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
