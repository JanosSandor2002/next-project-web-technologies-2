import { Product } from '@/types/Product';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className='border rounded-lg p-4 shadow'>
      <h2 className='text-xl font-bold'>{product.name}</h2>

      <p>Kategória: {product.category}</p>
      <p>Ár: {product.price} Ft</p>
      <p>Készlet: {product.stock}</p>

      <button className='mt-3 bg-blue-500 text-white px-3 py-1 rounded'>
        Részletek
      </button>
    </div>
  );
}
