import React from 'react';
import about from '../assets/about.png';
import './Mission.css';

function Mission() {
    return (
        <section className=" mb-20 px-10">
          <h2 className="text-xl font-light Mission-title">Mission & Vision</h2>
          <h3 className="text-red-500 text-3xl font-bold mt-2">
          Enhancing power quality <br />and energy efficiency
          </h3>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start">
            <div className="relative flex justify-center w-fit">
              <img src={about} alt="About Us" className="h-48 sm:h-64 lg:h-80 object-cover max-w-full lg:max-w-lg" />
              <div className="absolute -bottom-4 -right-4 sm:-right-6 lg:-right-12 transform translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 bg-red-500 text-white p-2 sm:p-4 shadow-lg flex space-x-2 sm:space-x-4 max-w-xs">
                <div className="text-center">
                  <p className="text-xs sm:text-base">People</p>
                  <p className="text-lg sm:text-2xl font-bold">45+</p>
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-base">Factories</p>
                  <p className="text-lg sm:text-2xl font-bold">2</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start mt-8 lg:mt-0 lg:ml-8">
              <p className="text-gray-700 text-lg">
              Our mission is to provide high-quality capacitors at competitive prices, enhancing power quality and energy efficiency. Under the visionary 
leadership of founder Vineet Gupta, we continue to innovate and contribute to the industry, earning recognition and trust worldwide
              </p>
              <p className="text-gray-500 text-sm mt-2 lg:mt-4">
                <small className="text-red-500">read more</small>
              </p>
            </div>
          </div>
        </section>
      );
    }
    

export default Mission;
