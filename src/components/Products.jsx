import React, { useState } from "react";
import "./Products.css";
import world from "../assets/world_bg.png";
import sub_cap_cover from "../assets/sub_cap_cover.png";
import fan_cap_cover from "../assets/fan_cap_cover.png";
import ac_cap_cover from "../assets/ac_cap_cover.png";
import motor_start_cover from "../assets/motor_start_cover.png";
import motor_run_cover from "../assets/motor_run_cover.png";
import power_cap_cover from "../assets/power_cap_cover.png";
import power_1 from "../assets/power_1.png";
import power_2 from "../assets/power_2.png";
import power_3 from "../assets/power_3.png";
import ac_1 from "../assets/ac_1.png";
import sub_1 from "../assets/sub_1.png";
import sub_2 from "../assets/sub_2.png";
import fan_1 from "../assets/fan_1.png";
import fan_2 from "../assets/fan_2.png";
import motor_start_1 from "../assets/sub_1.png";
import motor_run_1 from "../assets/motor_run_1.png";

const Products = () => {
  const all = [
    sub_cap_cover,
    fan_cap_cover,
    ac_cap_cover,
    motor_start_cover,
    motor_run_cover,
    power_cap_cover,
  ];
  const power = [power_1, power_2, power_3];
  const ac = [ac_1];
  const sub = [sub_1, sub_2];
  const fan = [fan_1, fan_2];
  const start = [motor_start_1];
  const run = [motor_run_1];
  const descriptions = [
    `Power capacitors are essential components in electrical systems, 
designed to store and release electrical energy. Power capacitors are 
commonly used in industrial applications to correct power factor, 
which optimizes the usage of electrical power and can lead to 
cost savings on energy bills`,
    `Power capacitors are essential components in electrical systems, 
designed to store and release electrical energy. Power capacitors are 
commonly used in industrial applications to correct power factor, 
which optimizes the usage of electrical power and can lead to 
cost savings on energy bills`,
    `Power capacitors are essential components in electrical systems, 
designed to store and release electrical energy. Power capacitors are 
commonly used in industrial applications to correct power factor, 
which optimizes the usage of electrical power and can lead to 
cost savings on energy bills`,
    `Submersible pump capacitors, often known as start capacitors or run capacitors, help in achieving the required torque to start the motor and keep it running smoothly. They are typically constructed with durable materials like metalized polypropylene film, which ensures longevity and reliability even in demanding underwater environments.`,
    `Fan capacitors are critical components in electric fans, responsible for starting and running the fan motor efficiently. These capacitors store and release electrical energy, providing the necessary phase shift to the motor windings to initiate rotation. By creating a phase difference between the current. `,
    `Motor start capacitors are essential components used in single-phase electric motors to provide the necessary starting torque. These capacitors store electrical energy and release it to create a phase shift between the current in the start and run windings of the motor.`,
    `Motor run capacitors are essential components used in various types of electric motors to enhance their performance and efficiency. These capacitors are designed to provide continuous voltage to the motor's windings, creating a phase shift that ensures smooth and reliable operation.`,
  ];
  const [display, setDisplay] = useState(all);
  const [text, setText] = useState(descriptions[0]);
  return (
    <div className="products">
      <img
        src={world}
        alt=""
        style={{ position: "absolute", height: "80vh", marginLeft: "10%" }}
      />
      <div className="flex-page">
        <div className="heading-container">
          <h2 className="line-heading">
            <span>All Products</span>
          </h2>
          <h1 className="heading">Get to Know about all types of capacitors</h1>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              setDisplay(power);
              setText(descriptions[1]);
            }}
          >
            Power Capacitors
          </button>
          <button
            className="btn"
            onClick={() => {
              setDisplay(ac);
              setText(descriptions[2]);
            }}
          >
            AC Capacitors
          </button>
          <button
            className="btn"
            onClick={() => {
              setDisplay(sub);
              setText(descriptions[3]);
            }}
          >
            Submersible Pump Capacitors
          </button>
          <button
            className="btn"
            onClick={() => {
              setDisplay(fan);
              setText(descriptions[4]);
            }}
          >
            Fan Capacitors
          </button>
          <button
            className="btn"
            onClick={() => {
              setDisplay(start);
              setText(descriptions[5]);
            }}
          >
            Motor Start Capacitors
          </button>
          <button
            className="btn"
            onClick={() => {
              setDisplay(run);
              setText(descriptions[6]);
            }}
          >
            Motor Run Capacitors
          </button>
        </div>
        <p className="text">{text}</p>
        <div className="btn-container">
          {display.map((image, index) => (
            <img key={index} src={image} className="capacitor-img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
