'use client';
import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full grid grid-cols-1 md:grid-cols-[6fr,6fr] place-items-center justify-evenly bg-[#F2F0F1]"
        style={{
          backgroundImage: "url('../hero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Ensures the section takes full viewport height
        }}
      >
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center p-6 space-y-10 md:space-y-12 bg-opacity-70 bg-black md:bg-transparent">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-tight">
            NEW COLLECTION
          </h1>
          <p className="text-white md:block opacity text-base md:text-lg mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed <br /> to bring out your individuality and cater to your sense of style.
          </p>

          {/* Button */}
          <button className="px-6 py-3 bg-[#70db70] w-full sm:w-[40%] text-white text-lg font-medium rounded-none hover:bg-[#5db85d] transition">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
