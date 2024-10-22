export interface Item {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  brand?: string;
  createdAt: Date;
  updatedAt: Date;
}
