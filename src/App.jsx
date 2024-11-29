import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel ";
import AboutUs from "./components/AboutUs";
import "./index.css";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Infrastructure from "./components/Infrastructure";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Carousel />
              <AboutUs />
              <Mission />
            </main>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
