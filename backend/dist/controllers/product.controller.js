import * as productService from '../services/product.service.js';
export const create = async (req, res) => {
    const product = await productService.createProduct(req.body);
    res.json(product);
};
export const getAll = async (_, res) => {
    const products = await productService.getProducts();
    res.json(products);
};
export const getByBrand = async (req, res) => {
    const brand = req.params.brand;
    if (!brand || Array.isArray(brand)) {
        return res
            .status(400)
            .json({ message: 'Brand parameter is required and must be a string' });
    }
    const products = await productService.getProductsByBrand(brand);
    res.json(products);
};
//# sourceMappingURL=product.controller.js.map