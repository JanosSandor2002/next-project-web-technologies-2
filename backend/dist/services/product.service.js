import Product from '../models/product.model.js';
export const createProduct = async (data) => {
    return await Product.create(data);
};
export const getProducts = async () => {
    return await Product.find();
};
// <<< Új függvény a brand szerinti kereséshez
export const getProductsByBrand = async (brand) => {
    return await Product.find({
        brand: { $regex: new RegExp(`^${brand}$`, 'i') },
    });
    // 'i' flag = kis/nagybetűtől független
};
//# sourceMappingURL=product.service.js.map