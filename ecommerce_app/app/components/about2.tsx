'use client';
import React from "react";

export const About2 = () => {
  return (
    <><section className="relative w-full  justify-evenly bg-[#2A7CC7] grid grid-cols-1 md:grid-cols-[6fr,6fr] place-items-center">
      {/* Text Section */}

      <div className="flex flex-col items-start justify-center p-6 relative space-y-10 md:space-y-10 ">
      <p className=" font-extrabold text-white text-base md:text-lg mb-2">
        WORK WITH US
        </p>
        <h1 className="text-4xl text-white items-start md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-tight">
    Now Lets's grow Yours
        </h1>
        <p className="text-white text-base md:text-lg mb-6">
        The gradual accumulation of information about atomic and <br /> small-scale behavior during the first quarter of the 20th
        </p>

        

<div className="flex items-center justify-between gap-x-6 mb-6">
  
<button className="px-6 py-3 bg-[#2A7CC7] w-195px sm:w-[100%] text-white text-lg font-medium rounded-none hover:bg-[#7ab8db] transition border border-white">
  Click Now
</button>

</div>
      </div>

      {/* Image Section */}
      <div className="flex w-full top-0 m-0 p-0">
        <img
          src="./about2.png"
          alt="Fashion"
          className="h-auto w-auto  rounded-lg" />
      </div>

    </section>
    

      
      </>
  );
};

export default About2;





