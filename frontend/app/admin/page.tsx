'use client';

import { useEffect } from 'react';
import { useGlobal } from '@/app/context/GlobalContext';
import { Product } from '@/app/context/Reducer';
import axios from 'axios';

import {
  SET_ADMIN_SELECTED,
  SET_ADMIN_FORM,
  SET_ADMIN_MESSAGE,
} from '@/app/context/Actions';

export default function AdminPage() {
  const { state, dispatch, updateProductWithName, fetchProducts } = useGlobal();

  const { user, products, admin } = state;
  const { selectedId, price, stock, message } = admin;

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
    dispatch({ type: SET_ADMIN_SELECTED, payload: id });

    const selectedProduct = products.find((p) => p._id === id);

    if (selectedProduct) {
      dispatch({
        type: SET_ADMIN_FORM,
        payload: {
          price: String(selectedProduct.price ?? ''),
          stock: String(selectedProduct.stock ?? ''),
        },
      });
    }
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (!selectedId) return;

    try {
      const res = await axios.put(
        `http://localhost:5000/api/products/${selectedId}`,
        {
          price: Number(price),
          stock: Number(stock),
        },
      );

      const updatedProduct: Product = res.data;

      updateProductWithName(updatedProduct);

      dispatch({
        type: SET_ADMIN_MESSAGE,
        payload: 'Sikeres frissítés!',
      });
    } catch (err) {
      console.error(err);

      dispatch({
        type: SET_ADMIN_MESSAGE,
        payload: 'Hiba történt!',
      });
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
              {phone.name}
            </option>
          ))}
        </select>

        <input
          type='number'
          placeholder='Új ár'
          value={price}
          onChange={(e) =>
            dispatch({
              type: SET_ADMIN_FORM,
              payload: { price: e.target.value, stock },
            })
          }
          className='w-full bg-black border p-3 rounded text-gray-200'
        />

        <input
          type='number'
          placeholder='Készletszám'
          value={stock}
          onChange={(e) =>
            dispatch({
              type: SET_ADMIN_FORM,
              payload: { price, stock: e.target.value },
            })
          }
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
