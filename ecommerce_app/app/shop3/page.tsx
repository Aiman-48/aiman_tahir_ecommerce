import React from "react";
import Shop from "../components/Shop";
import Shop2 from "../components/Shop2";
import Footer from "../components/Footer"; // Import your footer component
import { products } from "../../data/product"; 
import Shop3 from "../components/Shop3";
import Couch from "../components/couch";
import Launch from "../components/launch";


const ShopPage = () => (
  <>
  <Couch/>
  <Launch/>
    <Shop3 />
  
  </>
);

export default ShopPage;
