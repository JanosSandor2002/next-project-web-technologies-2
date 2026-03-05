'use client';

import { useState } from 'react';
import { useGlobal } from '@/app/context/GlobalContext';
import ProductCard from './ProductCard';

export default function ProductList() {
  const { state } = useGlobal();
  const { products } = state;

  const [filter, setFilter] = useState('all');

  const filteredProducts =
    filter === 'all'
      ? products
      : products.filter((p) => p.brand?.toLowerCase() === filter);

  if (!products.length) {
    return <div>Nem található termék.</div>;
  }

  return (
    <div>
      {/* Szűrő gombok */}
      <div className='flex gap-3 mb-6 flex-wrap'>
        <button
          onClick={() => setFilter('all')}
          className='px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700'
        >
          Mind
        </button>

        <button
          onClick={() => setFilter('samsung')}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500'
        >
          Samsung
        </button>

        <button
          onClick={() => setFilter('nothing')}
          className='px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200'
        >
          Nothing
        </button>

        <button
          onClick={() => setFilter('xiaomi')}
          className='px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400'
        >
          Xiaomi
        </button>
      </div>

      {/* Termék lista */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
