'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/Product';

export default function ProductList() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Laptop',
      price: 300000,
      stock: 4,
      category: 'Elektronika',
    },
    {
      id: 2,
      name: 'Egér',
      price: 9000,
      stock: 25,
      category: 'Kiegészítő',
    },
  ]);

  return (
    <div className='grid grid-cols-3 gap-4'>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
