import React from "react";
import "./Hero.scss";
import HeroImg from '../../images/illustration-intro.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="left">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <button className="primaryBtn">Get Started</button>
      </div>

      <div className="right">
        <img src={HeroImg} alt="heri-Img" />
      </div>
    </section>
  );
};

export default Hero;
