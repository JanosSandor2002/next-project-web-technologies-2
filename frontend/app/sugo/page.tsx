export default function SugoPage() {
  return (
    <div className='space-y-20 px-4 md:px-20 py-10'>
      {/* HERO */}
      <section className='text-center py-16'>
        <h1 className='text-5xl font-bold text-cyan-400 drop-shadow-lg mb-6'>
          Súgó & Dokumentáció
        </h1>

        <p className='text-gray-300 max-w-2xl mx-auto'>
          Itt megtalálod a rendszer használatához szükséges információkat.
        </p>
      </section>

      {/* HELP CARDS */}
      <section className='grid md:grid-cols-3 gap-8'>
        <HelpCard
          title='Telefon hozzáadása'
          text='Nyisd meg a nyilvántartás oldalt és kattints az új készülék hozzáadása gombra.'
          color='cyan'
        />

        <HelpCard
          title='Adatok szerkesztése'
          text='A telefon részleteinél módosíthatod a készletet, árat és specifikációkat.'
          color='emerald'
        />

        <HelpCard
          title='Készlet kezelés'
          text='A rendszer automatikusan követi a raktárkészlet változásait.'
          color='violet'
        />
      </section>

      {/* FAQ */}
      <section className='bg-gray-900 rounded-2xl shadow-lg p-10'>
        <h2 className='text-3xl text-center text-cyan-400 mb-8'>
          Gyakori kérdések
        </h2>

        <div className='space-y-6 text-gray-300'>
          <Faq
            q='Elvesznek az adatok frissítéskor?'
            a='Nem. Az adatok adatbázisban tárolódnak, nem a böngészőben.'
          />

          <Faq
            q='Több felhasználó használhatja?'
            a='Igen, a rendszer backend API-n keresztül több klienset is kezel.'
          />
        </div>
      </section>
    </div>
  );
}

function HelpCard({
  title,
  text,
  color,
}: {
  title: string;
  text: string;
  color: 'cyan' | 'emerald' | 'violet';
}) {
  const colors = {
    cyan: 'border-cyan-400 text-cyan-400',
    emerald: 'border-emerald-400 text-emerald-400',
    violet: 'border-violet-400 text-violet-400',
  };

  return (
    <div
      className={`p-6 border-2 ${colors[color]} rounded-xl shadow-lg hover:scale-105 transition`}
    >
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-300'>{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <h4 className='text-cyan-400 font-semibold'>{q}</h4>
      <p>{a}</p>
    </div>
  );
}
