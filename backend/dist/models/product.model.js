import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    series: { type: String, required: true },
    model: { type: String, required: true },
    variant: String,
    year: Number,
    // Specifikációk
    rom: String,
    ram: String,
    cpu: String,
    gpu: String,
    camera: String,
    battery: String,
    charge: String,
}, { timestamps: true });
export default mongoose.model('Product', productSchema);
//# sourceMappingURL=product.model.js.map