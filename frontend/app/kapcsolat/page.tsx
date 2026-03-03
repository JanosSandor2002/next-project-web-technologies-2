'use client';

import { useState } from 'react';

export default function KapcsolatPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(form); // később API

    setSent(true);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <div className='space-y-20 px-4 md:px-20 py-10'>
      {/* HERO */}
      <section className='text-center py-16'>
        <h1 className='text-5xl font-bold text-cyan-400 drop-shadow-lg mb-6'>
          Kapcsolat
        </h1>

        <p className='text-gray-300 max-w-2xl mx-auto'>
          Kérdésed van a telefon nyilvántartó rendszerrel kapcsolatban? Küldj
          üzenetet, és hamarosan válaszolunk.
        </p>
      </section>

      {/* CONTENT */}
      <section className='grid md:grid-cols-2 gap-10'>
        {/* CONTACT INFO */}
        <div className='p-8 border-2 border-cyan-400 rounded-xl shadow-lg space-y-6'>
          <h2 className='text-2xl font-semibold text-cyan-400'>
            Elérhetőségeink
          </h2>

          <div className='space-y-3 text-gray-300'>
            <p>
              <span className='text-cyan-400 font-semibold'>Email:</span>{' '}
              info@nyilvantarto.hu
            </p>

            <p>
              <span className='text-cyan-400 font-semibold'>Telefon:</span> +36
              30 123 4567
            </p>
          </div>

          <div className='bg-black border border-cyan-400 rounded-lg p-4 text-sm text-gray-300'>
            Általában <span className='text-cyan-400'>24 órán belül</span>{' '}
            válaszolunk minden megkeresésre.
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className='p-8 border-2 border-emerald-400 rounded-xl shadow-lg space-y-5'
        >
          <h2 className='text-2xl font-semibold text-emerald-400'>
            Üzenet küldése
          </h2>

          {sent && (
            <div className='border border-emerald-400 text-emerald-400 p-3 rounded-lg'>
              ✅ Üzenet elküldve!
            </div>
          )}

          <input
            type='text'
            name='name'
            placeholder='Neved'
            value={form.name}
            onChange={handleChange}
            required
            className='w-full bg-black border border-gray-700 rounded-lg p-3 text-gray-200 focus:border-cyan-400 focus:outline-none transition'
          />

          <input
            type='email'
            name='email'
            placeholder='Email címed'
            value={form.email}
            onChange={handleChange}
            required
            className='w-full bg-black border border-gray-700 rounded-lg p-3 text-gray-200 focus:border-cyan-400 focus:outline-none transition'
          />

          <textarea
            name='message'
            placeholder='Üzeneted...'
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className='w-full bg-black border border-gray-700 rounded-lg p-3 text-gray-200 focus:border-cyan-400 focus:outline-none transition'
          />

          <button
            type='submit'
            className='w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg shadow-lg hover:bg-cyan-600 transition'
          >
            Üzenet küldése
          </button>
        </form>
      </section>

      {/* EXTRA INFO */}
      <section className='bg-gray-900 rounded-2xl shadow-lg p-10 text-center'>
        <h2 className='text-3xl font-semibold text-cyan-400 mb-4'>
          Miért érdemes írni?
        </h2>

        <div className='grid md:grid-cols-3 gap-6 text-gray-300'>
          <Info text='Technikai segítség a rendszer használatához.' />
          <Info text='Hibabejelentés és fejlesztési javaslatok.' />
          <Info text='Egyedi funkciók igénylése vállalkozások számára.' />
        </div>
      </section>
    </div>
  );
}

function Info({ text }: { text: string }) {
  return (
    <div className='border border-violet-400 rounded-xl p-6 hover:scale-105 transition'>
      {text}
    </div>
  );
}
