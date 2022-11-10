import React from "react";
import "../styles/Services.css";

const Services = () => {
  const data = [
    {
      id: 1,
      name: "Free Shipping",
    },
    {
      id: 2,
      name: "Online Order",
    },
    {
      id: 3,
      name: "Save Money",
    },
    {
      id: 4,
      name: "Promotions",
    },
    {
      id: 5,
      name: "Customer Support",
    },
  ];
  return (
    <section id="feature">
      <div className="heading">
        <h3>
          Key <span>Services</span> Provided by Us.
        </h3>
      </div>
      {data.map((feature) => (
        <div className="fe-box section-p1">
          <img src={`img/features/f${feature.id}.png`} alt="f1" />
          <h6>{feature.name}</h6>
        </div>
      ))}
    </section>
  );
};

export default Services;
