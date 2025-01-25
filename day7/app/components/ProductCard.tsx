'use client';
import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number | null;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  category,
}) => {
  // Set default values for image and title in case they are missing
  const imageUrl = image || '/placeholder.png'; // Use a default image if not provided
  const productTitle = title || 'Untitled Product'; // Use a default title if not provided

  return (
    <Link href={`/product/${id}`} passHref>
      <div className="max-w-xs bg-white rounded-lg p-4 flex flex-col items-center cursor-pointer">
        <img
          src={imageUrl}
          alt={productTitle}
          className="w-full h-63 object-cover rounded-t-lg"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-medium text-gray-800">{productTitle}</h3>
          {category && <p className="text-sm text-gray-600 mt-1">{category}</p>}
          <div className="mt-3">
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through mr-2">
                ${originalPrice}
              </span>
            )}
            <span className="text-lg font-semibold text-black">${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
