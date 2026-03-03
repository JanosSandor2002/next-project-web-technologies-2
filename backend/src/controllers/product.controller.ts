import type { Request, Response } from 'express';
import * as productService from '../services/product.service.js';

export const create = async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);
  res.json(product);
};

export const getAll = async (_: Request, res: Response) => {
  const products = await productService.getProducts();
  res.json(products);
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res
        .status(400)
        .json({ message: 'ID parameter is required and must be a string' });
    }

    const updatedProduct = await productService.updateProduct(id, req.body);

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Update failed' });
  }
};

export const getByBrand = async (req: Request, res: Response) => {
  const brand = req.params.brand;

  if (!brand || Array.isArray(brand)) {
    return res
      .status(400)
      .json({ message: 'Brand parameter is required and must be a string' });
  }

  const products = await productService.getProductsByBrand(brand);
  res.json(products);
};
