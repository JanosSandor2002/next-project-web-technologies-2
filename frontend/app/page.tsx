import ProductList from '@/components/ProductList';

export default function HomePage() {
  return (
    <main className='p-10'>
      <h1 className='text-3xl font-bold mb-6'>Termék Nyilvántartó</h1>

      <ProductList />
    </main>
  );
}
