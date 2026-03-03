'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';

export default function Navbar() {
  const { user, login, logout } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin() {
    const ok = await login(password);
    if (!ok) {
      setError('Hibás jelszó');
      return;
    }
    setPassword('');
    setError('');
  }

  return (
    <nav className='bg-gray-900 text-white p-4 flex items-center justify-between'>
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
        <Link href='/statisztikak' className='hover:text-cyan-400 transition'>
          Statisztikák
        </Link>
        <Link href='/sugo' className='hover:text-cyan-400 transition'>
          Súgó
        </Link>
        <Link href='/admin' className='hover:text-cyan-400 transition'>
          Admin
        </Link>
      </div>

      {/* Auth / GitHub */}
      <div className='flex items-center gap-4'>
        {!user ? (
          <>
            <input
              type='password'
              placeholder='Jelszó'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-black border border-gray-700 p-2 rounded text-sm text-gray-200'
            />
            <button
              onClick={handleLogin}
              className='bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-600 transition'
            >
              Bejelentkezés
            </button>
            {error && <span className='text-red-400 text-sm'>{error}</span>}
          </>
        ) : (
          <>
            <span className='text-cyan-400 font-semibold'>👤 {user.name}</span>
            <button
              onClick={logout}
              className='border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition'
            >
              Logout
            </button>
          </>
        )}

        {/* GitHub ikon */}
        <Link
          href='https://janossandor2002.github.io/my-website'
          target='_blank'
          className='ml-6 text-white hover:text-cyan-400 transition'
        >
          <FaGithub size={24} />
        </Link>
      </div>
    </nav>
  );
}
