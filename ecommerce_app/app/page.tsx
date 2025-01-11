'use client';
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import ProductList from "./components/ProductList";
import { products } from "../data/product";

import StyleSection from "./components/StyleSection";
import HeroSection2 from "./components/HeroSection2";
import HeroSection3 from "./components/HeroSection3";
import FeaturedPost from "./components/FeaturedCard";

export default function Home() {
  // Hook to get screen dimensions
  const useScreenDimensions = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
      const updateDimensions = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return dimensions;
  };

  const { width, height } = useScreenDimensions();

  return (
    <div className="grid grid-rows-[auto]  gap-20   min-h-screen w-full">
      {/* Row 1: Navbar */}
      {/* <div className="row-span-1  bg-white  w-full ">
        <Navbar />
      </div> */}



      {/* Row 2: Hero Section */}
      <div className="row-span-1 bg-[#F2F0F1]  w-full ">
        {/* <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Dashboard
        </h1> */}

      <HeroSection />
      </div>



  {/* Row 3: Section 1 */}
  <div className="row-span-1 bg-white p-20 flex items-center  justify-center">
        {/* Additional Section Content */}
      
        <StyleSection/>
      </div>


      
 {/* Row 3: Section 1 */}
<div className="row-span-1 bg-white p-6 flex items-center justify-center">
  <div className="w-full text-center">
    {/* First Paragraph with Gray Text */}
    <p className="text-gray-400 text-sm mb-2" style={{ fontSize: '20px' }}>
      Featured product
    </p>

    {/* Title */}
    <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2" style={{ fontSize: '24px' }}>
     BEST SELLER PRODUCTS
    </h2>

      {/* Second Paragraph with Gray Text */}
      <p className="text-gray-400 text-sm mb-4" style={{ fontSize: '14px' }}>
      Problems trying to resolve the conflict between
    </p>

    {/* Product List */}
    <ProductList products={products} />
  </div>
</div>




 {/* Row 2: Hero Section 2 */}
 <div className="row-span-1 bg-[#F2F0F1]  w-full ">
        {/* <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Dashboard
        </h1> */}

      <HeroSection2 />
      </div>

{/* Row 2: Hero Section */}
<div className="row-span-1 bg-[#F2F0F1]  w-full ">
        {/* <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Dashboard
        </h1> */}

      <HeroSection3 />
      </div>

    

      {/* Row 3: Section 1 */}
<div className="row-span-1 bg-white p-6 flex items-center justify-center">
  <div className="w-full text-center">
    {/* First Paragraph with Gray Text */}
    <p className="text-gray-400 text-sm mb-2" style={{ fontSize: '20px' }}>
      Featured product
    </p>

    {/* Title */}
    <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2" style={{ fontSize: '24px' }}>
     BEST SELLER PRODUCTS
    </h2>

      {/* Second Paragraph with Gray Text */}
      <p className="text-gray-400 text-sm mb-4" style={{ fontSize: '14px' }}>
      Problems trying to resolve the conflict between
    </p>
    
<FeaturedPost/>
    
  </div>
</div>

    </div>
  );
}
