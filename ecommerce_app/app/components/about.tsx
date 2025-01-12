'use client';
import React from "react";

export const About = () => {
  return (
    <><section className="relative w-full  justify-evenly bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-[6fr,6fr] place-items-center">
      {/* Text Section */}

      <div className="flex flex-col items-start justify-center p-6 relative space-y-10 md:space-y-10 ">
      <p className=" font-extrabold text-base md:text-lg mb-2">
        ABOUT COMPANY
        </p>
        <h1 className="text-4xl items-start md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
    ABOUT US
        </h1>
        <p className="text-[#737373] text-base md:text-lg mb-6">
       We know how large objects will act,We know<br /> how are objects will act, We know.
        </p>

        

<div className="flex items-center justify-between gap-x-6 mb-6">
  
        <button className="px-6 py-3 bg-[#23A6F0] w-195px sm:w-[100%] text-white text-lg font-medium rounded-none hover:bg-[#7ab8db] transition">
  Get Quote Now
</button>
</div>
      </div>

      {/* Image Section */}
      <div className="flex w-full top-0 m-0 p-0">
        <img
          src="./shopping.png"
          alt="Fashion"
          className="h-auto w-auto  rounded-lg" />
      </div>

    </section>
    

      
      </>
  );
};

export default About;





