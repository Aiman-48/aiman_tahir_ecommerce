import React from 'react';

const FeaturedCard = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src="./fcard1.png"
            alt="Card Image"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-center text-xs text-gray-500 space-x-2 mb-2">
            <span>Google</span>
            <span>•</span>
            <span>Trending</span>
            <span>•</span>
            <span>New</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Loudest à la Madison #1 (L'integral)
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <span>⏰</span>
              <span>22 April 2021</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📈</span>
              <span>10 comments</span>
            </div>
          </div>
          <button className="text-blue-600 font-medium text-sm flex items-center">
            Learn More <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src="./fcard2.png"
            alt="Card Image"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-center text-xs text-gray-500 space-x-2 mb-2">
            <span>Google</span>
            <span>•</span>
            <span>Trending</span>
            <span>•</span>
            <span>New</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Loudest à la Madison #1 (L'integral)
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <span>⏰</span>
              <span>22 April 2021</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📈</span>
              <span>10 comments</span>
            </div>
          </div>
          <button className="text-blue-600 font-medium text-sm flex items-center">
            Learn More <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src="./fcard3.png"
            alt="Card Image"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-center text-xs text-gray-500 space-x-2 mb-2">
            <span>Google</span>
            <span>•</span>
            <span>Trending</span>
            <span>•</span>
            <span>New</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Loudest à la Madison #1 (L'integral)
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <span>⏰</span>
              <span>22 April 2021</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📈</span>
              <span>10 comments</span>
            </div>
          </div>
          <button className="text-blue-600 font-medium text-sm flex items-center">
            Learn More <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
