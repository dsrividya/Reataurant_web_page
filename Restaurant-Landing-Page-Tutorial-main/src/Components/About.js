import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Happiness is a juicy burger and crispy fries
        </p>
        <p className="primary-text">
          From farm-fresh ingredients to masterfully crafted dishes, every bite
          is a celebration of taste. Whether you're craving a cozy dinner, a
          quick bite, or a delightful dessert, we bring you an unforgettable
          dining experience. Our chefs blend tradition with innovation, ensuring
          every meal is prepared with love and perfection. Step into a world of
          aromatic spices, sizzling flavors, and heartwarming hospitality.
          Whether dining in or ordering online, we promise to serve you the
          best. Come hungry, leave happy!"
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
