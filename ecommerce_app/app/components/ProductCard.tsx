import React from "react";

interface ProductCardProps {
  id?: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number | null | undefined;
  category?: string;
  quantity?: number | null;
  colorOptions?: string[]; // Added colorOptions
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  category,
  colorOptions,
}) => {
  return (
    <div className="max-w-xs bg-white rounded-lg p-4 flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="w-full h-63 object-cover rounded-t-lg"
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        {category && (
          <p className="text-sm text-gray-600 mt-1">{category}</p>
        )}
        <div className="mt-3 flex items-center justify-center">
          <div>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
            )}
            <span className="text-lg font-semibold text-black">${price}</span>
          </div>
        </div>
        {colorOptions && (
          <div className="mt-2 flex gap-2 justify-center">
            {colorOptions.map((color, index) => (
              <span
                key={index}
                className={`w-6 h-6 rounded-full border border-gray-400`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
