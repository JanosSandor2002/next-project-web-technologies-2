'use client';

import StatCard from '@/components/StatCard';
import { useGlobal } from '@/app/context/GlobalContext';

export default function StatisztikakPage() {
  const { state } = useGlobal();
  const { products } = state;

  // Összes telefon = termékek száma
  const totalProducts = products.length;

  // Összes darabszám raktáron
  const totalInStock = products.reduce((sum, p) => sum + (p.stock ?? 0), 0);

  // Elfogyott darab
  const outOfStock: number = 36;

  // Kategóriák száma (unique series)
  const categories = Array.from(new Set(products.map((p) => p.series))).length;

  return (
    <div className='space-y-20 px-4 md:px-20 py-10'>
      {/* HERO */}
      <section className='text-center py-16'>
        <h1 className='text-5xl font-bold text-cyan-400 drop-shadow-lg mb-6'>
          Statisztikák
        </h1>
        <p className='text-gray-300 max-w-2xl mx-auto'>
          Áttekintés a telefon nyilvántartó rendszer aktuális adatairól.
        </p>
      </section>

      {/* STATS GRID */}
      <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <StatCard
          title='Összes telefon'
          value={totalProducts.toString()}
          color='cyan'
        />
        <StatCard
          title='Raktáron'
          value={totalInStock.toString()}
          color='emerald'
        />
        <StatCard
          title='Elfogyott'
          value={outOfStock.toString()}
          color='rose'
        />
        <StatCard
          title='Szériák'
          value={categories.toString()}
          color='violet'
        />
      </section>

      {/* INFO */}
      <section className='bg-gray-900 rounded-2xl shadow-lg p-10 text-center'>
        <h2 className='text-3xl text-cyan-400 font-semibold mb-4'>
          Rendszer állapot
        </h2>
        <p className='text-gray-300 max-w-2xl mx-auto'>
          A statisztikák segítenek gyorsan átlátni a készlet állapotát és
          felismerni a hiányzó vagy népszerű eszközöket.
        </p>
      </section>
    </div>
  );
}
