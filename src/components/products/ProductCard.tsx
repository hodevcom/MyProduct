import React from 'react';
import { Product, ProductCardProps } from '@/features/products/types';
import Image from 'next/image';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded shadow border-gray-200 hover:shadow-md p-4 transition-all bg-white">
      <div className="flex flex-col items-center p-6">
        <Image
          src={product.image}
          alt={product.name}
          className="w-50 h-36"
          width={150}
          height={75}
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-900">{product.name}</h3>
        <span className="mt-2 inline-block br-4 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          {product.category}
        </span>
        <p className="text-sm text-gray-500">{product.price != null ? product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : "R$ 0,00"}</p>
      </div>
    </div>
  );
};

export default ProductCard;