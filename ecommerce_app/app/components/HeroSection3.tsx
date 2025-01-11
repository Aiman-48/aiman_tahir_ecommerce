'use client';
import React from "react";

export const HeroSection3 = () => {
  return (
    <><section className="relative w-full  justify-evenly bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-[6fr,6fr] place-items-center">
         {/* Image Section */}
         <div className="flex w-full top-0 m-0 p-0">
        <img
          src="./hero3.png"
          alt="Fashion"
          className="h-auto w-auto  rounded-lg" />
      </div>
      
      {/* Text Section */}

      <div className="flex flex-col items-start justify-center p-6 relative space-y-10 md:space-y-12 ">
      <p className="text-gray-500 text-base md:text-lg mb-6">
        SUMMER COLLECTION 2020
        </p>
        <h1 className="text-4xl font-extrabold text-black tracking-tighter leading-tight">
          Part Of The Neural<br /> Universe
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-6">
       We know how large objects will act,We know<br /> how are objects will act, We know.
        </p>

        

        <div className="flex items-center justify-between gap-x-4 mb-6">
  {/* First Button (Add to Cart) */}
  <button
    className="flex-1 flex items-center justify-center px-6 py-3 h-12 text-white text-lg font-medium rounded-none bg-[#70db70] hover:bg-[#5db85d] transition leading-none whitespace-nowrap"
  >
    Add to Cart
  </button>

  {/* Second Button (Buy Now) */}
  <button
    className="flex-1 flex items-center justify-center px-6 py-3 h-12 text-[#70db70] text-lg font-medium rounded-none border-2 border-[#70db70] bg-transparent hover:bg-[#e8f8e8] transition"
  >
    Buy Now
  </button>
</div>


      </div>

   

    </section>
    

      
      </>
  );
};

export default HeroSection3;
