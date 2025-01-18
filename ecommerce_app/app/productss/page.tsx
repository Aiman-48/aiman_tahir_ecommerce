import React from "react";
import Products from "../components/productss";
import { fetchProducts } from "../../sanity/lib/client";

const ProductssPage = async () => {
  // Fetch products on the server side
  const products = await fetchProducts();

  return (
    <div className="container mx-auto p-8">
      {/* Improved heading styling */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Discover Our Premium Products
      </h1>
      <Products products={products} />
    </div>
  );
};

export default ProductssPage;
