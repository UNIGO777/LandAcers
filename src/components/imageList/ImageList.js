import React from "react";

const ImageList = ({ heading, paragraph, images }) => {
  return (
    <div className="my-8 px-4 md:px-16">
      {/* Heading Section */}
      <div className="mb-6">
        <h2 className="md:text-3xl text-xl font-bold text-gray-800">{heading}</h2>
        <p className="md:text-lg text-gray-600 mt-2">{paragraph}</p>
      </div>

      {/* Image List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            {/* Image */}
            <img
              src={image.src}
              alt={image.name}
              className="w-full md:h-80 h-40 object-cover rounded-lg shadow-md"
            />
            {/* Image Name */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 text-sm rounded-b-lg">
              {image.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
