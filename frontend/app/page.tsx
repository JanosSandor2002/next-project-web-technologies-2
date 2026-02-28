import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='space-y-20'>
      {/* HERO SECTION */}
      <section className='text-center py-20'>
        <h1 className='text-5xl font-bold mb-6'>
          Termék Nyilvántartó Rendszer
        </h1>

        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Modern webalkalmazás Next.js frontenddel és Express backenddel, amely
          lehetővé teszi termékek kezelését, lekérdezését és
          készletnyilvántartását adatbázisból.
        </p>

        <div className='mt-8 flex justify-center gap-4'>
          <Link
            href='/nyilvantartas'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'
          >
            Nyilvántartás megnyitása
          </Link>

          <Link
            href='/kapcsolat'
            className='border px-6 py-3 rounded-lg hover:bg-gray-200 transition'
          >
            Kapcsolat
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <h2 className='text-3xl font-semibold text-center mb-12'>
          Fő funkciók
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          <FeatureCard
            title='Adatbázis kapcsolat'
            text='Az adatok Express backend API-n keresztül érkeznek valódi adatforrásból.'
          />

          <FeatureCard
            title='Készlet kezelés'
            text='Nyomon követhető minden termék készlete és kategóriája.'
          />

          <FeatureCard
            title='Modern technológia'
            text='Next.js App Router, TypeScript és REST API architektúra.'
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className='bg-white rounded-2xl shadow p-10'>
        <h2 className='text-3xl font-semibold mb-6'>
          Hogyan működik a rendszer?
        </h2>

        <div className='grid md:grid-cols-4 gap-6 text-center'>
          <Step number='1' text='Felhasználó megnyitja az alkalmazást' />
          <Step number='2' text='Frontend API hívást küld' />
          <Step number='3' text='Express backend lekérdezi az adatbázist' />
          <Step number='4' text='Adatok megjelennek a felületen' />
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section>
        <h2 className='text-3xl font-semibold text-center mb-10'>
          Használt technológiák
        </h2>

        <div className='flex flex-wrap justify-center gap-4'>
          {[
            'Next.js',
            'React',
            'TypeScript',
            'Express',
            'REST API',
            'Tailwind CSS',
          ].map((tech) => (
            <span
              key={tech}
              className='bg-gray-200 px-4 py-2 rounded-full text-sm'
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='text-center py-16 bg-blue-600 text-white rounded-2xl'>
        <h2 className='text-3xl font-bold mb-4'>
          Kezdd el a termékek kezelését!
        </h2>

        <p className='mb-6'>
          Nyisd meg a nyilvántartást és tekintsd meg az adatbázisban tárolt
          elemeket.
        </p>

        <Link
          href='/nyilvantartas'
          className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold'
        >
          Tovább a rendszerhez →
        </Link>
      </section>
    </div>
  );
}

/* ---------- Kisebb komponensek ---------- */

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className='p-6 border rounded-xl shadow-sm hover:shadow-lg transition'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{text}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className='space-y-2'>
      <div className='text-3xl font-bold text-blue-600'>{number}</div>
      <p>{text}</p>
    </div>
  );
}
