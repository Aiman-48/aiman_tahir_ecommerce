'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { products,Product } from '../../../../data/product';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;  
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const productId = Number(id); 
      const foundProduct = products.find((product) => product.id === productId);

      if (foundProduct) {
        setProduct(foundProduct);  
      }
    }
  }, [id]);  

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-green-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
