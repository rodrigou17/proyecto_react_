import React from 'react';

const AboutMe = () => {
  return (
    <>
    <div className="about-me">
      <div className="about-me__photo">
        <img src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-logo-company-design-png-image_3588263.jpg" alt="company photo" />
      </div>
      <div className="about-me__text">
        <h2>Takaria</h2>
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
    <style jsx>
      {`.about-me {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}

.about-me__photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.about-me__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-me__text {
  text-align: center;
}

.about-me__text h2 {
  margin-bottom: 10px;
}

.about-me__text p {
  margin-bottom: 20px;
}

.divform {
  height: 100vh;
  padding-left: 4rem;
  padding-right: 4rem;
}

.formm {
  background-color: rgb(193, 220, 220);
  border-radius: .7rem;
  height: 70vh;
  border: solid;
  border-width: thin;
  
}

.inputt {
  height: 3rem;
  margin-bottom: 1.5rem;
  margin-left: 1.5rem;
  border-radius: .5rem;
  border: solid;
  border-width: thin;
  padding-left: 1rem;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}`}
    </style>
    </>
  );
};

export default AboutMe;