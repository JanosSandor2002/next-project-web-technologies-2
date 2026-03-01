'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/Product';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        if (!res.ok) throw new Error('Hiba a termékek lekérésekor');
        const data = await res.json();

        const formattedProducts = data.map((item: any) => ({
          id: item._id,
          name: `${item.brand} ${item.series} ${item.model}${item.variant ? ' (' + item.variant + ')' : ''}`,
          price: item.price ?? 0,
          stock: item.stock ?? 0,
          category: item.category ?? 'Elektronika',
          rom: item.rom,
          ram: item.ram,
          cpu: item.cpu,
          gpu: item.gpu,
          camera: item.camera,
          battery: item.battery,
          charge: item.charge,
          year: item.year,
          url: item.url,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading)
    return <p className='text-center text-gray-300 mt-10'>Betöltés...</p>;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
