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
    <div  className="relative transition-transform duration-500 w-[100%]  overflow-hidden flex-shrink-0" >
                  <img src={card.image} loading='lazy' alt={card.title} className="h-[30vh] sm:h-[40vh]  md:h-[40vh] object-cover rounded-lg w-full" />
                  <div className="absolute rounded-b-md w-full bg-black md:h-[50%] bottom-0 bg-opacity-50 flex flex-col justify-center  text-white p-4">
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                      <p className="text-lg">{card.location}</p>
                      <p className="text-lg font-bold">{card.details}</p>
                      {/* <p className="text-lg">{card.price}</p> */}
                      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg">View Details</button>
                  </div>
              </div>
    // <div className="md:w-[30%] w-[60%] md:h-80 bg-white shrink-0 rounded-lg shadow-lg cursor-pointer">
    //   <img
    //     src={card.image}
    //     alt={card.title}
    //     className="w-full md:h-[70%] rounded-t-lg object-cover"
    //   />
    //   <div className="md:p-4 p-2">
    //     <h3 className="md:text-xl text-lg font-semibold">{card.title}</h3>
    //     <p className="text-gray-600 md:mt-2">{card.description}</p>

    //     {/* Display Rating */}
    //     <div className="md:mt-2  mt-1 text-yellow-500">
    //       {renderRating(card.rating)} {/* Display the stars */}
    //     </div>

    //     {/* Display Location */}
    //     <div className="md:mt-2 mt-1 text-gray-500">
    //       <span>Location: </span>{card.location}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
