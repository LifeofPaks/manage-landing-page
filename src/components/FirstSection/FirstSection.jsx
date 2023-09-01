import React, { useState } from "react";
import "./FirstSection.scss";
import { firstSectionData } from "../../data/Data";
import { testimonialData } from "../../data/Data";

const FirstSection = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const InitialCard = testimonialData[cardIndex];

  return (
    <article className="firstSectionContainer">

  <div className="firstSection">
      <section className="left">
        <h2> What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </section>

      <section className="right">
        {firstSectionData.map((item) => (
          <div className={`contentWrapper ${item.delay}`} key={item.id}>
            <span>{item.number}</span>
            <div className="content">
              <h3>{item.title}</h3>

              <div className="title">
                <span className="mobileSpan">{item.number}</span>
                <h3 className="mobileHeader">{item.title}</h3>
              </div>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </section>
    </div>

    <section className="testimonial">
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

      <div className="mobileCardWrapper">
        <div className="cardContainer">
          <div className={`card ${InitialCard.delay}`} key={InitialCard.id}>
            <img src={InitialCard.image} alt="avatar" />
            <h3>{InitialCard.name}</h3>
            <p> {InitialCard.text}</p>
          </div>
        </div>

        <div className="radioWrapper">
          {testimonialData.map((item, index) => (
            <div className={`radio ${cardIndex == index ? "active" : 0}`}
              onClick={()=> setCardIndex(index)}
              key={item.id}
            >
              {item.radio}
            </div>
          ))}
        </div>
      </div>

      <button className="primaryBtn">Get Started</button>
    </section>

    </article>
   
  );
};

export default FirstSection;
