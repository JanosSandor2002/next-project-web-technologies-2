'use client';

import { useState, useEffect } from 'react';
import { useGlobal } from '@/app/context/GlobalContext';
import { Product } from '@/app/context/Reducer';

export default function AdminPage() {
  const { state, updateProductWithName, fetchProducts } = useGlobal();
  const { user, products } = state;

  const [selectedId, setSelectedId] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [message, setMessage] = useState('');

  // Frissítjük a terméklistát, ha még nincs betöltve
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products, fetchProducts]);

  if (!user) {
    return (
      <div className='text-center py-20 text-red-400'>
        Nincs jogosultság. Jelentkezz be!
      </div>
    );
  }

  function handleSelect(id: string) {
    setSelectedId(id);
    const selectedProduct = products.find((p) => p._id === id);
    if (selectedProduct) {
      setPrice(String(selectedProduct.price ?? ''));
      setStock(String(selectedProduct.stock ?? ''));
    }
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!selectedId) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${selectedId}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            price: Number(price),
            stock: Number(stock),
          }),
        },
      );

      if (!res.ok) throw new Error('Hiba a mentés során');

      const updatedProduct: Product = await res.json();
      updateProductWithName(updatedProduct);
      setMessage('Sikeres frissítés!');
    } catch (err) {
      console.error(err);
      setMessage('Hiba történt!');
    }
  }

  return (
    <div className='px-20 py-10 space-y-10'>
      <h1 className='text-4xl text-cyan-400 font-bold'>Admin panel</h1>

      <div className='border border-emerald-400 rounded-xl p-8 space-y-4 max-w-md'>
        <h2 className='text-emerald-400 text-xl'>Telefon módosítása</h2>

        <select
          value={selectedId}
          onChange={(e) => handleSelect(e.target.value)}
          className='w-full bg-black border p-3 rounded text-gray-200'
        >
          <option value='' disabled>
            Válassz telefont
          </option>
          {products.map((phone) => (
            <option key={phone._id} value={phone._id}>
              {[
                phone.brand,
                phone.series,
                phone.model != null && phone.model !== 'N/A'
                  ? phone.model
                  : null,
                phone.variant ?? null,
              ]
                .filter(Boolean)
                .join(' ')}
            </option>
          ))}
        </select>

        <input
          type='number'
          placeholder='Új ár'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='w-full bg-black border p-3 rounded text-gray-200'
        />

        <input
          type='number'
          placeholder='Készletszám'
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className='w-full bg-black border p-3 rounded text-gray-200'
        />

        <button
          onClick={handleSubmit}
          disabled={!selectedId}
          className='bg-emerald-400 text-black px-4 py-2 rounded hover:bg-emerald-500 transition disabled:opacity-50'
        >
          Mentés
        </button>

        {message && <div className='text-sm text-cyan-400 pt-2'>{message}</div>}
      </div>
    </div>
  );
}
