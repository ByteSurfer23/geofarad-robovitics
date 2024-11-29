import React, { useState } from "react";
import "./Infrastructure.css";
import infra_pic from "../assets/infrastructure.png";
import line from "../assets/line.png";
import polygon from "../assets/polygon.png";
import circle from "../assets/circle.png";
import Gallery from "./Gallery";

const Infrastructure = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <div className="infrastructure-container">
        <div className="infrastructure-content">
          <h2 className="infra-heading">
            <span>Infrastructure</span>
          </h2>
          <h1 className="infra-caption">
            We’re creating only exceptional Quality Capacitors
          </h1>
          <div className="expandable">
            <p>
              At Geofarad, we pride ourselves on having a robust and efficient
              infrastructure that supports our mission to deliver high-quality
              capacitors to our clients. Our infrastructure comprises a
              state-of-the-art manufacturing facility, a strategically located
              warehouse, and a bustling trading house in Chandni Chowk.
              Together, these components form the backbone of our operations,
              ensuring that we can meet the diverse needs of our customers with
              speed and precision..
            </p>
            <button
              className="more"
              onClick={() => setExpand(true)}
              style={expand ? { visibility: "hidden" } : null}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="infrastructure-pic relative">
          <img src={infra_pic} alt="" className="infra_pic" />
          <img src={line} alt="" className="line absolute" />
          <img src={polygon} alt="" className="polygon absolute" />
          <img src={circle} alt="" className="circle absolute" />
        </div>
      </div>
      {expand && (
        <div className="expanded">
          <h2
            style={{ color: "#808285", fontWeight: "bold", margin: "20px 0" }}
          >
            Manufacturing Facility
          </h2>
          <p>
            Our manufacturing facility is the heart of our operations. Equipped
            with the latest technology and machinery, it spans over 20000 square
            feet, enabling us to produce a wide range of capacitors to meet
            various industrial and commercial needs. We have invested in
            advanced production lines that ensure high efficiency, precision,
            and quality in every capacitor we manufacture. Our facility is
            staffed with a team of highly skilled engineers and technicians who
            are dedicated to maintaining the highest standards of production.{" "}
            <br /> Key features of our manufacturing facility include:
            <ul>
              <li>
                Advanced Production Lines: Our production lines are equipped
                with modern machinery that ensures efficient and precise
                manufacturing processes.
              </li>
              <li>
                Quality Control Laboratory: We have a dedicated quality control
                laboratory where each capacitor undergoes rigorous testing to
                meet our strict quality standards.
              </li>
              <li>
                Research and Development: Our R&D department is continually
                innovating, working on new capacitor designs and improving
                existing products to meet the evolving needs of our customers.
              </li>
              <li>
                Sustainable Practices: We are committed to sustainable
                manufacturing practices, ensuring that our processes are
                environmentally friendly and efficient.
              </li>
            </ul>
          </p>
          <h2
            style={{ color: "#808285", fontWeight: "bold", margin: "20px 0" }}
          >
            Warehouse
          </h2>
          <p>
            Strategically located near our manufacturing facility, our warehouse
            plays a crucial role in our logistics and supply chain management.
            The proximity of the warehouse to the factory ensures that finished
            products are swiftly and efficiently moved to storage, ready for
            dispatch. Our warehouse is designed to accommodate large volumes of
            stock, ensuring that we can meet bulk orders and urgent requests
            without delay.
            <br /> Key features of our warehouses include:
            <ul>
              <li>
                Spacious Storage: Our warehouse offers ample storage space,
                allowing us to keep a significant inventory of capacitors to
                meet customer demands promptly.
              </li>
              <li>
                Advanced Inventory Management: We utilize advanced inventory
                management systems to track stock levels, manage orders, and
                ensure timely dispatch.
              </li>
              <li>
                Climate Control: To preserve the integrity and quality of our
                capacitors, our warehouse is equipped with climate control
                systems that maintain optimal storage conditions.
              </li>
              <li>
                Efficient Logistics: Our logistics team ensures that products
                are packed securely and dispatched quickly, providing reliable
                delivery to our customers.
              </li>
            </ul>
          </p>
          <h2
            style={{ color: "#808285", fontWeight: "bold", margin: "20px 0" }}
          >
            Trading House in Chandni Chowk
          </h2>
          <p>
            Our trading house in Chandni Chowk, one of the most vibrant
            commercial hubs in Delhi, serves as a key point of contact for our
            clients. This location allows us to connect directly with our
            customers, understand their needs, and provide them with tailored
            solutions. The trading house is staffed with knowledgeable sales
            representatives who are experts in our product range and committed
            to providing exceptional customer service.
            <br /> Key features of our trading houses include:
            <ul>
              <li>
                Prime Location: Situated in Chandni Chowk, our trading house is
                easily accessible to clients from across the region, making it
                convenient for them to visit and place orders.
              </li>
              <li>
                Customer Support: Our team at the trading house is dedicated to
                assisting customers with product inquiries, technical support,
                and order processing.
              </li>
              <li>
                Showroom: The trading house features a showroom where customers
                can view our latest products and innovations.
              </li>
              <li>
                Market Insights: Being located in a bustling commercial area
                allows us to stay abreast of market trends and customer
                preferences, helping us to continually improve our offerings.
              </li>
            </ul>
          </p>
          <p>
            In conclusion, our well-integrated infrastructure comprising the
            manufacturing facility, warehouse, and trading house ensures that we
            can deliver high-quality capacitors efficiently and reliably. At
            Geofarad Capacitor, we are committed to excellence in every aspect
            of our operations, striving to meet and exceed our customers'
            expectations.
          </p>
          <button className="more" onClick={() => setExpand(false)}>
            Read Less
          </button>
        </div>
      )}
      <Gallery />
    </div>
  );
};

export default Infrastructure;
