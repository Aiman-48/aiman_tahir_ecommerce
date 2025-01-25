'use client';
import { dressStyleData } from '../../data/product';
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
      <div className="grid grid-cols-3 gap-0">
        {/* Men */}
        <div className="col-start-1 col-span-1 row-span-2 lg:w-[350px] lg:h-[460px] relative">
          <Card
            backgroundImage={dressStyleData[0].backgroundImage}
            customStyles="w-full h-full object-cover rounded-none"
          />
          <div className="absolute bottom-4 left-4 text-black font-bold text-xl bg-white px-3 py-1">
            MEN
          </div>
        </div>

        {/* Women */}
        <div className="col-start-2 col-span-1 row-span-2 lg:w-[240px] lg:h-[460px] relative">
          <Card
            backgroundImage={dressStyleData[1].backgroundImage}
            customStyles="w-full h-full object-cover rounded-none"
          />
          <div className="absolute bottom-4 left-4 text-black font-bold text-xl bg-white px-3 py-1">
            WOMEN
          </div>
        </div>

        {/* Kids */}
        <div className="col-start-3 col-span-1 row-span-1 lg:w-[210px] lg:h-[220px] relative">
          <Card
            backgroundImage={dressStyleData[2].backgroundImage}
            customStyles="w-full h-full object-cover rounded-none"
          />
          <div className="absolute bottom-4 left-4 text-black font-bold text-xl bg-white px-3 py-1">
            KIDS
          </div>
        </div>

        {/* Accessories */}
        <div className="col-start-3 col-span-1 row-span-1 lg:w-[210px] lg:h-[220px] relative">
          <Card
            backgroundImage={dressStyleData[3].backgroundImage}
            customStyles="w-full h-full object-cover rounded-none"
          />
          <div className="absolute bottom-4 left-4 text-black font-bold text-xl bg-white px-3 py-1">
            ACCESSORIES
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSection;
