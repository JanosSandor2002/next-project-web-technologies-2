import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/product.model.js';

dotenv.config();

const products = [
  // Nothing Phone
  { brand: 'Nothing', series: 'Phone', model: '1', variant: '', year: 2022 },

  // Samsung Galaxy A sorozat
  {
    brand: 'Samsung',
    series: 'Galaxy A',
    model: '15',
    variant: '',
    year: 2023,
  },
  {
    brand: 'Samsung',
    series: 'Galaxy A',
    model: '25',
    variant: '',
    year: 2023,
  },
  {
    brand: 'Samsung',
    series: 'Galaxy A',
    model: '35',
    variant: '',
    year: 2024,
  },
  {
    brand: 'Samsung',
    series: 'Galaxy A',
    model: '55',
    variant: '',
    year: 2024,
  },

  // Samsung Galaxy S sorozat
  {
    brand: 'Samsung',
    series: 'Galaxy S',
    model: '24',
    variant: 'Ultra',
    year: 2024,
  },
  {
    brand: 'Samsung',
    series: 'Galaxy S',
    model: '25',
    variant: 'Ultra',
    year: 2025,
  },

  // Xiaomi sorozatok
  { brand: 'Xiaomi', series: '14', model: 'Pro', variant: 'Ultra', year: 2023 },
  { brand: 'Xiaomi', series: '15', model: 'Pro', variant: 'Ultra', year: 2024 },
  { brand: 'Xiaomi', series: '17', model: 'Pro', variant: 'Ultra', year: 2026 },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDB connected for seeding');

    // Töröljük a meglévő adatokat
    await Product.deleteMany({});
    console.log('Existing products removed');

    // Feltöltés
    await Product.insertMany(products);
    console.log('Products inserted');

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();
