import React from "react";
import "./FirstSection.scss";
import { firstSectionData } from "../../data/Data";

const FirstSection = () => {
  return (
    <div className="firstSection">
      <section className="left">
        <h2> What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </section>

      <section className="right">{
        firstSectionData.map(item =>(
            <div className={`contentWrapper ${item.delay}`}key={item.id}>
            <span>{item.number}</span>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          </div>
        ))
      }
      
      </section>
    </div>
  );
};

export default FirstSection;
