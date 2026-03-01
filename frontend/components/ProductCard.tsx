// ProductCard.tsx
import { Product } from '@/types/Product';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className='p-6 border-2 border-cyan-400 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 bg-gray-900 flex flex-col items-center text-center'>
      <h2 className='text-xl font-bold mb-2 text-cyan-400'>{product.name}</h2>

      <p className='text-gray-300'>
        Kategória: {product.category || 'Elektronika'}
      </p>
      <p className='text-gray-300'>Ár: {product.price ?? 'N/A'} USD</p>
      <p className='text-gray-300'>Készlet: {product.stock ?? 'N/A'}</p>

      <div className='mt-3 text-sm space-y-1 text-gray-200'>
        {product.cpu && <p>CPU: {product.cpu}</p>}
        {product.gpu && <p>GPU: {product.gpu}</p>}
        {product.ram && <p>RAM: {product.ram}</p>}
        {product.rom && <p>ROM: {product.rom}</p>}
        {product.camera && <p>Kamera: {product.camera}</p>}
        {product.battery && <p>Akku: {product.battery}</p>}
        {product.charge && <p>Töltés: {product.charge}</p>}
        {product.year && <p>Megjelenés: {product.year}</p>}
      </div>

      {product.url && (
        <button
          onClick={() => window.open(product.url, '_blank')}
          className='mt-4 w-full bg-cyan-500 text-black font-semibold py-2 rounded-lg shadow-lg hover:bg-cyan-600 transition'
        >
          Részletek
        </button>
      )}
    </div>
  );
}
