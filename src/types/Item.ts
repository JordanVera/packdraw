export interface Item {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  brand?: string;
  quantity?: number;
  createdAt: Date;
  updatedAt: Date;
}
