import Product from '../models/product.model.js';
import type { IProduct } from '../types/product.types.js';

export const createProduct = async (data: IProduct) => {
  return await Product.create(data);
};

export const getProducts = async () => {
  return await Product.find();
};
export const updateProduct = async (id: string, data: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};
// <<< Új függvény a brand szerinti kereséshez
export const getProductsByBrand = async (brand: string) => {
  return await Product.find({
    brand: { $regex: new RegExp(`^${brand}$`, 'i') },
  });
  // 'i' flag = kis/nagybetűtől független
};
