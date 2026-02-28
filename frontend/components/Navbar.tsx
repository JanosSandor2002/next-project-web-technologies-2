import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-gray-900 text-white p-4 flex gap-6'>
      <Link href='/'>Bemutató</Link>
      <Link href='/nyilvantartas'>Nyilvántartás</Link>
      <Link href='/kapcsolat'>Kapcsolat</Link>
    </nav>
  );
}
