import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../card/Card";
import UpcommingProjects from "../../Assets/StaticData/UpcomingProjects";


const CardCarousel = ({ heading, paragraph, cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;
  const [isScroll, setIsScroll] = useState(true);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    setIsScroll(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
    resetScrollState();
  };

  const scrollRight = () => {
    if (isScroll) {
      setIsScroll(false);
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % totalCards;
        console.log(newIndex);
        return newIndex;
      });
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
      }
      resetScrollState();
    }
  };

  

  const resetScrollState = () => {
    setTimeout(() => {
      setIsScroll(true);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [totalCards]);

  return (
    <div className="my-5 md:px-16 px-4">
      {/* Section Heading */}
      <div className="mb-4">
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800">{heading}</h2>
        <p className="md:text-lg  text-gray-600 md:mt-4 mt-2">{paragraph}</p>
      </div>

      {/* Left Arrow Button */}
      <div className="flex  md:justify-end justify-between gap-5 mb-4">
        <button
          onClick={scrollLeft}
          className="bg-black text-white p-2 rounded-full shadow-lg"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={()=>scrollRight()}
          className="bg-black text-white p-2 rounded-full shadow-lg"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Carousel */}
      <div className="">
        {/* Cards Container */}
        <div ref={carouselRef} className="flex py-5 overflow-hidden w-full">
          <div
            className={`flex gap-5 w-full ${isScroll ? "scroll-animation" : ""}`}
          >
            {UpcommingProjects.concat(cards).map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex space-x-2 justify-center py-4">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-black animate-indicator"
                  : "bg-gray-300"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
