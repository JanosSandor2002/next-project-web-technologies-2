'use client';

import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';

export default function AdminPage() {
  const { user } = useAuth();
  const [selectedPhone, setSelectedPhone] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  // demo lista, később fetch-el jöhet a backendből
  const phones = [
    'iPhone 14 Pro',
    'Samsung Galaxy S23',
    'Google Pixel 7',
    'Xiaomi 13',
    'OnePlus 11',
  ];

  if (!user) {
    return (
      <div className='text-center py-20 text-red-400'>
        Nincs jogosultság. Jelentkezz be!
      </div>
    );
  }

  function handleSubmit() {
    // itt küldöd majd a backendnek a selectedPhone, price, stock adatokat
    console.log('Küldés backendnek:', { selectedPhone, price, stock });
  }

  return (
    <div className='px-20 py-10 space-y-10'>
      <h1 className='text-4xl text-cyan-400 font-bold'>Admin panel</h1>

      <div className='border border-emerald-400 rounded-xl p-8 space-y-4 max-w-md'>
        <h2 className='text-emerald-400 text-xl'>Telefon módosítása</h2>

        {/* Telefon kiválasztó */}
        <select
          value={selectedPhone}
          onChange={(e) => setSelectedPhone(e.target.value)}
          className='w-full bg-black border p-3 rounded text-gray-200'
        >
          <option value='' disabled>
            Válassz telefont
          </option>
          {phones.map((phone) => (
            <option key={phone} value={phone}>
              {phone}
            </option>
          ))}
        </select>

        {/* Ár input */}
        <input
          placeholder='Új ár'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='w-full bg-black border p-3 rounded text-gray-200'
        />

        {/* Készlet input */}
        <input
          placeholder='Készletszám'
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className='w-full bg-black border p-3 rounded text-gray-200'
        />

        <button
          onClick={handleSubmit}
          className='bg-emerald-400 text-black px-4 py-2 rounded hover:bg-emerald-500 transition'
        >
          Mentés / Küldés
        </button>
      </div>
    </div>
  );
}
