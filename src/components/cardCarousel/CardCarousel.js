import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../card/Card";

const CardCarousel = ({ heading, paragraph, cards }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Custom arrow components
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-10 md:left-0 z-10 -translate-x-full bg-black bg-opacity-65 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        style={{ top: "50%" }}
      >
        <FaArrowLeft size={20} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-10 md:right-0 z-10 translate-x-full bg-black bg-opacity-65 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        style={{ top: "50%" }}
      >
        <FaArrowRight size={20} />
      </button>
    );
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="my-5 md:px-16 px-4">
      <div className="mb-8">
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800">{heading}</h2>
        <p className="md:text-lg text-gray-600 md:mt-4 mt-2">{paragraph}</p>
      </div>

      <div>
        <Slider ref={sliderRef} {...settings} className="gap-4">
          {cards.map((card, index) => (
            <div key={index} className="p-3">
              <Card card={card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
