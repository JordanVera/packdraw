import { Item } from '@prisma/client';

export interface CreatePackData {
  name: string;
  description: string;
  price: number;
  coverImage: string;
  items: Array<{
    itemId: string;
    quantity: number;
  }>;
  userId: string;
  commision: number;
}
