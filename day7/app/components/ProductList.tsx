'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../../contexts/cartContexts';

type Product = {
  id: number; // ID is required
  image: string;
  title: string;
  price: number;
  originalPrice?: number | null;
  category?: string;
};

type ProductListProps = {
  products: Product[];
  title: string;
};

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  const { addToCart } = useCart();

  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <section className="py-8 px-4">
      <h2 className="text-4xl font-extrabold text-black tracking-tighter leading-none text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard
            key={product.id} // Unique key
            {...product} // Spread all product properties, including `id`
          />
        ))}
        
      </div>
    </section>
  );
};

export default ProductList;
