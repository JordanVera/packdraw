import { PackItem } from './PackItem';

// Represents the relationship between a Pack and an Item

export interface Pack {
  id: string;
  name: string;
  description: string;
  price: number;
  coverImage: string;
  commission: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  userId: string;
  items: PackItem[];
  balance: string;
}
