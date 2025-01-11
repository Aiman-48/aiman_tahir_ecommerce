'use client';
import { dressStyleData } from '@/data/products';
import React from 'react';
import { Card } from './Card';

const StyleSection = () => {
  return (
    <div className="bg-[#F0F0F0] p-8 w-full h-auto">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-black">
          EDITOR'S PICK
        </h2>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-1 gap-y-0">
        {/* Men (Column 1, Row 1) */}
        <div
          className="col-start-1 col-span-1 row-span-2"
          style={{ width: '350px', height: '460px' }}
        >
          <Card
            name={dressStyleData[0].name}
            backgroundImage={dressStyleData[0].backgroundImage}
            customStyles="w-full h-full object-cover rounded-none"
          />
        </div>

        {/* Women (Column 2, Row 1) */}
        <div
          className="col-start-2 col-span-1 row-span-2"
          style={{ width: '240px', height: '460px' }}
        >
          <Card
            name={dressStyleData[1].name}
            backgroundImage={dressStyleData[1].backgroundImage}
            customStyles="w-full h-full object-cover rounded-none"
          />
        </div>

        {/* Kids (Column 3, Row 1) */}
        <div
          className="col-start-3 col-span-1 row-span-1"
          style={{ width: '210px', height: '220px' }}
        >
          <Card
            name={dressStyleData[2].name}
            backgroundImage={dressStyleData[2].backgroundImage}
            customStyles="w-full h-full object-cover rounded-none"
          />
        </div>

        {/* Accessories (Column 3, Row 2) */}
        <div
          className="col-start-3 col-span-1 row-span-1"
          style={{ width: '210px', height: '220px' }}
        >
          <Card
            name={dressStyleData[3].name}
            backgroundImage={dressStyleData[3].backgroundImage}
            customStyles="w-full h-full object-cover rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default StyleSection;
