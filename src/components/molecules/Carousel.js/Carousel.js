import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {ImgDataBase} from "./ImgBase"


const Carousel = () => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
      };
  return (
    <div className='carousel'>
        <Slider {...settings}>
        {ImgDataBase.map((item) => (
            <div className='card'>
                <div className='cardo-top'>
                    <img src={item.link} alt={item.title}/>
                    <h1>{item.title}</h1>
                </div>
                <div className='card-bottom'>
                    <h3>{item.price}</h3>
                </div>
            </div>
        ))}
        </Slider>
    </div>
  )
}

export default Carousel
