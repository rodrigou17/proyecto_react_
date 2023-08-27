import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me__photo">
        <img src="https://via.placeholder.com/300x300" alt="foto empresa" />
      </div>
      <div className="about-me__text">
        <h2>company name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          elit vel velit tristique bibendum. Sed euismod, sapien eget
          malesuada malesuada, velit turpis tincidunt velit, vel malesuada
          sapien enim vel sapien. Donec euismod, sapien eget malesuada
          malesuada, velit turpis tincidunt velit, vel malesuada sapien enim
          vel sapien.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;