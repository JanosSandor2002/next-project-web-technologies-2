import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './routes/product.routes.js';
const app = express();
app.use(cors());
app.use(express.json());
// ✅ ES module dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ✅ STATIC FILES (backend/public)
app.use(express.static(path.join(__dirname, 'public')));
// API routes
app.use('/api/products', productRoutes);
export default app;
//# sourceMappingURL=app.js.map