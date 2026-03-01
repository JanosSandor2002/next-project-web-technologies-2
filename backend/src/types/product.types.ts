export interface IProduct {
  brand: string;
  series: string;
  model: string;
  variant?: string;
  year?: number;

  // Specifikációk
  rom?: string;
  ram?: string;
  cpu?: string;
  gpu?: string;
  camera?: string;
  battery?: string;
  charge?: string;

  price: number;
  stock: number;
  url: string;
}
