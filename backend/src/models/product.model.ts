import mongoose from 'mongoose';
import type { IProduct } from '../types/product.types.js';

const productSchema = new mongoose.Schema<IProduct>(
  {
    brand: { type: String, required: true },
    series: { type: String, required: true },
    model: { type: String, required: true },
    variant: String,
    year: Number,

    rom: String,
    ram: String,
    cpu: String,
    gpu: String,
    camera: String,
    battery: String,
    charge: String,

    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IProduct>('Product', productSchema);
