// Navbar.tsx
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa'; // React Icons GitHub ikon

export default function Navbar() {
  return (
    <nav className='bg-gray-900 text-white p-4 flex items-center justify-center gap-8'>
      {/* Oldal linkek */}
      <div className='flex gap-6'>
        <Link href='/' className='hover:text-cyan-400 transition'>
          Bemutató
        </Link>
        <Link href='/nyilvantartas' className='hover:text-cyan-400 transition'>
          Nyilvántartás
        </Link>
        <Link href='/kapcsolat' className='hover:text-cyan-400 transition'>
          Kapcsolat
        </Link>
      </div>

      {/* GitHub ikon */}
      <Link
        href='https://janossandor2002.github.io/my-website'
        target='_blank'
        className='ml-6 text-white hover:text-cyan-400 transition'
      >
        <FaGithub size={24} />
      </Link>
    </nav>
  );
}
