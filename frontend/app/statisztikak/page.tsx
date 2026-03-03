import StatCard from '@/components/StatCard';

export default function StatisztikakPage() {
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
        <StatCard title='Összes telefon' value='128' color='cyan' />
        <StatCard title='Raktáron' value='94' color='emerald' />
        <StatCard title='Elfogyott' value='12' color='rose' />
        <StatCard title='Kategóriák' value='8' color='violet' />
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
