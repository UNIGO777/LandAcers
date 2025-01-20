import React from 'react';

const Card = ({ card }) => {
  const renderRating = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? '★' : '☆'); 
    }
    return stars.join('');
  };

  return (
    <div className="md:w-[30%] w-[60%] md:h-80 bg-white shrink-0 rounded-lg shadow-lg cursor-pointer">
      <img
        src={card.image}
        alt={card.title}
        className="w-full md:h-40 rounded-t-lg object-cover"
      />
      <div className="md:p-4 p-2">
        <h3 className="md:text-xl text-lg font-semibold">{card.title}</h3>
        <p className="text-gray-600 md:mt-2">{card.description}</p>

        {/* Display Rating */}
        <div className="md:mt-2  mt-1 text-yellow-500">
          {renderRating(card.rating)} {/* Display the stars */}
        </div>

        {/* Display Location */}
        <div className="md:mt-2 mt-1 text-gray-500">
          <span>Location: </span>{card.location}
        </div>
      </div>
    </div>
  );
};

export default Card;
