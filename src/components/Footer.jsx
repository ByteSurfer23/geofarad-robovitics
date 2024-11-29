import React from 'react';
import foot1 from "../assets/instagram-2-2.png";
import foot2 from "../assets/facebook-2-2.png";
import foot3 from "../assets/linkedin-1-2-2.png";
import foot4 from "../assets/logo-stacked-1.png"

const Footer = () => {
  return (
    <div className="bg-[#171717] text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between lg:justify-start lg:space-x-24">
        
        <div className="flex flex-col items-center lg:items-start lg:mr-24 mb-12 lg:mb-0">
          <img src={foot4} alt="Logo" className="mb-8" />
          <div className="flex space-x-6 ml-[3rem]">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={foot2} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={foot1} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={foot3} alt="LinkedIn" className="w-7 h-7" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-center lg:text-left lg:mr-auto">
    
          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">Manufacturer / Importer</h3>
            <p className="text-gray-400 leading-relaxed">
              VJ Capacitors Pvt. Ltd.<br />
              Corporate Office:<br />
              D-24 Sector 59 Noida<br />
              201307 U.P. (India)<br />
              Corporate Identity Number (CIN):<br />
              U31908UP2013PTC056512<br />
            </p>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
            <p className="text-gray-400 leading-relaxed">
              About Us<br />
              Contact Us<br />
              Products<br />
              Infrastructure<br />
              Gallery<br />
              Downloads<br />
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us:</h3>
            <div className="rounded-lg overflow-hidden shadow-lg w-full lg:w-auto">
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.209101588116!2d-122.41941528468388!3d37.774929179758675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f1c0a4f4f%3A0xdb0ffdd58f76e131!2sVJ%20Capacitors!5e0!3m2!1sen!2sin!4v1631523499292!5m2!1sen!2sin"
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-[#1d1d1d] py-4 mt-8 text-center">
        <p className="text-white italic">© Copyright 2024 VJ Capacitors Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
