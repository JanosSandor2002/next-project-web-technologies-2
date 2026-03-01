import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='space-y-24 px-4 md:px-20 py-10'>
      {/* HERO SECTION */}
      <section className='text-center py-20'>
        <h1 className='text-5xl font-bold mb-6 text-cyan-400 drop-shadow-lg'>
          Telefon Nyilvántartó Rendszer
        </h1>

        <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
          Ez a webalkalmazás lehetővé teszi okostelefonok és készülékek
          nyilvántartását, készletkezelését és részletes adatainak kezelését.
          Modern Next.js frontend és Express backend biztosítja az adatok gyors
          és biztonságos kezelését.
        </p>

        <div className='mt-10 flex justify-center gap-6'>
          <Link
            href='/nyilvantartas'
            className='bg-cyan-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-600 transition'
          >
            Nyilvántartás megnyitása
          </Link>

          <Link
            href='/kapcsolat'
            className='border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition'
          >
            Kapcsolat
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <h2 className='text-3xl font-semibold text-center mb-12 text-cyan-400'>
          Fő funkciók
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          <FeatureCard
            title='Telefonadatok részletesen'
            text='Minden készülékhez tárolhatók: márka, modell, memória, RAM, CPU, GPU, kamera, akkumulátor és töltés sebesség.'
            borderClass='border-cyan-400'
            textClass='text-cyan-400'
          />

          <FeatureCard
            title='Készlet és kategória'
            text='Könnyen nyomon követheted a telefonok raktárkészletét, kategóriáit és árát, hogy mindig naprakész legyen az adatbázis.'
            borderClass='border-emerald-400'
            textClass='text-emerald-400'
          />

          <FeatureCard
            title='Modern technológia'
            text='A rendszer Next.js App Router-t, TypeScript-et, Tailwind CSS-t és REST API-t használ, hogy gyors és biztonságos legyen.'
            borderClass='border-violet-400'
            textClass='text-violet-400'
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className='bg-gray-900 rounded-2xl shadow-lg p-10'>
        <h2 className='text-3xl font-semibold mb-6 text-center text-cyan-400'>
          Hogyan működik a telefon nyilvántartás?
        </h2>

        <div className='grid md:grid-cols-4 gap-6 text-center'>
          <Step
            number='1'
            text='Felhasználó megnyitja az alkalmazást a böngészőben.'
          />
          <Step
            number='2'
            text='A frontend API hívást küld a telefonok adatainak lekéréséhez.'
          />
          <Step
            number='3'
            text='Az Express backend lekérdezi az adatbázist (MongoDB) és visszaküldi az adatokat.'
          />
          <Step
            number='4'
            text='A telefonok listája megjelenik a felhasználó felületén, ahol részletek is elérhetők.'
          />
        </div>
      </section>

      {/* TELEFON ADATOK */}
      <section className='mt-20'>
        <h2 className='text-3xl font-semibold text-center mb-8 text-cyan-400'>
          Mit tartalmaz a telefon nyilvántartás?
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            {
              title: 'Márka és modell',
              text: 'Az okostelefon gyártója és pontos típusa.',
              borderClass: 'border-cyan-400',
              textClass: 'text-cyan-400',
            },
            {
              title: 'Memória és RAM',
              text: 'A készülék tárhelye és memóriája, pl. 256GB / 8GB.',
              borderClass: 'border-emerald-400',
              textClass: 'text-emerald-400',
            },
            {
              title: 'CPU és GPU',
              text: 'A készülék processzora és grafikus egysége, pl. Snapdragon 778G+ / Adreno 642L.',
              borderClass: 'border-violet-400',
              textClass: 'text-violet-400',
            },
            {
              title: 'Kamera',
              text: 'Fő és másodlagos kamerák felbontása, pl. 50MP + 12MP.',
              borderClass: 'border-rose-400',
              textClass: 'text-rose-400',
            },
            {
              title: 'Akkumulátor és töltés',
              text: 'Az akkumulátor kapacitása és töltési sebessége.',
              borderClass: 'border-amber-400',
              textClass: 'text-amber-400',
            },
            {
              title: 'Készlet és ár',
              text: 'Mennyi darab van raktáron, és mennyi az aktuális ár.',
              borderClass: 'border-fuchsia-400',
              textClass: 'text-fuchsia-400',
            },
          ].map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              text={item.text}
              borderClass={item.borderClass}
              textClass={item.textClass}
            />
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className='mt-20'>
        <h2 className='text-3xl font-semibold text-center mb-10 text-cyan-400'>
          Használt technológiák
        </h2>

        <div className='bg-black flex flex-wrap justify-center gap-4 p-4 rounded-xl'>
          {[
            'Next.js',
            'React',
            'TypeScript',
            'Express',
            'REST API',
            'Tailwind CSS',
            'MongoDB',
          ].map((tech) => (
            <span
              key={tech}
              className='bg-black border-2 border-cyan-400 px-4 py-2 rounded-full text-sm text-cyan-400 hover:bg-cyan-400 hover:text-black transition'
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='text-center py-16 bg-cyan-500 text-black rounded-2xl mt-24 shadow-lg'>
        <h2 className='text-3xl font-bold mb-4'>
          Kezdd el a telefonok kezelését!
        </h2>

        <p className='mb-6 max-w-2xl mx-auto'>
          Nyisd meg a nyilvántartást, tekintsd meg az összes telefon részletes
          adatait, és kezeld a készletet valós időben.
        </p>

        <Link
          href='/nyilvantartas'
          className='bg-black text-cyan-400 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-cyan-400 hover:text-black transition'
        >
          Tovább a rendszerhez →
        </Link>
      </section>
    </div>
  );
}

/* ---------- Kisebb komponensek ---------- */
function FeatureCard({
  title,
  text,
  borderClass,
  textClass,
}: {
  title: string;
  text: string;
  borderClass: string;
  textClass: string;
}) {
  return (
    <div
      className={`p-6 border-2 ${borderClass} rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105`}
    >
      <h3 className={`text-xl font-semibold mb-2 ${textClass}`}>{title}</h3>
      <p className='text-gray-300'>{text}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className='space-y-2'>
      <div className='text-3xl font-bold text-cyan-400'>{number}</div>
      <p className='text-gray-300'>{text}</p>
    </div>
  );
}
