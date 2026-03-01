import type { Request, Response } from 'express';
export declare const create: (req: Request, res: Response) => Promise<void>;
export declare const getAll: (_: Request, res: Response) => Promise<void>;
export declare const getByBrand: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=product.controller.d.ts.map