import React from "react";
import "./Testimonial.scss";
import Avatar from "../../images/avatar-anisha.png";
import { testimonialData } from "../../data/Data";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2> What they’ve said</h2>
      <div className="cardWrapper">
        {testimonialData.map((item) => (
          <div className={`card ${item.delay}`} key={item.id}>
            <img src={item.image} alt="avatar" />
            <h3>{item.name}</h3>
            <p> {item.text}</p>
          </div>
        ))}
      </div>

      <button className="primaryBtn">Get Started</button>
    </div>
  );
};

export default Testimonial;
