import React from "react";
import Shop from "../components/Shop";
import Shop2 from "../components/Shop2";
import Footer from "../components/Footer"; // Import your footer component
import { products } from "@/data/products"; 

const ShopPage = () => (
  <>
    <Shop2 />
    <Footer /> {/* Place the footer here */}
    <Shop products={products} />
  </>
);

export default ShopPage;
