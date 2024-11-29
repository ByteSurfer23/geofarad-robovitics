import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row items-center p-4">
      {/* Logo and Hamburger Button */}
      <div className="flex justify-between w-full md:w-auto items-center">
        <img src={logo} alt="Logo" className="w-64" />
        {/* Hamburger Button: Show on screens less than 'md' */}
        <button className="md:hidden text-black ml-4" onClick={toggleMenu}>
          <GiHamburgerMenu size={18} />
        </button>
      </div>

      {/* Navigation Links and Contact Information */}
      <div
        className={`flex flex-col md:flex-row w-full ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-between`}
      >
        <div className="flex flex-col md:flex-row flex-grow justify-center space-x-4 md:space-x-6">
          <Link to="/" className="p-2 hover:text-red-500 md:text-xs lg:text-lg">
            Home
          </Link>
          <Link
            to="/products"
            className="p-2 hover:text-red-500 md:text-xs lg:text-lg"
          >
            Products
          </Link>
          <Link
            to="/infrastructure"
            className="p-2 hover:text-red-500 md:text-xs lg:text-lg"
          >
            Infrastructure
          </Link>
          <Link
            to="/events"
            className="p-2 hover:text-red-500 md:text-xs lg:text-lg"
          >
            Events
          </Link>
          <Link
            to="/downloads"
            className="p-2 hover:text-red-500 md:text-xs lg:text-lg"
          >
            Downloads
          </Link>
          <Link
            to="/contact"
            className="p-2 hover:text-red-500 md:text-xs lg:text-lg"
          >
            Contact Us
          </Link>
        </div>
        <div
          className={`text-center md:text-right mt-4 md:mt-0 md:text-xs lg:text-lg`}
        >
          <p>For any Query call</p>
          <p className="text-red-500">0120-2987654</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
