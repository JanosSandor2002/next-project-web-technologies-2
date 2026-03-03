'use client';

import { useGlobal } from '@/app/context/GlobalContext';
import ProductCard from './ProductCard';

export default function ProductList() {
  const { state } = useGlobal();
  const { products } = state;

  if (!products.length) {
    return <div>Nem található termék.</div>;
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
